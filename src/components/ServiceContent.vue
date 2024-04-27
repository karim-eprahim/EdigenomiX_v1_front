<template>
  <div class="ServiceContent pageh">
    <!-- about service  -->
    <div class="service-header" :style="backgroundStyle">
      <div class="mx-4 mx-sm-5 text-white imgcont">
        <h3 class="fw-bold">
          English Editing and Proofreading Services by expert English Editors
        </h3>
        <p>
          Our team of expert English editors, top-journal peer reviewers, and
          PhD subject specialists pour their expertise into perfecting your
          manuscript, so that you can focus on getting it published.
        </p>
        <button class="btn btn-purple rounded-pill px-5">Get Quote</button>
      </div>
    </div>

    <!-- about service  -->
    <div class="container pt-3 pb-4">
      <div
        class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center"
      >
        <div class="col order-2 order-md-1">
          <div class="container-fluid py-4">
            <h2 class="fs-3 text-start">Editing Services</h2>
          </div>
          <div class="w-100">
            <p>
              Our subject matter experts ensure that your manuscript is ready
              for submission, by correcting errors in grammar, style, layout,
              citations, formatting, references, and more.
            </p>
            <ul class="list-group text-decoration-none list-unstyled">
              <li class="d-flex justify-content-start align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff7baf"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>
                Correction of all language and grammar errors in the document
              </li>
              <li class="d-flex justify-content-start align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff7baf"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>
                Formatting of the manuscript for a journal of your choice
              </li>
              <li class="d-flex justify-content-start align-items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff7baf"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>

                Your document will be checked by 2 experts
              </li>
            </ul>
          </div>
          <div class="mt-3">
            <!-- <button class="btn btn-purple d-block rounded-pill px-4 py-2">
              View Pricing and Order Now
            </button> -->
            <router-link
              :to="{ name: 'UploadFile', params: { servId: servId } }"
              class="btn btn-purple mx-sm-auto rounded-pill px-4 py-2"
              style="min-width: 250px"
            >
              Order Now
            </router-link>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center align-items-center order-1 order-md-2"
        >
          <video autoplay loop class="w-100 video-img rounded video">
            <source
              src="../assets/video.mp4"
              type="video/mp4"
              class="w-100 h-100"
            />
          </video>
        </div>
      </div>
    </div>
    <!-- service info -->
    <div class="service-info">
      <div class="container">
        <div class="py-5 my-5">
          <h2 class="head-text text-center fs-3 text-start">Service Info</h2>
          <p class="text-center mt-4">
            here are reasons why you should choose Advanced Editing Service
          </p>
          <swiper
            :modules="reasonsmod"
            :slides-per-view="2"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            :breakpoints="breakpoints"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            class="pb-5 mt-4"
          >
            <swiper-slide v-for="index in 6" :key="index">
              <div class="bg-white text-center p-3 py-4 rounded-5">
                <h5 class="mb-3">Manuscript Finalization</h5>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Our editors will format your manuscript as per the guidelines
                  of your target journal, for free.
                </p>
              </div>
            </swiper-slide>
            ...
          </swiper>
        </div>
      </div>
    </div>

    <!-- reviews  -->
    <div class="reviews">
      <div class="container">
        <h2 class="head-text text-center fs-3 text-start mb-4">
          What Clients Say
        </h2>
        <swiper
          :modules="modules"
          :slides-per-view="2"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          :breakpoints="breakpoints"
          class="pb-5"
        >
          <swiper-slide v-for="index in 6" :key="index">
            <div class="bg-white text-center p-3 rounded-5">
              <img
                class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt="avatar"
                style="width: 100px"
              />
              <h5 class="mb-3">Anna Deynah</h5>
              <star-rating
                class="justify-content-center mb-2"
                :star-size="25"
                :increment="0.5"
                rating="3.5"
                :show-rating="false"
                :read-only="true"
              ></star-rating>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul
                class="list-unstyled d-flex justify-content-center text-warning mb-0"
              >
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
              </ul>
            </div>
          </swiper-slide>
          ...
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import StarRating from "vue-star-rating";

export default {
  name: "ServiceContent",
  components: {
    Swiper,
    SwiperSlide,
    StarRating,
  },
  data() {
    return {
      // imageUrl:'https://bubblecow.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGtFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bac5323b0d90ba8711306e87daba33dd9fe43dcc/detailed-guide-to-developmental-editing-compressed.png',
      imageUrl:
        "https://blog.iamsuleiman.com/wp-content/uploads/2017/04/full-overlay-do-dont.png",
      modules: [Pagination, Navigation],
      reasonsmod: [Pagination, Navigation, Autoplay],
      token: "",
      servContent: "",
      servId: this.$route.params.servId,
      // planId: this.$route.params.planId,
      reasons: {
        0: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
      serviceData:[]
    };
  },
  mounted() {
    this.serviceDetail();
  },
  methods:{
    async serviceDetail() {
      let result = await axios.get(
        `http://localhost/EdigenomiX-v1/public/api/service-data/${this.servId}`
      );
      if (result.status == 200) {
        this.serviceData = result.data.data;
        console.log(this.serviceData);
      }
    },
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `linear-gradient(0deg, rgb(169 132 138 / 40%), rgb(0 0 0 / 40%)), url(${require("@/assets/servcont/1585108236158.jpeg")})`,
      };
    },
  },
};
</script>
<style scoped>
.service-header {
  min-height: 400px;
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;
}
.service-header .imgcont{
  max-width: 44rem;
}
.video {
  max-width: 660px;
}
.head-text:after {
  content: "";
  display: block;
  width: 10rem;
  max-width: 70%;
  border-bottom: 0.1em solid var(--light-purple);
  margin: 0.3rem auto;
}
.service-info {
  background-color: #71bcc133;
}
.infos {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
}
.infos > div:nth-child(even) {
  background: #fdf3ea !important;
  color: #000 !important;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 100px;
  right: auto;
}
@media (max-width: 1200px) {
  .infos {
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
@media (max-width: 787px) {
  .infos {
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
