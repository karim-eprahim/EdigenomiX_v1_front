<template>
    <div class="container services-sape my-4">
        <div v-if="isLoading" class="loading-overlay">
            <div class="loading-spinner"></div>
        </div>
        <div v-if="!isLoading" class="bg-white rounded-lg rounded-4 p-1 py-3 p-sm-5">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "UpcomingServices",
    data() {
        return {
            allCategories: [],
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
                `${process.env.VUE_APP_API_URL}/service-list-coming`
            );
            if (result.status == 200) {
                this.allCategories = result.data;
                console.log(this.allCategories)
                this.isLoading = false;
            }
        },
    }
}
</script>

<style scoped></style>