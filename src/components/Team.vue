<template>
  <div class="top-instructors py-3 pb-5" id="instructors" v-if="teamShow">
    <div class="container">
      <div class="section-title">
        <h2 class=" fw-bold">A global team of 800 experts covering 1600+ subject areas</h2>
      </div>

      <div class="swiper-comments">
        <swiper
          :pagination="{ clickable: true }"
          :modules="modules"
          :slides-per-view="4"
          :space-between="35"
          :navigation="{prevIcon:'.swiper-prev', nextIcon:'.swiper-next'}"
          :breakpoints="breakpoints"
          class="pb-3"
        >
          <swiper-slide v-for="editor in allteam" :key="editor.id">
            <div class="">
          <div class="team">
            <div class="team-img">
              <img
                :src="editor.image"
                alt="Team Image"
              />
            </div>
            <div class="team-content">
              <h2 class=" fw-bold">{{ editor.name }}</h2>
              <h3 class="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="purple"
                  class="bi bi-bookmark-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"
                  />
                </svg>
                {{ editor.type }}
              </h3>
              <div class="row border-top border-bottom py-2">
                <div class="col-6 border-end">
                  <strong>{{ editor.year_of_experience }}</strong> experience
                </div>
                <div class="col-6"><strong>{{ editor.papers_edited }}</strong> Papers edited</div>
              </div>
              <div class="row border-bottom py-3">
                <h6 class="text-secondary">EDUCATIONAL BACKGROUND</h6>
                <p>
                  {{ editor.educational_background }}
                </p>
              </div>
              <div class="row py-3">
                <h6 class="text-secondary">SUBJECT AREAS</h6>
                <p>
                  {{ editor.subject_area }}
                </p>
              </div>
            </div>
            <div class="team-social" style="display: none">
              <a href="#" class="social-tw"> <i class="fab fa-twitter"></i></a>
              <a href="#" class="social-fb">
                <i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="social-li">
                <i class="fab fa-linkedin-in"></i
              ></a>
              <a href="#" class="social-in">
                <i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="social-yt"> <i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
          </swiper-slide>
          <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

export default {
  name: "Team",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        767:{
          slidesPerView:2,
        },
        990:{
          slidesPerView:3,
        },
        1600:{
          slidesPerView:4,
        }
      },
      allteam: [],
      teamShow:false,
    };
  },
  mounted() {
    this.team();
  },
  methods: {
    async team() {
      let result = await axios.get(
        `${process.env.VUE_APP_API_URL}/editors-list`
      );
      if (result.status == 200) {
        this.allteam = result.data.data.editors;
        if(this.allteam.length >= 3){
          this.teamShow = true
        }else{
          this.teamShow = false
        }
      }
    },

  },
};
</script>

<style scoped>
.top-instructors {
  background-color: #dbe3ff;
  padding: 2rem 0;
}
/* Coding With Nick */

/* GEneral stuff */
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
}
body {
  font-family: "lato", sans-serif;
  color: #454545;
  font-weight: 300;
  background: #ffffff;
}
a {
  color: #333333;
  font-weight: 400;
  outline: none;
  text-decoration: none;
  transition: 0.5s;
}
a:hover,
a:focus {
  outline: none;
  text-decoration: none;
}
p {
  padding: 0;
  margin: 0 0 15px 0;
  color: #454545;
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0 0 15px 0;
  color: #333333;
  font-weight: 500;
}
img {
  width: 100%;
  height: auto;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.section-title {
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 80px;
  margin-top: 40px;
  text-align: center;
}
.section-title h1 {
  display: inline-block;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 700;
  color: #000000;
  margin: 0 0 5px;
  position: relative;
}
.container .section-title h1::before {
  left: 30%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.column {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
}
.team {
  margin-bottom: 30px;
}
.team .team-img {
  position: relative;
  font-size: 0;
  text-align: center;
}
.team .team-img img {
  width: 160px;
  height: auto;
  border-radius: 100%;
  border: 20px solid #f3f4fa;
}

.team .team-content {
  padding: 80px 20px 20px 20px;
  margin-top: -80px;
  text-align: center;
  background: #f3f4fa;
  border-radius: 10px;
}
.team .team-content h2 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 2px;
}
.team .team-content h3 {
  font-size: 16px;
  font-weight: 300;
}
.team .team-content h4 {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  font-style: italic;
  margin-bottom: 0;
}
.team .team-content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.team .team-social {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 35px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(219, 227, 255, 0.514);
  transition: all 0.3s;
  font-size: 0;
  z-index: 1;
  opacity: 0;
}
.team:hover .team-social {
  opacity: 1;
}
.team .team-social a {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  padding: 11px 0 10px 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  transition: all 0.3s;
  margin-top: 50px;
}
.team .team-social a.social-tw {
  background: #00acee;
}
.team .team-social a.social-fb {
  background: #3b5998;
}
.team .team-social a.social-li {
  background: #0e76a8;
}
.team .team-social a.social-in {
  background: #3f729b;
}
.team .team-social a.social-yt {
  background: #c4302b;
}
.team .team-social a:last-child {
  margin-right: 0;
}
.team:hover .team-social a {
  margin-top: 0;
}
.team .team-social a:hover {
  background: #222222;
}

/* Mobile Responsive */

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
  .column {
    max-width: 50%;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .column {
    max-width: 33.333333%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .column {
    max-width: 25%;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
