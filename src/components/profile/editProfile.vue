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
            @change="handleFileChange"
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
          <!-- <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">
                    (GMT-08:00) Pacific Time (US &amp; Canada)
                  </option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">
                    (GMT-07:00) Mountain Time (US &amp; Canada)
                  </option>
                  <option value="Central Time (US &amp; Canada)">
                    (GMT-06:00) Central Time (US &amp; Canada)
                  </option>
                  <option value="Eastern Time (US &amp; Canada)">
                    (GMT-05:00) Eastern Time (US &amp; Canada)
                  </option>
                  <option value="Indiana (East)">
                    (GMT-05:00) Indiana (East)
                  </option>
                </select>
              </div>
            </div>
          </div> -->
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
      this.profilePhotoUrl = JSON.parse(userData).user.image;
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
            // console.log(result.data);
            let user = {};
            user.token = this.token;
            user.user = result.data.data;
            console.log(user);
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

    // edit Avatar
    // edit Avatar
    async handleFileChange(event) {
      const file = event.target.files[0];

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("avatar", file);

      console.log(formData);
      try {
        // Make the API call to change the avatar using axios.post
        let result = await axios.post(
          `${process.env.VUE_APP_API_URL}/change-avatar`,
          formData, // Include the FormData object as the second parameter
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Check the status of the response
        if (result.status === 200) {
          // Handle the successful response, update component state, or perform other actions
          console.log("Avatar changed successfully", result.data);
        } else {
          // Handle other status codes if needed
          console.error("Unexpected status code:", result.status);
        }
      } catch (error) {
        // Log more details about the error
        console.error("Error changing avatar", error);

        // Log the response data if available
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    },

//     handleFileChange(event) {
//   const fileInput = event.target;
//   if (fileInput.files.length > 0) {
//     this.profilePhotoUrl = fileInput.files[0];
//   } else {
//     this.profilePhotoUrl = null;  // Reset to null if no file is selected
//   }
// },

// async updateProfilePhoto() {
//   try {
//     if (!this.profilePhotoUrl) {
//       console.error('No file selected for update');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('avatar', this.profilePhotoUrl);

//     const response = await axios.post('http://localhost/EdigenomiX-v1/public/api/change-avatar', formData, {
//       headers: {
//         Authorization: `Bearer ${this.token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     // Handle the response as needed
//     console.log(response.data);
//   } catch (error) {
//     // Handle errors
//     console.error('Error updating profile photo', error);
//   }
// },

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
