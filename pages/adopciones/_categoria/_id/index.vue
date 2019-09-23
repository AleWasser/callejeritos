<template>
    <v-layout row wrap>
        <v-btn flat icon :to="`/adopciones/${categoria}`">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn flat icon @click="sheet = true">
            <v-icon>share</v-icon>
        </v-btn>
        <v-flex xs12 md10>
            <app-single-item :mascota="mascota"></app-single-item>
            <app-share-dialog :sheet="sheet" :url="url" :closeSheet="closeSheet"></app-share-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import SingleItem from "~/components/Adopciones/SingleItem.vue";
import ShareDialog from "~/components/Adopciones/ShareDialog.vue";

export default {
    components: {
        "app-single-item": SingleItem,
        "app-share-dialog": ShareDialog
    },
    data() {
        return {
            categoria: "",
            sheet: false
        };
    },
    asyncData({ params }) {
        return { url: params };
    },
    computed: {
        ...mapGetters({
            getMascota: "adopciones/getMascota"
        }),
        mascota() {
            return this.getMascota(this.$route.params.id);
        }
    },
    methods: {
        closeSheet() {
            this.sheet = false;
        }
    },
    mounted() {
        this.categoria = this.$route.params.categoria;
    }
};
</script>
