<template>
    <v-flex xs12>
        <v-card>
            <app-adopciones-form></app-adopciones-form>
        </v-card>
    </v-flex>
</template>

<script>
import Form from "~/components/Adopciones/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-adopciones-form": Form
    }
};
</script>