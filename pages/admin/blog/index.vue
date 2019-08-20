<template>
    <v-flex xs12>
        <v-card>
            <pre>{{getPosts}}</pre>
            <v-container fluid grid-list-md :class="{'pa-0': getBreakpoint.smAndDown}">
                <v-layout row wrap>
                    <v-flex class="xs12 md3 pointer" v-for="item in getPosts" :key="item.id">
                        <app-blog-list></app-blog-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AdminBlogList from "~/components/blog/AdminBlogList.vue";

export default {
    layout: "admin",
    components: {
        "app-blog-list": AdminBlogList
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint",
        getPosts: "blog/getPosts"
    })
};
</script>

