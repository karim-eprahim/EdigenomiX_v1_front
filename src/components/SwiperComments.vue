<template>
  <div class="swiper-comments">
    <swiper
    :pagination="{ clickable: true }"
    :modules="modules"
    :slides-per-view="1"
    :space-between="35"
    class="pb-3 my-swiper rounded shadow"
    >
    <!-- :navigation="{prevIcon:'.swiper-prev', nextIcon:'.swiper-next'}" -->
      <swiper-slide v-for="index in 4" :key="index">
          <div class="reviews-content p-2">
            <div class="rev-content border-bottom">
              <div class="d-flex align-items-center gap-3 my-2">
                <h4 class="m-0">Jan Goepel</h4>
                <div class="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gold"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    v-for="index in 4"
                    :key="index"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </div>
              </div>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
      </swiper-slide>
      <!-- <div class="swiper-prev"></div>
      <div class="swiper-next"></div> -->
      <div class="swiper-pagination"></div>

    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

export default {
  name: "SwiperComments",
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // Your data properties if needed
    };
  },
};
</script>

<style scoped>

</style>
