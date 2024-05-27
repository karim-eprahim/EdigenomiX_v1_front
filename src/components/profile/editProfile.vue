<template>
  <div class="container pageh py-5">
    <div class="row row-gap-3">
      <!-- left column -->
      <div class="col-md-3">
        <div class="text-center">
          <img
            :src="profilePhotoUrl"
            class="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6>Upload a different photo...</h6>

          <input
            type="file"
            class="form-control mx-auto"
            style="max-width: 300px"
            @change="changeProfilePhoto"
          />
        </div>
      </div>

      <!-- edit form column -->
      <div class="col-md-9 personal-info">
        <div
          class="alert alert-warning mt-3 mt-sm-0 text-center"
          role="alert"
          v-if="UpdateErr"
        >
          {{ UpdateErr }}
        </div>
        <h3 class="text-center mb-3">Personal info</h3>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" v-model="name" />
              <span class="text-danger px-1" v-if="v$.name.$errors[0]">{{
                v$.name.$errors[0]["$message"]
              }}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" v-model="email" />
              <span class="text-danger px-1" v-if="v$.email.$errors[0]">{{
                v$.email.$errors[0]["$message"]
              }}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">phone:</label>
            <div class="col-lg-8">
              <input class="form-control" type="number" v-model="phone" />
              <span class="text-danger px-1" v-if="v$.phone.$errors[0]">{{
                v$.phone.$errors[0]["$message"]
              }}</span>
            </div>
          </div>
          <button
            type="button"
            @click="EditProfile()"
            class="btn btn-purple d-block mx-auto px-5 my-4 fw-bold"
          >
            EditProfile
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "EditProfile",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      email: "",
      phone: "",
      userId: "",
      UpdateErr: "",
      profilePhotoUrl: "",
      token: "",
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: { required, minLength: minLength(5) },
    };
  },
  mounted() {
    let userData = localStorage.getItem("user-info");
    if (userData) {
      this.token = JSON.parse(userData).token;
      this.name = JSON.parse(userData).user.name;
      this.email = JSON.parse(userData).user.email;
      this.phone = JSON.parse(userData).user.phone;
      this.userId = JSON.parse(userData).user.id;
      // this.profilePhotoUrl = JSON.parse(userData).user.image;
      this.profilePhotoUrl = JSON.parse(localStorage.getItem("userAvatar"));
    } else {
      this.redirectTo({ val: "Signin" });
    }
  },
  methods: {
    // edit profile
    async EditProfile() {
      this.v$.$validate();

      if (!this.v$.$error) {
        try {
          let result = await axios.post(
            `${process.env.VUE_APP_API_URL}/update-profile`,
            {
              name: this.name,
              email: this.email,
              phone: this.phone,
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
                Accept: `application/json`,
              },
            }
          );

          if (result.status === 200) {
            let user = {};
            user.token = this.token;
            user.user = result.data.data;
            // Save to local storage
            localStorage.setItem("user-info", JSON.stringify(user));
            // Success: user found
            this.$router.push({ name: "Profile" });
          } else {
            this.UpdateErr = "User Not Found";
          }
        } catch (error) {
          this.UpdateErr = "User Not Found";
        }
      } else {
        console.log("Validation error");
      }
    },
    // edit Avatar
    async changeProfilePhoto(event) {
      const file = event.target.files[0];
      const loadingToastId = toast.loading("Uploading photo...");
      const formData = new FormData();
      formData.append("avatar", file);
      try {
        let result = await axios.post(
          `${process.env.VUE_APP_API_URL}/change-avatar`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Check the status of the response
        if (result.status === 200) {
          console.log("Avatar changed successfully", result.data);
          toast.update(loadingToastId, {
              render: "Photo changed successfully",
              type: "success",
              isLoading: false,
              autoClose: 1500,
            });
            localStorage.setItem("userAvatar", JSON.stringify(result.data.data.newAvatarUrl));
        } else {
          console.error("Unexpected status code:", result.status);
          toast.update(loadingToastId, {
              render: `Failed to upload photo`,
              type: "error",
              isLoading: false,
              autoClose: 1500,
            });
        }
      } catch (error) {
        console.error("Error changing avatar", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 200px;
  height: 200px;
}
.form-group {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media (max-width: 767px) {
  .form-group {
    display: block;
    text-align: start;
  }
}
</style>
