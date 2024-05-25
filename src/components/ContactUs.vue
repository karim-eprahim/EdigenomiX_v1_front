<template>
  <div class="contact-us py-4">
    <div class="container-fluid py-4">
      <div class="headt container-fluid py-4">
        <h2 class="head-text display-6 text-center fw-bold">Contact Us</h2>
        <p class="text-center mt-4 mb-0 pb-0 w-75 mx-auto">
          Take the Next Step Ready to elevate your research and achieve new levels of success
        </p>
      </div>
    </div>
    <div class="top-contact">
      <div class="container py-4">
        <div class="row py-3 row-cols-1 row-cols-md-2 g-4 mw-100 mx-auto justify-content-sm-around">
          <div class="col contact-form bg-white rounded-5 py-4 py-sm-5 px-3 px-sm-4">
            <form class="text-gray" @submit.prevent="sendMessage()">
              <div class="mb-3 me-3 w-100">
                <label for="firstname" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="firstname" placeholder="Your Name" v-model="name" />
                <div id="user" class="form-text text-danger" v-if="takenError.name">
                  {{ takenError.name[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email Adress" v-model="email" />
                <div id="user" class="form-text text-danger" v-if="takenError.email">
                  {{ takenError.email[0] }}
                </div>
              </div>
              <div class="mb-3 w-100">
                <label for="mobile" class="form-label">Your Phone</label>
                <input type="text" class="form-control" id="mobile" v-model="mobile" />
                <div id="user" class="form-text text-danger" v-if="takenError.mobile">
                  {{ takenError.mobile[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">How can we help?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
                <div id="user" class="form-text text-danger" v-if="takenError.message">
                  {{ takenError.message[0] }}
                </div>
              </div>
              <div class="pt-3 d-flex justify-content-center">
                <input type="submit" value="Submit" class="btn btn-purple rounded-pill w-50 fs-5" />
              </div>
            </form>
          </div>

          <div class="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220002.71832082162!2d32.13836365!3d30.5056962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f842bd43819d99%3A0x8465b12c9ff3a917!2z2KPYqNmIINi12YjZitix2Iwg2YXYrdin2YHYuNipINin2YTYpdiz2YXYp9i52YrZhNmK2Kk!5e0!3m2!1sar!2seg!4v1708610234238!5m2!1sar!2seg"
              style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              class="w-100 h-100 rounded-5"></iframe>
          </div>
        </div>
        <div class="company-info bg-white py-4 rounded-4 mt-4">
          <div class="d-flex flex-column flex-sm-row justify-content-around align-items-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <i>
                <svg color="#30d05f" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-geo-alt-fill mb-1" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </i>
              <h4>Location</h4>
              <p>ismailia, abo-sour</p>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <i>
                <svg color="#6664CF" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-envelope-open-fill mb-1" viewBox="0 0 16 16">
                  <path
                    d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
                </svg>
              </i>
              <h4>Email</h4>
              <p>EdigenomiX@gmail.com</p>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <i>
                <svg color="#CC6BCC" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-telephone-fill mb-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </i>
              <h4>Phone</h4>
              <p>+201023667547</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  name: "contactUs",
  data() {
    return {
      name: "",
      mobile: null,
      email: "",
      message: "",
      takenError: [],
    };
  },
  methods: {
    // 
    async sendMessage() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("mobile", this.phone);
      formData.append("message", this.message);

      await axios
        .post(`${process.env.VUE_APP_API_URL}/contact-us`, formData)
        .then((res) => {
          toast.success(res.data.api_message.message, {
            autoClose: 1000,
          });
        })
        .catch((err) => {
          this.takenError = err.response.data.error;
          toast.error("Sending Message Faild", {
            autoClose: 1000,
          });
        });
    },
  },
};
</script>
<style scoped>
/* contact  */
.top-contact {
  /* background:linear-gradient(45deg, rgba(41, 240, 228, 0.3), rgba(151, 87, 225, 0.3)), url(../assets/about/76819.jpg); */
  min-height: 300px;
  background-image: url(../assets/about/76819.jpg);
  background-size: cover;
}

.contact-form {
  max-width: 500px;
}

.head-text:after {
  content: "";
  display: block;
  width: 10rem;
  max-width: 70%;
  border-bottom: 0.1em solid var(--light-purple);
  margin: 0.3rem auto;
}
</style>
