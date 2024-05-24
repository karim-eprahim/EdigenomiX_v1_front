<template>
  <div class="pageh upload">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mb-3">
          <!-- Upload file form  -->
          <div class="upload-card bg-light shadow p-4 rounded">
            <form
              @submit.prevent="getPriceByFile"
              class="d-flex flex-column align-items-center justify-content-center"
            >
              <div class="d-flex flex-column align-items-center px-sm-5">
                <label for="formFileLg" class="form-label mx-auto fs-5"
                  >Upload Document To Place Your Order</label
                >
                <input
                  class="form-control form-control-lg col"
                  id="formFileLg"
                  type="file"
                  ref="file"
                  @change="handleFileChange"
                />
              </div>

              <button
                class="btn btn-lg btn-purple rounded-pill largbtn my-3"
                type="submit"
              >
                Upload
              </button>
            </form>
            <!-- list of prices  -->
            <div class="container mb-5" v-if="pricingPlansByFile[0]">
              <div class="text-center mb-5">
                <h1 class="text-capitalize font-weight-bold">
                  Pricing <span class="headline">Plans</span>
                </h1>
              </div>

              <div
                class="price my-4 py-3 px-5 bg-tertiary d-sm-flex align-items-center justify-content-between"
                v-for="price in pricingPlansByFile"
                :key="price.id"
              >
                <div class="text-center">
                  <span>Price</span>
                  <h1 class="my-2 font-weight-bold">{{ price.price }}</h1>
                </div>
                <div class="text-center text-uppercase text-secondary">
                  <small class="d-block">Edited Within</small>
                  <p class="d-block my-3 text-black">
                    {{ price.edited_within }}
                  </p>
                </div>
                <div class="text-center text-uppercase text-secondary">
                  <small class="d-block">Delivery Time</small>
                  <small class="d-block my-3">{{ price.delevery_at }}</small>
                </div>
                <div class="text-center">
                  <a
                    @click="
                      Order(price.price, price.edited_within, numberOfWords)
                    "
                    href="#"
                    class="btn text-white px-4 py-2 px-sm-3 py-sm-1 px-lg-5 py-lg-3 main-btn"
                    >Order Now</a
                  >
                </div>
              </div>
            </div>
            <!-- End list of prices  -->
          </div>
          <!-- OR  -->
          <!-- <h1 class="OR">OR</h1> -->
          <!-- set the number of words  -->
          <div
            class="words-card bg-light shadow p-4 mt-3 rounded"
            style="display: none"
          >
            <form
              class="d-flex flex-column align-items-center justify-content-center"
              @submit.prevent="getPriceByWordNum"
            >
              <h4 class="mx-auto">View Our Pricing</h4>
              <div class="d-flex align-items-center px-sm-5">
                <label for="formFileLg" class="form-label mx-auto fs-6 me-3"
                  >Enter the word count:</label
                >
                <input
                  v-model="wordNum"
                  class="form-control form-control-lg col"
                  id="formFileLg"
                  type="number"
                />
              </div>

              <button
                type="submit"
                class="btn btn-lg btn-purple rounded-pill largbtn my-3"
              >
                View Price
              </button>
            </form>

            <!-- list of prices  -->
            <div class="container mb-5" v-if="pricingPlansByWordsNum[0]">
              <div class="text-center mb-5">
                <h1 class="text-capitalize font-weight-bold">
                  Pricing <span class="headline">Plans</span>
                </h1>
              </div>

              <div
                class="price my-4 py-3 px-5 bg-tertiary d-sm-flex align-items-center justify-content-between"
                v-for="price in pricingPlansByWordsNum"
                :key="price.id"
              >
                <div class="text-center">
                  <span>Price</span>
                  <h1 class="my-2 font-weight-bold">{{ price.price }}</h1>
                </div>
                <div class="text-center text-uppercase text-secondary">
                  <small class="d-block">Edited Within</small>
                  <p class="d-block my-3 text-black">
                    {{ price.edited_within }}
                  </p>
                </div>
                <div class="text-center text-uppercase text-secondary">
                  <small class="d-block">Delivery Time</small>
                  <small class="d-block my-3">{{ price.delevery_at }}</small>
                </div>
                <div class="text-center">
                  <a
                    @click="Order(price.price, price.edited_within)"
                    href="#"
                    class="btn text-white px-4 py-2 px-sm-3 py-sm-1 px-lg-5 py-lg-3 main-btn"
                    >Upload & Order</a
                  >
                </div>
              </div>
            </div>
            <!-- End list of prices  -->

            <!-- get quote  -->
            <form class="my-3">
              <div class="mb-3 row">
                <label for="staticEmail" class="col col-sm-4 col-form-label"
                  >Document Type</label
                >
                <div class="col">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="mb-3 row align-items-center">
                <label for="staticEmail" class="col col-sm-4 col-form-label"
                  >What Would You Like Our Editors to Address?</label
                >
                <div class="col">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </form>
            <!-- End quote  -->
          </div>
        </div>
        <div class="col-lg-4">
          <!-- we car  -->
          <div class="card care text-bg-light border-0 mw-100 mb-3">
            <div class="card-body">
              <h5 class="card-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#6664cf"
                  class="bi bi-chat-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                  />
                </svg>
                We Care About Your Job Application
              </h5>
              <!-- <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6> -->
              <p class="card-text">
                The moment we receive your order, an expert editorial
                co-ordinator will carefully look at your requirements in order
                to select the perfect editor for your job application. Our
                editors are native English language speakers who specialise in
                refining job applications from a wide range of industries, so
                you can trust that your document will be in good hands! Meet
                some of the experts who will carefully attend to your job
                application and editing requirements.
              </p>
              <!-- <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a> -->
            </div>
          </div>

          <SwiperComments class="serv-comments bg-light"></SwiperComments>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SwiperComments from "@/components/SwiperComments";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    SwiperComments,
  },
  data() {
    return {
      servId: this.$route.params.servId,
      selectedFile: null,
      token: "",
      price_by: null,
      wordNum: null,
      pricingPlansByFile: [],
      pricingPlansByWordsNum: [],
      numberOfWords: null,
    };
  },
  mounted() {
    let userData = localStorage.getItem("user-info");
    if (!userData) {
      this.$router.push({ name: "Signin" });
    } else {
      this.token = JSON.parse(userData).token;
    }
  },
  methods: {
    handleFileChange() {
      this.selectedFile = this.$refs.file.files;
    },
    // get the price by the file
    async getPriceByFile() {
      if (this.selectedFile) {
        const loadingToastId = toast.loading("Uploading file...");
        const formData = new FormData();
        formData.append("file", this.selectedFile[0]); // file
        // parameters
        formData.append("service_id", this.servId);
        formData.append("price_by", "file");

        try {
          const result = await axios.post(
            `${process.env.VUE_APP_API_URL}/price-list`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${this.token}`,
                Accept: "application/json",
              },
            }
          );

          if (result.status === 200) {
            this.pricingPlansByFile = result.data.data.service.prices;
            this.numberOfWords = result.data.data.words_count;
            toast.update(loadingToastId, {
              render: "File uploaded successfully!",
              type: "success",
              isLoading: false,
              autoClose: 1500,
            });
          } else {
            console.error("File upload failed");
            toast.update(loadingToastId, {
              render: `Failed to upload file`,
              type: "error",
              isLoading: false,
              autoClose: 1500,
            });
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          let errorMessage = "Failed to upload file.";
          toast.update(loadingToastId, {
            render: errorMessage,
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      } else {
        toast.error("Please select a file to upload.", {
          autoClose: 1500,
        });
      }
    },

    // do the order
    async Order(price, edited_within, words_count) {
      const formData = new FormData();
      // parameters
      formData.append("service_id", this.servId);
      formData.append("quote", price);
      formData.append("duration", edited_within);
      formData.append("file", this.selectedFile[0]); // file
      formData.append("words_count", words_count); // word count
      try {
        const result = await axios.post(
          `${process.env.VUE_APP_API_URL}/add-job`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
            },
          }
        );

        if (result.status === 200) {
          let job_id = result.data.data.job.id;
          this.$router.push({
            name: "CheckOut",
            params: { servId: this.servId, jobId: job_id },
          });
          // Additional handling if needed
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
  },
};
</script>

<style scoped>
.upload .largbtn {
  min-width: 15rem;
}
.upload .serv-comments {
  max-width: 100%;
}
.upload .care .card-text {
  max-height: 200px;
  overflow: scroll;
}
.upload .OR {
  overflow: hidden;
  text-align: center;
  font-family: serif;
}
.upload .OR::before,
.upload .OR::after {
  background-color: #6d6199;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.upload .OR::before {
  right: 0.5em;
  margin-left: -50%;
}

.upload .OR::after {
  left: 0.5em;
  margin-right: -50%;
}

/* list of prices  */
.price {
  background-color: #8b869124;
  border-radius: 15px;
}
small,
span {
  font-weight: 600;
}
.headline {
  color: var(--pricing-btn);
}
.main-btn {
  background-color: var(--pricing-btn);
  border-radius: 30px;
}
.main-btn:hover {
  background-color: var(--right-purple);
}

@media (max-width: 767px) {
  .main-btn {
    margin-top: 20px;
  }
}
</style>
