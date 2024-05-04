import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import Courses from "../views/Courses.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import profile from "../views/Profile.vue";
import EditProfile from "@/components/profile/editProfile.vue";
import ContactView from "../views/ContactView.vue";
import CheckOut from "../components/oredering/CheckOut.vue";
import ServiceContent from "../components/ServiceContent.vue";
import UploadFile from "../components/oredering/UploadFile.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "Profile",
    component: profile,
  },
  {
    path: "/editProfile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/servicecontent/service/:servId",
    name: "ServiceContent",
    component: ServiceContent,
    props: true,
  },
  {
    path: "/service/uploadfile/:servId",
    name: "UploadFile",
    component: UploadFile,
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: ContactView,
  },
  {
    path: "/checkout/service/:servId/job/:jobId",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

// the page open to the top 
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// add the page title
router.beforeEach((to,from,next)=>{
  let home = to.name
  if(home == "Home"){
    home = ""
  }
  document.title = `${process.env.VUE_APP_TITLE}/${home}`
  next()
})

export default router;
