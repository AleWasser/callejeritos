<template>
    <v-flex xs12>
        <v-card>
            <app-usuarios-form></app-usuarios-form>
        </v-card>
    </v-flex>
</template>

<script>
import Form from "~/components/Usuarios/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-usuarios-form": Form
    }
};
</script>