<template>
    <v-flex xs12>
        <v-card>
            <app-blog-form></app-blog-form>
        </v-card>
    </v-flex>
</template>

<script>
import Form from "~/components/Blog/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-blog-form": Form
    }
};
</script>