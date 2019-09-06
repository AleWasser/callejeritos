<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >Blog</h1>
            <v-card>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <v-carousel>
                                <v-carousel-item v-for="post in getSliderPosts" :key="post.id">
                                    <nuxt-link tag="div" :to="'/blog/' + post.id" class="pointer">
                                        <v-img :src="post.imageUrl">
                                            <v-sheet color="transparent" height="100%" tile>
                                                <v-layout
                                                    align-start
                                                    justify-center
                                                    row
                                                    fill-height
                                                >
                                                    <div class="display-3">{{post.titulo}}</div>
                                                </v-layout>
                                            </v-sheet>
                                        </v-img>
                                    </nuxt-link>
                                </v-carousel-item>
                            </v-carousel>
                        </v-flex>
                        <v-flex
                            xs12
                            md6
                            :class="{'my-1 pa-0': getBreakpoint.smAndDown}"
                            v-for="post in getPosts"
                            :key="post.id"
                        >
                            <app-blog-list :post="post"></app-blog-list>
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