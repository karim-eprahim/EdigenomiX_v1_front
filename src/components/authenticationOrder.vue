<template>
    <div class="container pageh d-flex justify-content-center align-items-center">
        <div class="container my-5">
            <div
                class="position-relative outhen p-1 py-3 py-lg-5 p-lg-5 text-center text-muted bg-body border border-dashed rounded-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#a6b1f2"
                    class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                    <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
                <h1 class="text-body-emphasis fw-bold">Placeholder jumbotron</h1>
                <div class="card-body">
                    <div class="d-flex flex-column justify-content-center gap-3">
                        <div class="p-3 bg-light rounded">
                            <div class="row mb-2">
                                <div class="col-4">File Name:</div>
                                <div class="col-8">jobDetail.file_name </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">Word Count:</div>
                                <div class="col-8"> jobDetail.words_count</div>
                            </div>
                        </div>
                        <div class="p-3 bg-light rounded mb-3">
                            <div class="row mb-2">
                                <div class="col-4">Edited Within:</div>
                                <div class="col-8"> jobDetail.duration jobDetail.duration_type </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">Delivery Date:</div>
                                <div class="col-8"> jobDetail.delivered_at </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-4">Quote:</div>
                                <div class="col-8">$ jobDetail.quote </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-purple px-5 mb-5" type="button">
                    Go To Home
                </button>
            </div>
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
                // console.log(this.allCategories)
                this.isLoading = false;
            }
        },
    }
}
</script>

<style scoped>
.outhen {
    max-width: 1200px;
    margin: auto;
}
</style>