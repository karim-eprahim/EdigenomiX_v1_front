<template>
  <div class="signin">
    <div class="container">
      <form @click.prevent class="sign-form bg-white rounded shadow">
        <h3 class="text-center pb-4 pt-2">Sign in with your account</h3>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            v-model="email"
          />
          <span class="text-danger px-1" v-if="v$.email.$errors[0]">{{
            v$.email.$errors[0]["$message"]
          }}</span>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="pass"
          />
          <span class="text-danger px-1" v-if="v$.pass.$errors[0]">{{
            v$.pass.$errors[0]["$message"]
          }}</span>
        </div>
        <div
          class="alert alert-warning text-center"
          v-if="userNotFoundErr"
          role="alert"
        >
          {{ userNotFoundErr }}
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <input
            type="submit"
            value="SignIn"
            class="btn btn-purple rounded-pill fs-5 w-50"
            id="submit"
            @click="SignIn()"
          />
        </div>
        <div class="mb-3 text-center">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn text-purple"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Forgot Your Password?
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="forgetPass"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1
                    class="modal-title text-center fs-4 fw-bold"
                    id="forgetPass"
                  >
                    Forgot Password
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <p for="resetPass" class="text-start">
                      Enter your email address and we'll send you your password
                      reset instructions
                    </p>
                    <input
                      type="email"
                      class="form-control"
                      id="resetPass"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div class="modal-footer border-0 justify-content-center">
                  <button type="button" class="btn btn-purple px-5">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 text-center">
          <p color="text-secondary">
            Don't have an account?
            <router-link :to="{ name: 'Signup' }" class="btn text-purple"
              >Create Account</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      v$: useValidate(),
      pass: "",
      email: "",
      userNotFoundErr: "",
    };
  },
  validations() {
    return {
      pass: { required, minLength: minLength(5) },
      email: { required, email },
    };
  },
  mounted() {
    let userData = localStorage.getItem("user-info");
    if (userData) {
      this.$router.push({name:'Profile'})
    }
  },
  methods: {
    async SignIn() {
      this.v$.$validate();

      if (!this.v$.$error) {
        try {
          let result = await axios.post(
            "http://localhost/EdigenomiX-v1/public/api/login",
            {
              email: this.email,
              password: this.pass,
            }
          );

          if (result.status === 200) {
            // console.log(result.data);
            // Save to local storage
            localStorage.setItem("user-info", JSON.stringify(result.data.data));
            // Success: user found
            this.$router.push({ name: "Profile" });
          } else {
            this.userNotFoundErr = "User Not Found";
          }
        } catch (error) {
          this.userNotFoundErr = "User Not Found";
        }
      } else {
        console.log("Validation error");
      }
    },
  },
};
</script>
<style scoped>
.signin {
  height: calc(100vh - 70px);
}

.signin .container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin .sign-form {
  padding: 1rem;
  width: 100%;
  max-width: 700px;
}
</style>
