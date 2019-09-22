<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >Donaciones</h1>
            <v-card>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                           
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import BlogList from "~/components/blog/BlogList.vue";

export default {
    components: {
        "app-blog-list": BlogList
    },
    data() {
        return {
            colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
        };
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint",
        getPosts: "blog/getPosts",
        getSliderPosts: "blog/getSliderPosts"
    })
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>