import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App).use(store).use(router).mount("#app");
