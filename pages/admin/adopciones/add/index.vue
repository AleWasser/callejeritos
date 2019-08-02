<template>
    <v-flex xs12>
        <app-adopcion-form></app-adopcion-form>
    </v-flex>
</template>

<script>
import Form from "~/components/Adopciones/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-adopcion-form": Form
    }
};
</script>
