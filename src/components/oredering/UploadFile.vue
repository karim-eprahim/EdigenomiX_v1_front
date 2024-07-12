<template>
  <div class="pageh upload">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-9 mx-auto mb-3">
          <!-- Upload file form  -->
          <div class="upload-card bg-light shadow p-4 px-2 px-lg-4 rounded">
            <form @submit.prevent="Order" class="d-flex flex-column align-items-center justify-content-center">
              <div class="d-flex flex-column align-items-center px-sm-5 w-100">
                <label for="formFileLg" class="form-label mx-auto fs-3 fw-bold"> Place Your Order</label>
                <div class="row order-form" style="gap:15px;width: 70%;">
                  <div class="col-12">
                    <label for="formFileLg" style="font-size:20px;margin-bottom: 10px;">Upload Document</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file" ref="file" placeholder=".."
                      @change="handleFileChange" />
                  </div>
                  <div class="col-12">
                    <label for="selectduration" style="font-size:20px;margin-bottom: 10px;">Select Duration</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" id="selectduration"
                      v-model="duration">
                      <!-- <option selected disabled >Chose the duration </option> -->
                      <option v-for="duration in listOfDurations" :key="duration" :value="duration.value">{{
                        duration.text }}</option>
                    </select>
                  </div>
                  <span v-if="errMessage" class="col-12 errMessage text-danger fw-light">{{ errMessage }}</span>
                </div>
              </div>

              <button class="btn btn-lg btn-purple rounded-pill largbtn my-3" :class="{ 'loading': loadingButtonId }"
                type="submit">
                <span>Order Now</span>
              </button>
            </form>
            <!-- list of prices  -->
            <div class="container mb-5" v-if="pricingPlansByFile[0]">
              <div class="text-center mb-5">
                <h1 class="text-capitalize font-weight-bold">
                  Pricing <span class="headline">Plans</span>
                </h1>
              </div>

              <div class="price my-4 py-3 px-5 bg-tertiary d-sm-flex align-items-center justify-content-between"
                v-for="price in pricingPlansByFile" :key="price.id">
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
                  <a @click="
                    Order(price.price, price.edited_within, numberOfWords)
                    " href="#"
                    :class="['btn text-white px-4 py-2 px-sm-3 py-sm-1 px-lg-5 py-lg-3 main-btn', { 'loading': loadingButtonId === price.edited_within }]"><span>Order
                      Now</span></a>
                </div>
              </div>
            </div>
            <!-- End list of prices  -->
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
  components: {
  },
  data() {
    return {
      duration: null,
      listOfDurations: [
        { value: '1 Day', text: '1 Day' },
        { value: '3 Days', text: '3 Days' },
        { value: '5 Days', text: '5 Days' },
        { value: '7 Days', text: '7 Days' },
      ],
      servId: this.$route.params.servId,
      selectedFile: null,
      token: "",
      price_by: null,
      wordNum: null,
      pricingPlansByFile: [],
      pricingPlansByWordsNum: [],
      numberOfWords: null,
      loadingButtonId: null,
      errMessage: "",
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
            // console.log('this.pricingPlansByFile :>> ', this.pricingPlansByFile);
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
    async Order() {
      this.errorMessage = ""
      if (this.selectedFile && this.duration && this.selectedFile != "") {
        // console.log(this.errorMessage);
        this.loadingButtonId = true;
        const formData = new FormData();
        // parameters
        formData.append("service_id", this.servId);
        formData.append("duration", this.duration);
        formData.append("file", this.selectedFile[0]);
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
            // console.log("success");
            toast.success("Order Added Successfully", {
              autoClose: 1000,
            });
            this.loadingButtonId = null;

            setTimeout(() => {
              this.$router.push({
                name: "Profile",
              });
            }, 1000);
          } else {
            this.loadingButtonId = null;
            toast.error("Order Faild", {
              autoClose: 1000,
            });
          }
        } catch (error) {
          // console.log("Error uploading file:", error);
          this.loadingButtonId = null;
          toast.error("Order Faild", {
            autoClose: 1000,
          });
          this.errMessage = ""
        }
      } else if (!this.selectedFile) {
        this.errMessage = "Please Upload Document"
      } else if (!this.duration) {
        this.errMessage = "Please Select Duration"
      }
      setTimeout(() => {
        this.errMessage = ""
      }, 2000);
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

/* .upload .care .card-text {
  max-height: 200px;
  overflow: scroll;
} */
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

  .order-form {
    width: 100% !important;
  }
}
</style>
