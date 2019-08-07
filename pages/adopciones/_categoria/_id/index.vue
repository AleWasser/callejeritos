<template>
    <v-layout row wrap>
        <v-btn flat icon :to="`/adopciones/${categoria}`">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn flat icon>
            <v-icon>share</v-icon>
        </v-btn>
        <v-flex xs10>
            <app-single-item :mascota="mascota"></app-single-item>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import SingleItem from "~/components/adopciones/SingleItem.vue";

export default {
    components: {
        "app-single-item": SingleItem
    },
    data() {
        return {
            categoria: ""
        };
    },
    computed: {
        ...mapGetters({
            getMascota: "adopciones/getMascota"
        }),
        mascota() {
            return this.getMascota(this.$route.params.id);
        }
    },
    mounted() {
        this.categoria = this.$route.params.categoria;
    }
};
</script>
