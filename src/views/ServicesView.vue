<template>
  <div class="services pageh">
    <div class="container pt-5">
      <h2 class="fs-2 m-0 text-center">
        Which of our editing and proofreading services do you require?
      </h2>
    </div>
    <Services></Services>
    <!-- <UpcomingServices></UpcomingServices> -->
  </div>
</template>
<script>
import Services from "@/components/Services.vue";
// import UpcomingServices from "@/components/upcomingServices.vue";
export default {
  name: "ServecesPage",
  components: { Services },
};
</script>
<style scoped></style>
