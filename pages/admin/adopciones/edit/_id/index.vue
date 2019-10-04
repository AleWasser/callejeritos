<template>
    <v-flex xs12>
        <v-card>
            <app-adopciones-form :mascota="mascota" :edit="true"></app-adopciones-form>
        </v-card>
    </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

import Form from "~/components/Adopciones/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-adopciones-form": Form
    },
    data() {
        return {
            mascota: {}
        };
    },
    computed: mapGetters({
        getMascota: "adopciones/getMascota"
    }),
    methods: {
        getMascotaById(id) {
            this.mascota = this.getMascota(id);
        }
    },
    mounted() {
        this.getMascotaById(this.$route.params.id);
    }
};
</script>