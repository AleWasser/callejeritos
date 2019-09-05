<template>
    <v-flex xs12>
        <v-card>
            <app-usuarios-form :usuario="usuario" :edit="true"></app-usuarios-form>
        </v-card>
    </v-flex>
</template>

<script>
import Form from "~/components/Usuarios/Form.vue";
import { mapGetters } from "vuex";

export default {
    layout: "admin",
    components: {
        "app-usuarios-form": Form
    },
    data() {
        return {
            usuario: {}
        };
    },
    computed: mapGetters({
        getUsuarioById: "usuarios/getUsuarioById"
    }),
    methods: {
        getUsuario(id) {
            this.usuario = this.getUsuarioById(id);
        }
    },
    mounted() {
        this.getUsuario(this.$route.params.id);
    }
};
</script>