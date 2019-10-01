<template>
    <v-flex xs12>
        <v-card>
            <app-blog-form :post="post" :edit="true"></app-blog-form>
        </v-card>
    </v-flex>
</template>

<script>
import Form from "~/components/Blog/Form.vue";

import { mapGetters } from "vuex";

export default {
    layout: "admin",
    components: {
        "app-blog-form": Form
    },
    data() {
        return {
            post: {}
        };
    },
    computed: mapGetters({
        getPostById: "blog/getPostById"
    }),
    methods: {
        getPost(id) {
            this.post = this.getPostById(id);
        }
    },
    mounted() {
        this.getPost(this.$route.params.id);
    }
};
</script>