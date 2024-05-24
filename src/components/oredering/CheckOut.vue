<template>
  <div class="pageh checkout">
    <div class="container py-5">
      <div class="row row-gap-3">
        <div class="col-lg-7 mx-auto">
          <div class="bg-white rounded-lg shadow-sm rounded-4 p-3 p-sm-5">
            <!-- Credit card form tabs -->
            <ul
              role="tablist"
              class="nav bg-light nav-pills rounded-pill nav-fill mb-4"
            >
              <li class="nav-item">
                <a
                  @click="changeTab('card')"
                  :class="{ active: activeTab === 'card' }"
                  class="nav-link rounded-pill"
                >
                  <i class="fa fa-credit-card"></i> Credit Card
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="changeTab('paypal')"
                  :class="{ active: activeTab === 'paypal' }"
                  class="nav-link rounded-pill"
                >
                  <i class="fa fa-paypal"></i> Paypal
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="changeTab('bank')"
                  :class="{ active: activeTab === 'bank' }"
                  class="nav-link rounded-pill"
                >
                  <i class="fa fa-university"></i> Bank Transfer
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <!-- card  -->
              <div v-show="activeTab === 'card'" class="">
                <p class="alert alert-success d-none">
                  Some text success or error
                </p>
                <form role="form">
                  <div class="form-group">
                    <label for="username">Full name (on the card)</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Jassa"
                      required
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="cardNumber">Card number</label>
                    <div class="input-group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Your card number"
                        class="form-control"
                        required
                      />
                      <div class="input-group-append">
                        <span class="input-group-text text-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-credit-card-fill me-1 my-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-wallet-fill my-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"
                            />
                            <path
                              d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="form-group">
                        <label><span class="hidden-xs">Expiration</span></label>
                        <div class="input-group">
                          <input
                            type="number"
                            placeholder="MM"
                            name=""
                            class="form-control"
                            required
                          />
                          <input
                            type="number"
                            placeholder="YY"
                            name=""
                            class="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group mb-4">
                        <label
                          title="Three-digits code on the back of your card"
                          >CVV
                          <i class="fa fa-question-circle"></i>
                        </label>
                        <input type="text" required class="form-control" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-purple btn-block rounded-pill px-5 py-2"
                    @click="payOrder"
                  >
                    Confirm
                  </button>
                </form>
              </div>
              <!-- paypal  -->
              <div v-show="activeTab === 'paypal'" class="">
                <p>Paypal is easiest way to pay online</p>
                <p>
                  <button type="button" class="btn btn-purple rounded-pill">
                    <i class="fa fa-paypal mr-2"></i> Log into my Paypal
                  </button>
                </p>
              </div>
              <!-- bank  -->
              <div v-show="activeTab === 'bank'" class="">
                <h6 class="bank-detail text-center mb-2">
                  Bank account details
                </h6>
                <dl>
                  <dt>Bank</dt>
                  <dd>THE WORLD BANK</dd>
                </dl>
                <dl>
                  <dt>Account number</dt>
                  <dd>7775877975</dd>
                </dl>
                <dl>
                  <dt>IBAN</dt>
                  <dd>CZ7775877975656</dd>
                </dl>
                <p class="text-muted">
                  Your payment information will be kept safe and secure using
                  256-bit SSL encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-white rounded-lg shadow-sm rounded-4 p-3 px-lg-4 py-sm-5"
          >
            <!-- Review Job -->
            <div class="card-body">
              <h5 class="card-title fs-4 mb-4">Review Job</h5>
              <div class="d-flex flex-column justify-content-center gap-3">
                <div class="p-3 bg-light rounded">
                  <div class="row mb-2">
                    <div class="col-4">File Name:</div>
                    <div class="col-8">{{ jobDetail.file_name }}</div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-4">Word Count:</div>
                    <div class="col-8">{{ jobDetail.words_count }}</div>
                  </div>
                  <div class="row">
                    <a class="btn text-purple">Have a Discount Code?</a>
                  </div>
                </div>
                <div class="p-3 bg-light rounded">
                  <div class="row mb-2">
                    <div class="col-4">Edited Within:</div>
                    <div class="col-8">{{ jobDetail.duration }} {{ jobDetail.duration_type }}</div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-4">Delivery Date:</div>
                    <div class="col-8">{{ jobDetail.delivered_at }}</div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-4">Quote:</div>
                    <div class="col-8">$ {{ jobDetail.quote }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      servId: this.$route.params.servId,
      jobId: this.$route.params.jobId,
      activeTab: "card",
      jobDetail:[],
      token:""
    };
  },
  mounted() {
    let userData = localStorage.getItem("user-info");
    if (!userData) {
      this.$router.push({ name: "Signin" });
    } else {
      this.token = JSON.parse(userData).token;
    }
    this.getJobDetails()
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },

    // get job Details
    async getJobDetails() {
      try {
        const result = await axios.get(
          `${process.env.VUE_APP_API_URL}/job/${this.jobId}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
            },
          }
        );

        if (result.status === 200) {
          this.jobDetail = result.data.data.job
        } else {
          console.error("error in geting details");
        }
      } catch (error) {
        console.error("jobDetails Error:", error);
      }
    },

    
    // payment
    async payOrder() {
      const formData = new FormData();
      // parameters
      formData.append("job_id", this.jobId);
      try {
        const result = await axios.post(
          `${process.env.VUE_APP_API_URL}/job-payment`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
            },
          }
        );

        if (result.status === 200) {
          this.$router.push({ name: "Profile" });
        } else {
          console.error("Payment failed");
        }
      } catch (error) {
        console.error("Payment Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.checkout .nav-link {
  cursor: pointer;
  color: black;
}
.checkout .nav-item .active {
  background-color: var(--right-purple) !important;
}
.bank-detail:after {
  content: "";
  display: block;
  width: 10rem;
  max-width: 70%;
  border-bottom: 0.1em solid var(--light-purple);
  margin: 0.3rem auto;
}
</style>
