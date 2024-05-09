<template>
  <div class="signup">
    <div class="container">
      <form @click.prevent class="sign-form bg-white rounded shadow">
        <h3 class="text-center pb-4 pt-2">Create your account</h3>
        <div class="mb-3">
          <label for="firstname" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="Name"
            v-model="name"
          />
          <span class="text-danger px-1" v-if="v$.name.$errors[0]">{{
            v$.name.$errors[0]["$message"]
          }}</span>
        </div>
        <!-- <div class="mb-3">
          <label for="lastname" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="Last Name"
          />
        </div> -->
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="Phone"
            v-model="phone"
          />
          <span class="text-danger px-1" v-if="v$.phone.$errors[0]">{{
            v$.phone.$errors[0]["$message"]
          }}</span>
        </div>
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
        <!-- //error message  -->
          <span class="text-danger px-1 py-3 d-block" v-if="errorMessage" >{{ errorMessage }}</span>

        <div class="mb-3 d-flex justify-content-center">
          <input
            type="submit"
            value="Create Account"
            class="btn btn-purple rounded-pill w-75 fs-5"
            id="submit"
            @click="SignUpNow()"
          />
        </div>
        <div class="mb-3 text-center">
          <p color="text-secondary">
            Already registered?
            <router-link :to="{ name: 'Signin' }" class="btn text-purple"
              >Sign In</router-link
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
  name: "SignUp",
  data() {
    return {
      v$: useValidate(),
      name: "",
      pass: "",
      phone: "",
      email: "",
      errorMessage:"",
    };
  },
  validations() {
    return {
      name: { required },
      pass: { required, minLength: minLength(5) },
      phone: { required, minLength: minLength(10) },
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
    async SignUpNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // console.log("v success");
        let result = await axios.post(
          `${process.env.VUE_APP_API_URL}/register`,
          {
            name: this.name,
            email: this.email,
            password: this.pass,
            phone: this.phone,
          }
        ).then(result =>{
          this.errorMessage = ""
          // save to localstorage
          localStorage.setItem("user-info", JSON.stringify(result.data.data));
          // console.log(JSON.stringify(result.data));
          // success signup and go to home bage
          this.$router.push({ name: "Profile" });

        }).catch(error=>{
          let errorData = error.response.data.error
          console.log(error)
          if(errorData.email && errorData.phone){
            this.errorMessage = 'email and phone hase already been token'
          }else if(errorData.email){
            this.errorMessage = errorData.email[0]
          }else if(errorData.phone){
            this.errorMessage = errorData.phone[0]
          }
        })
      } else {console.log("v failld")};
    },
  },
};
</script>
<style scoped>
.signup {
  height: calc(100vh - 70px);
}
.signup .container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup .sign-form {
  padding: 1rem;
  width: 100%;
  max-width: 700px;
}
</style>
