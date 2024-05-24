<template>
  <div class="container">
    <div class="card border-0">
      <div class="card-header">
        <ul
          class="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
            <a
              :class="['nav-link', { active: currentActive === index }]"
              @click="goToTab(index)"
            >
              {{ tab.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'tab-pane fade',
              { 'show active': currentActive === index },
            ]"
            v-show="currentActive === index"
          >
            <slot :name="tab.slotName" :formData="formData"></slot>
          </div>
        </div>
        <br />
        <div class="d-flex justify-content-between">
          <button
            @click="previousTab"
            class="btn btn-secondary px-5"
            v-if="currentActive > 0"
          >
            Previous
          </button>
          <button
            @click="nextTab"
            class="btn btn-purple px-5"
            v-if="currentActive < totalTabs - 1"
          >
            Next
          </button>
          <button
            @click="submit"
            class="btn btn-purple px-5"
            v-if="currentActive === totalTabs - 1"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

export default {
  name: "FormWizard",

  data() {
    return {
      currentActive: 0,
      formData: {
        email: "",
        token: "",
        password: "",
        confirmPassword: "",
      },
      tabs: [
        { name: "Step 1", slotName: "step1" },
        { name: "Step 2", slotName: "step2" },
        { name: "Step 3", slotName: "step3" },
      ],
    };
  },

  computed: {
    totalTabs() {
      return this.tabs.length;
    },
  },

  methods: {
    goToTab(index) {
      this.currentActive = index;
    },

    previousTab() {
      if (this.currentActive > 0) {
        this.currentActive--;
      }
    },

    async nextTab() {
      if (this.currentActive < this.totalTabs - 1) {
        //first step "send email"
        if (this.formData.email && this.currentActive == 0) {
          const formData = new FormData();
          formData.append("email", this.formData.email);
          await axios
            .post(`${process.env.VUE_APP_API_URL}/send-reset-email`, formData)
            .then((res) => {
              toast.success(res.data.api_message.message, {
                autoClose: 1000,
              });
              this.currentActive++;
            })
            .catch((err) => {
              console.log(err.response.data.error);
              toast.error("Error in Email", {
                autoClose: 1000,
              });
            });
          //second step "send email and token"
        } else if (this.formData.token && this.currentActive == 1) {
          const formData = new FormData();
          formData.append("email", this.formData.email);
          formData.append("token", this.formData.token);
          await axios
            .post(`${process.env.VUE_APP_API_URL}/check-user-tocken`, formData)
            .then((res) => {
              toast.success(res.data.api_message.message, {
                autoClose: 1000,
              });
              this.currentActive++;
            })
            .catch((err) => {
              console.log(err.response.data.error);
              toast.error("wrong token ! try again", {
                autoClose: 1000,
              });
            });
        } else if (this.currentActive == 1) {
          toast.error("Enter The Token Sended To Your Email", {
            autoClose: 1000,
          });
        }
      }
    },

    async submit() {
      // Basic form validation
      const valid = this.validateForm();
      if (valid) {
        const formData = new FormData();
        formData.append("token", this.formData.token);
        formData.append("password", this.formData.password);
        formData.append("confirm_password", this.formData.confirmPassword);
        await axios
          .post(`${process.env.VUE_APP_API_URL}/reset-password`, formData)
          .then((res) => {
            toast.success("Password Reset Successfully", {
              autoClose: 1000,
            });
            window.location.reload();
            this.$router.push({ name: "Signin" });
          })
          .catch((err) => {
            console.log(err.response.data.error);
            toast.error("wrong token ! try again", {
              autoClose: 1000,
            });
          });
      } else {
        toast.error("Please fill out all required fields.", {
          autoClose: 1000,
        });
      }
    },

    validateForm() {
      // Simplistic validation logic
      for (const key in this.formData) {
        if (!this.formData[key]) {
          return false;
        }
      }
      // Check if password and confirmPassword match
      if (this.formData.password !== this.formData.confirmPassword) {
        toast.error("Passwords do not match.", {
          autoClose: 1000,
        });
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
/* Custom CSS to enhance form styling */
/* .container {
    max-width: 600px;
  } */

.card {
  /* border-radius: 10px; */
  width: 100%;
  height: 100%;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  display: none;
}

.nav-pills .nav-link {
  border-radius: 50px;
  padding: 10px 20px;
}

.nav-pills .nav-link.active {
  background-color: #007bff;
  color: #fff;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  border-radius: 5px;
}

.btn {
  padding: 10px 20px;
  border-radius: 50px;
}
</style>
