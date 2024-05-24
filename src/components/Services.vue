<template>
  <div class="container services-sape my-4">
    <!-- Loading Overlay -->
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <div
      v-if="!isLoading"
      class="bg-white rounded-lg rounded-4 p-1 py-3 p-sm-5"
    >
      <!-- Credit card form tabs -->
      <ul
        role="tablist"
        class="nav align-items-center tablist bg-main py-md-2 px-md-1 nav-pills rounded-4 nav-fill mb-4"
      >
        <li
          class="nav-item"
          v-for="category in allCategories"
          :key="category.id"
        >
          <a
            @click="changeTab(category.id)"
            :class="{ active: activeTab === category.id }"
            class="nav-link rounded-pill"
          >
            <i class="fa fa-credit-card"></i>
            {{ category.ar_description }}
          </a>
        </li>
      </ul>

      <div class="container px-xl-5">
        <div class="tab-content">
          <div
            class=""
            v-for="servcat in allServicesData"
            :key="servcat"
            v-show="activeTab == servcat[0].category_id"
          >
            <div class="row g-3">
              <div
                class="col-12 col-md-4 serv"
                v-for="serv in servcat"
                :key="serv.id"
              >
                <div class="card border-end-1 h-100">
                  <img :src="serv.image" class="card-img-top" alt="..." />
                  <div
                    class="card-body d-flex flex-column justify-content-between"
                  >
                    <div class="serv-content">
                      <h5 class="card-title fw-bold">{{ serv.en_name }}</h5>
                      <p class="card-text">{{ serv.en_description }}</p>
                      <!-- Additional service information can be displayed here -->
                      <p
                        v-for="servsub in serv.titles"
                        class="mb-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#6664cf"
                          class="bi bi-check-lg me-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                          />
                        </svg>
                        {{ servsub.en_name }}
                      </p>
                    </div>
                    <div class="mt-auto">
                      <router-link
                        :to="{
                          name: 'ServiceContent',
                          params: { servId: serv.id },
                        }"
                        class="btn readmore text-purple mb-3"
                      >
                        Read More ..
                      </router-link>
                      <router-link
                        :to="{
                          name: 'UploadFile',
                          params: { servId: serv.id },
                        }"
                        class="btn btn-purple d-block mx-auto w-75 py-2"
                      >
                        Order Now
                      </router-link>
                    </div>
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
  name: "Services",
  data() {
    return {
      allCategories: [],
      allServicesData: [],
      activeTab: 1,
      isLoading: false,
    };
  },
  mounted() {
    this.allservices();
  },
  methods: {
    async allservices() {
      this.isLoading = true;
      let result = await axios.get(
        `${process.env.VUE_APP_API_URL}/categories-list`
      );
      if (result.status == 200) {
        this.allCategories = result.data.data.categories;
        this.allServicesData = this.allCategories.map((categorie) => {
          return categorie.services;
        });
        this.isLoading = false;
        console.log(this.allServicesData);
      }
    },

    // Change active tab
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.services-sape {
  max-width: 1300px !important;
  margin: auto;
  .nav-link {
    cursor: pointer;
    font-weight: bold;
  }
  .nav-link.active {
    background-color: var(--light-purple);
    font-weight: bold;
  }
  .serv:nth-child(1) .serv-content h5 {
    color: #a86c66;
  }
  .serv:nth-child(2) .serv-content h5 {
    color: #6882da;
  }
  .serv:nth-child(3) .serv-content h5 {
    color: #e9c357;
  }
  .serv:nth-child(4) .serv-content h5 {
    color: #74ff79;
  }
  .serv:nth-child(5) .serv-content h5 {
    color: #fd593f;
  }
  .readmore {
    transition: 0.4s;
    &:hover {
      text-decoration: underline;
    }
  }
  .card {
    transition: 0.4s;
    .card-img-top {
      max-height: 180px;
    }
    .serv-item {
      min-height: 150px;
    }
  }
  .service-price-list {
    max-width: 1400px;
    margin: 3rem auto;
  }
}

/* Styles for the loading overlay */
.loading-overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite, color-change 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes color-change {
  0% {
    border-top-color: #3498db;
  } /* Blue */
  33% {
    border-top-color: #e74c3c;
  } /* Red */
  66% {
    border-top-color: #f39c12;
  } /* Yellow */
  100% {
    border-top-color: #3498db;
  } /* Blue again */
}
@media (max-width: 787px) {
  .services-sape {
    .tablist {
      display: grid;
      grid-template-columns: repeat(2, minmax(116px, 1fr));
      font-size: 12px;
      background-color: #fff;
    }
    .nav-item {
      .nav-link {
        padding: 0.7rem !important;
      }
    }
  }
}
</style>
