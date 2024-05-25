<template>
  <header class="shadow py-2 d-flex">
    <nav class="container justify-content-between align-items-center d-flex">
      <div class="">
        <router-link class="btn fs-3" to="/">
          <img class="logo" src="../assets/logo/Logo.png" alt="" />
          EdigenomiX
        </router-link>
      </div>

      <div class="nav-link" v-show="!mobile">
        <ul class="m-0">
          <router-link class="btn" :to="{ name: 'Services' }"
            >Services</router-link
          >
          <router-link class="btn" :to="{ name: 'About' }"
            >About Us</router-link
          >
          <router-link class="btn" :to="{ name: 'Courses' }"
            >Courses</router-link
          >
          <router-link class="btn" :to="{ name: 'Contact Us' }"
            >Contact Us</router-link
          >
          <router-link
            v-if="!loged"
            class="px-4 py-2 border rounded-pill log"
            :to="{ name: 'Signin' }"
            >Login</router-link
          >
          <router-link :to="{ name: 'Profile' }" v-else class="mx-3">
            <div class="dropdown d-inline-block">
              <button
                class="border-0 dropdown-toggle bg-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  :src="userInfo.image"
                  class="rounded-circle profile-photo"
                  alt=""
                />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{ name: 'Profile' }" class="dropdown-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                      />
                    </svg>
                    Profile
                  </router-link>
                </li>
                <li>
                  <a class="dropdown-item text-danger" @click="logMeOut()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                      />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </router-link>
        </ul>
      </div>
      <button @click="toggleMobileNav" v-show="mobile" class="btn">
        <svg
          v-if="!mobileNav"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
          />
        </svg>
      </button>
    </nav>

    <div :class="{ 'mobile-nav': mobileNav }" class="mobile-nav-container">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 shadow"
        style="width: 100%; height: 100%"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-3">EdigenomiX</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column gap-2 mb-auto text-white">
          <!-- profile  -->
          <li class="d-flex justify-content-center">
            <router-link
              v-if="!loged"
              class="px-4 py-2 border rounded-pill log w-100"
              :to="{ name: 'Signin' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-in-right me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
              Login</router-link
            >
            <router-link
              :to="{ name: 'Profile' }"
              v-else
              class="mx-3 d-flex flex-column justify-content-center align-items-center text-decoration-none"
            >
              <img
                :src="userInfo.image"
                class="rounded-circle profile-photo"
                alt=""
                style="width: 100px; height: 100px"
              />
              <h5 class="fs-4 btn">{{ userInfo.name }}</h5>
            </router-link>
          </li>
          <!-- end profile  -->
          <li class="nav-item" v-if="loged">
            <router-link
              class="btn w-100 text-start w-100 text-start"
              :to="{ name: 'Profile' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                />
              </svg>
              Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="btn w-100 text-start w-100 text-start"
              :to="{ name: 'Services' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-journals me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"
                />
                <path
                  d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"
                />
              </svg>
              Services</router-link
            >
          </li>
          <li>
            <router-link
              class="btn w-100 text-start w-100 text-start"
              :to="{ name: 'About' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmark me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"
                />
              </svg>
              About Us</router-link
            >
          </li>
          <li>
            <router-link
              class="btn w-100 text-start w-100 text-start"
              :to="{ name: 'Courses' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-mortarboard me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"
                />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"
                />
              </svg>
              Courses</router-link
            >
          </li>
          <li>
            <router-link
              class="btn w-100 text-start"
              :to="{ name: 'Contact Us' }"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              Contact Us</router-link
            >
          </li>
          <li v-if="loged">
            <a @click="logMeOut()" class="btn text-danger"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-right me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
              Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "navigation",
  components: {},
  props: {
    loged: Boolean,
    userInfo: Object,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 990) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    async logMeOut() {
      try {
        const userInfo = localStorage.getItem("user-info");
        if (!userInfo) {
          throw new Error("User info not found in localStorage");
        }

        const token = JSON.parse(userInfo).token;

        let response = await axios.post(
          `${process.env.VUE_APP_API_URL}/logout`,
          {}, // Empty body
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.clear();
          this.$router.push({ name: "Signin" });
        } else {
          console.error("Error logging out", response.status);
        }
      } catch (error) {
        console.error("Logout error", error);
      }
    },
  },
};
</script>

<!-- try {
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
    // Additional handling if needed
  } else {
    console.error("File upload failed");
  }
}  -->

<style lang="scss" scoped>
.nav a.router-link-active.router-link-exact-active.btn {
  background-color: var(--right-purple);
  color: var(--white);
}
.nav-link a.router-link-active.router-link-exact-active.btn {
  color: var(--right-purple);
}
.nav-link a.router-link-active.router-link-exact-active.btn::after {
  content: "";
  position: absolute;
  background-color: var(--right-purple);
  height: 3px;
  width: 100%;
  left: 0;
  bottom: 0px;
  transition: 0.3s;
}
header {
  .logo {
    width: 50px;
  }
  background-color: var(--white);
  .nav-link .btn {
    font-weight: 500;
    font-size: 20px;
    position: relative;
  }
  .nav-link .btn::after {
    content: "";
    position: absolute;
    background-color: var(--right-purple);
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0px;
    transition: 0.3s;
  }
  // .nav-link .btn:hover {
  //   color: var(--right-purple);
  // }
  .nav-link .btn:hover::after {
    width: 100%;
  }
  .log {
    transition: 0.4s;
    text-decoration: none;
    font-size: 20px;
    color: #222831;
  }
  .log:hover {
    background-color: var(--light-purple);
    color: var(--white) !important;
  }
  .profile-photo {
    width: 40px;
    height: 40px;
  }
  .mobile-nav-container {
    background-color: var(--white);
    width: 70%;
    max-width: 250px;
    position: fixed;
    height: 100%;
    top: 0;
    left: -250px;
    z-index: 1;
    overflow-x: hidden;
    transition: left 0.5s ease;
    a {
      color: var(--black);
      font-size: 20px;
      transition: 0.4s;
      &:hover {
        color: var(--right-purple);
      }
    }
    .nav-pills .nav-link.active {
      background-color: var(--right-purple);
    }
    // .nav-pills .nav-link:hover {
    //   background-color: #d0c4f7;
    //   color: var(--white);
    // }
  }
  .mobile-nav-container.mobile-nav {
    left: 0;
  }
}
</style>
