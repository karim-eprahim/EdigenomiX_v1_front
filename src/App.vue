<template>
  <Navigation
    :loged="loged"
    :userInfo="userInfo"
    v-if="!nav"
    class="fixed-top"
  ></Navigation>
  <router-view class="mt-6" />
  <Footer v-if="!footer"></Footer>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      footer: null,
      nav: null,
      loged: false,
      userInfo: {},
    };
  },
  created() {
    this.checkuser();
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.name == "Signin" || this.$route.name == "Signup") {
        this.footer = true;
        return;
      } else if (this.$route.name == "ErrorPage") {
        this.footer = true;
        this.nav = true;
      } else {
        this.footer = false;
      }
    },
    checkuser() {
      let userData = localStorage.getItem("user-info");
      if (userData) {
        this.loged = true;
        this.userInfo = JSON.parse(userData).user;
        console.log(this.userInfo)
      } else {
        this.loged = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
      this.checkuser();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(45deg, var(--right-main), var(--left-main));
  --purple: #543fb5;
  --light-purple: #6664cf;
  --fuchsia: #cc6bcc;
  --laven: #e49ae5;
  --light-laven: #ffd2e9;

  // website two
  --white: #fff;
  --black: #000;
  --right-main: #daedfe;
  --left-main: #f8f2ff;
  --button: #f8f2ff;
  --right-purple: #623de2;
  --left-purple: #9561f1;
  --pricing-btn: #9b5de5;
}
a {
  text-decoration: none;
}
.link {
  text-decoration: none;
}
.mt-6 {
  margin-top: 4rem !important;
}
.pageh {
  min-height: calc(100vh - 70px);
}
@media (min-width: 1550px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1450px !important;
  }
}
@media (min-width: 1800px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1750px !important;
  }
}
// text
.text-purple {
  color: var(--purple) !important;
}
// background
.bg-purple {
  background-image: linear-gradient(
    45deg,
    var(--left-purple),
    var(--right-purple)
  );
  background-image: linear-gradient(45deg, #a685e2, #89a9db);
  color: var(--white) !important;
}
.bg-main {
  background-image: linear-gradient(45deg, var(--right-main), var(--left-main));
}
// buttons
.btn {
  border-color: transparent !important;
}
.btn-purple {
  background-color: var(--right-purple) !important;
  color: var(--white) !important;
}
.btn-purple:hover {
  background-color: var(--purple) !important;
  color: var(--white) !important;
}
.btn-outline-purple:hover {
  background-color: var(--right-purple) !important;
  color: var(--white) !important;
}
.btn-outline-pure:hover {
  background-color: var(--button) !important;
  color: var(--white) !important;
}

// for the swiper 
// :root {
//   /* navigation arrows */
//   --swiper-navigation-color: black;

//   /* pagination buttons */
//   --swiper-pagination-color: black;
//   --swiper-pagination-bullet-inactive-color: black;
// }
.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  padding: 8px 16px;
  border-radius: 100%;
  border: 2px solid lightblue;
    width: 37px !important;
  height: 37px !important;
  opacity: 0.6;
  // color: red;
}

.swiper-button-prev {
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27cornflowerblue%27 viewBox=%270 0 16 16%27%3e%3cpath d=%27M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z%27/%3e%3c/svg%3e");
}

.swiper-button-next {
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27cornflowerblue%27 viewBox=%270 0 16 16%27%3e%3cpath d=%27M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z%27/%3e%3c/svg%3e");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
  display: none;
}

// .swiper-pagination-bullet {
//   width: 40px;
//   height: 40px;
//   background-color: red;
// }
</style>
