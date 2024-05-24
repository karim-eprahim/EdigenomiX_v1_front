<template>
  <div class="container pageh py-5">
    <div class="row">
      <div class="mx-auto">
        <!-- Profile widget -->
        <div class="overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end d-flex gap-3">
              <div class="profile mr-3">
                <img
                  :src="profileData.image"
                  alt="..."
                  width="130"
                  height="130"
                  class="rounded mb-2 img-thumbnail"
                /><router-link
                  :to="{ name: 'EditProfile' }"
                  class="btn btn-purple btn-sm btn-block"
                  >Edit profile</router-link
                >
              </div>
              <div class="media-body mb-5">
                <h4 class="mt-0 mb-1">{{ profileData.name }}</h4>
                <p class="small mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i
                  >{{ profileData.email }}
                </p>
              </div>
            </div>
          </div>
          <!-- data of user  -->
          <div
            class="bg-light p-4 d-flex justify-content-between text-center mb-3 rounded shadow"
          >
            <ul class="list-inline mb-0">
              <li class="list-inline-item text-center me-3">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ allJobs.length }}
                </h5>
                <small class="text-muted">
                  <i class="fas fa-image mr-1"></i>All jobs</small
                >
              </li>
              <li class="list-inline-item text-center me-3">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ allJobs.filter((job) => job.status == "approved").length }}
                </h5>
                <small class="text-muted">
                  <i class="fas fa-user mr-1"></i>Completed</small
                >
              </li>
              <li class="list-inline-item text-center me-3">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{
                    allJobs.length -
                    allJobs.filter((job) => job.status == "approved").length
                  }}
                </h5>
                <small class="text-muted">
                  <i class="fas fa-user mr-1"></i>In work</small
                >
              </li>
              <li class="list-inline-item text-center me-3">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{
                    allJobs.filter((job) => job.payment_status == "Not Paid")
                      .length
                  }}
                </h5>
                <small class="text-muted">
                  <i class="fas fa-user mr-1"></i>Not Payed</small
                >
              </li>
              <!-- <li class="list-inline-item text-center me-3">
                <h5 class="font-weight-bold mb-0 d-block">{{ allJobs.filter(job => job.payment_status == 'Paid').length }}</h5>
                <small class="text-muted">
                  <i class="fas fa-user mr-1"></i>Payed</small
                >
              </li> -->
            </ul>
            <a
              @click="this.$router.push({ name: 'Services' })"
              href="#"
              class="btn btn-sm btn-outline-purple border"
              style="height: fit-content"
              >New Job</a
            >
          </div>
          <!-- work table  -->
          <div class="px-4 py-3 bg-light mb-3 rounded shadow">
            <div class="rounded overflow-hidden">
              <div
                class="pt-4 pb-3 d-flex justify-content-between align-items-center px-6 border-bottom border-secondary-light"
              >
                <h4 class="mb-0">My Jobs</h4>
                <div class="form-check form-switch d-sm-none">
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >Details</label
                  >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    v-model="showDetailvalue"
                    @click="showDetail()"
                  />
                </div>
              </div>
              <div class="px-sm-4 px-0 table-responsive">
                <table class="table table-light table-hover mb-0 small">
                  <thead>
                    <tr class="text-secondary">
                      <th class="py-3 px-6">File Name</th>
                      <th class="py-3 px-6" v-if="showDetailvalue">Job #</th>
                      <th class="py-3 px-6" v-if="showDetailvalue">Due Date</th>
                      <th class="py-3 px-6">Quote</th>
                      <th class="py-3 px-6">Payment Status</th>
                      <th class="py-3 px-6">Job Status</th>
                      <th class="py-3 px-6" v-if="showDetailvalue">
                        Your Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="job in allJobs.slice(0, joblistNum)"
                      :key="job.id"
                      class=""
                    >
                      <td class="py-3 px-0 px-sm-2">{{ job.file_name }}</td>
                      <td class="py-3 px-0 px-sm-2" v-if="showDetailvalue">
                        {{ job.id }}
                      </td>
                      <td class="py-3 px-0 px-sm-2" v-if="showDetailvalue">
                        {{ job.created_at.slice(0, 10) }}
                      </td>
                      <td class="py-3 px-0 px-sm-2">{{ job.quote }} $</td>
                      <td class="py-3 px-0 px-sm-2">
                        <p class="mb-1 mx-2">{{ job.payment_status }}</p>
                        <p
                          v-if="job.payment_status != 'Paid'"
                          @click="payher(job.service_id, job.id)"
                          class="m-0 btn btn-primary pay-her btn-sm rounded-pill"
                        >
                          Pay here
                        </p>
                      </td>
                      <td class="py-3 px-0 px-sm-2">
                        <span
                          class="badge"
                          :class="
                            job.status == 'Quoted'
                              ? 'bg-primary'
                              : job.status == 'In progress'
                              ? 'bg-warning'
                              : job.status == 'completed'
                              ? 'bg-success'
                              : 'bg-danger'
                          "
                          >{{ job.status }}</span
                        >
                        <p v-if="job.status == 'completed'" class="pt-2 m-0 text-purple pointer">
                          Download File
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-file-earmark-arrow-down-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"
                            />
                          </svg>
                        </p>
                      </td>
                      <td class="py-3 px-0 px-sm-2">
                        <!-- command modal  -->
                        <svg
                          v-if="showDetailvalue && job.payment_status == 'Paid'"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#5a38cf"
                          class="bi bi-chat-right-text-fill w-100"
                          viewBox="0 0 16 16"
                          style="cursor: pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <path
                            d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"
                          />
                        </svg>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Feedback for this Job
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <!-- label body  -->
                              <div class="modal-body">
                                <form @submit.prevent="submitComment(job.id)">
                                  <div class="mb-3">
                                    <label>Rating:</label>
                                    <star-rating
                                      :star-size="25"
                                      :increment="0.5"
                                      v-model:rating="rating"
                                    ></star-rating>
                                  </div>
                                  <div class="mb-3">
                                    <label
                                      for="message-text"
                                      class="col-form-label"
                                      >Message:</label
                                    >
                                    <textarea
                                      class="form-control"
                                      id="message-text"
                                      style="min-height: 150px"
                                      v-model="comment"
                                    ></textarea>
                                  </div>
                                </form>
                              </div>
                              <div class="modal-footer justify-content-center">
                                <button
                                  type="button"
                                  class="btn btn-secondary rounded-pill"
                                  data-bs-dismiss="modal"
                                  id="Close"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-purple px-5 rounded-pill"
                                  @click="submitComment(job.id)"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- command modal  -->
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="pt-3 pb-5 text-center">
                  <a
                    class="btn d-inline-flex align-items-center mx-auto text-decoration-none text-primary"
                    style="max-width: max-content"
                    @click.prevent="joblistNum = joblistNum + 3"
                  >
                    <span class="d-inline-block me-2">
                      <svg
                        viewbox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 12px; height: 12px"
                      >
                        <path
                          d="M8.66667 12.3333H3.33333C2.8029 12.3333 2.29419 12.1226 1.91912 11.7476C1.54405 11.3725 1.33333 10.8638 1.33333 10.3333V3.66668C1.33333 3.48987 1.2631 3.3203 1.13807 3.19527C1.01305 3.07025 0.843478 3.00001 0.666667 3.00001C0.489856 3.00001 0.320286 3.07025 0.195262 3.19527C0.0702379 3.3203 0 3.48987 0 3.66668V10.3333C0 11.2174 0.351189 12.0652 0.976311 12.6904C1.60143 13.3155 2.44928 13.6667 3.33333 13.6667H8.66667C8.84348 13.6667 9.01305 13.5964 9.13807 13.4714C9.2631 13.3464 9.33333 13.1768 9.33333 13C9.33333 12.8232 9.2631 12.6536 9.13807 12.5286C9.01305 12.4036 8.84348 12.3333 8.66667 12.3333ZM4.66667 7.66668C4.66667 7.84349 4.7369 8.01306 4.86193 8.13808C4.98695 8.26311 5.15652 8.33334 5.33333 8.33334H8.66667C8.84348 8.33334 9.01305 8.26311 9.13807 8.13808C9.2631 8.01306 9.33333 7.84349 9.33333 7.66668C9.33333 7.48987 9.2631 7.3203 9.13807 7.19527C9.01305 7.07025 8.84348 7.00001 8.66667 7.00001H5.33333C5.15652 7.00001 4.98695 7.07025 4.86193 7.19527C4.7369 7.3203 4.66667 7.48987 4.66667 7.66668ZM12 4.96001C11.9931 4.89877 11.9796 4.83843 11.96 4.78001V4.72001C11.9279 4.65146 11.8852 4.58845 11.8333 4.53334V4.53334L7.83333 0.533343C7.77822 0.481488 7.71521 0.438731 7.64667 0.406677C7.62677 0.40385 7.60657 0.40385 7.58667 0.406677C7.51894 0.367838 7.44415 0.342906 7.36667 0.333344H4.66667C4.13623 0.333344 3.62753 0.544057 3.25245 0.91913C2.87738 1.2942 2.66667 1.80291 2.66667 2.33334V9.00001C2.66667 9.53044 2.87738 10.0392 3.25245 10.4142C3.62753 10.7893 4.13623 11 4.66667 11H10C10.5304 11 11.0391 10.7893 11.4142 10.4142C11.7893 10.0392 12 9.53044 12 9.00001V5.00001C12 5.00001 12 5.00001 12 4.96001ZM8 2.60668L9.72667 4.33334H8.66667C8.48986 4.33334 8.32029 4.26311 8.19526 4.13808C8.07024 4.01306 8 3.84349 8 3.66668V2.60668ZM10.6667 9.00001C10.6667 9.17682 10.5964 9.34639 10.4714 9.47141C10.3464 9.59644 10.1768 9.66668 10 9.66668H4.66667C4.48986 9.66668 4.32029 9.59644 4.19526 9.47141C4.07024 9.34639 4 9.17682 4 9.00001V2.33334C4 2.15653 4.07024 1.98696 4.19526 1.86194C4.32029 1.73691 4.48986 1.66668 4.66667 1.66668H6.66667V3.66668C6.66847 3.89411 6.70905 4.11956 6.78667 4.33334H5.33333C5.15652 4.33334 4.98695 4.40358 4.86193 4.52861C4.7369 4.65363 4.66667 4.8232 4.66667 5.00001C4.66667 5.17682 4.7369 5.34639 4.86193 5.47141C4.98695 5.59644 5.15652 5.66668 5.33333 5.66668H10.6667V9.00001Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>Load more jobs</span>
                  </a>
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
import StarRating from "vue-star-rating";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Profile",
  components: {
    StarRating,
  },
  data() {
    return {
      profileData: [],
      allJobs: [],
      joblistNum: 5,
      showDetailvalue: null,
      token: "",
      userId: null,
      // for rating
      comment: "",
      rating: 0,
      windownWidth: 0,
    };
  },
  mounted() {
    let userData = localStorage.getItem("user-info");
    if (userData) {
      this.token = JSON.parse(userData).token;
      this.userId = JSON.parse(userData).user.id;
    } else {
      this.$router.push({ name: "Signin" });
    }
    this.profileDataInfo();
    this.jobList();
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      this.showDetailvalue = this.windownWidth > 990;
    },
    showDetail() {
      this.showDetailvalue = !this.showDetailvalue;
    },
    async profileDataInfo() {
      try {
        let result = await axios.get(`${process.env.VUE_APP_API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            Accept: `application/json`,
          },
        });

        if (result.status === 200) {
          this.profileData = result.data.data.user;
        } else {
          console.log("User Not Found");
        }
      } catch (error) {
        console.log("User Not Found");
        this.$router.push({ name: "Signin" });
      }
    },
    async jobList() {
      try {
        const result = await axios.get(
          `${process.env.VUE_APP_API_URL}/job-list`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
            },
            params: {
              user_id: this.userId,
            },
          }
        );

        if (result.status === 200) {
          this.allJobs = result.data.data.jobs.reverse();
          console.log(this.allJobs);
        } else {
          console.error("Get Jobs failed");
        }
      } catch (error) {
        console.error("Get Jobs Error:", error);
      }
    },
    async submitComment(jobId) {
      try {
        const formData = new FormData();
        formData.append("job_id", jobId);
        formData.append("comment", this.comment);
        formData.append("rate", this.rating);

        const result = await axios.post(
          `${process.env.VUE_APP_API_URL}/job-review`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (result.status === 200) {
          document.getElementById("Close").click();
          toast.success("comment Success", {
            autoClose: 1000,
          });
          this.comment = "";
          this.rating = 0;
        } else {
          toast.error("comment Success", {
            autoClose: 1000,
          });
        }
      } catch (error) {
        toast.error("comment Success", {
          autoClose: 1000,
        });
      }
    },
    payher(servId, jobId) {
      this.$router.push({
        name: "CheckOut",
        params: { servId: servId, jobId: jobId },
      });
    },
  },
};
</script>

<style scoped>
.profile.mr-3 {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.pointer {
  cursor: pointer;
}
.pay-her {
  background-color: #c6cef3 !important;
  color: black !important;
  font-size: 12px;
}
@media (max-width: 787px) {
  table {
    font-size: 13px;
  }
}
</style>
