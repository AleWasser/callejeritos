<template>
    <v-card>
        <v-img :src="mascota.imageUrl || '/imagenes/default.jpg'" aspect-ratio="3"></v-img>
        <v-card-title primary-title>
            <h3 class="headline mb-0">{{mascota.nombre}}</h3>
        </v-card-title>
        <v-card-text>
            <div v-html="mascota.descripcion"></div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="red darken-1" dark block large @click="dialog = true">
                <v-icon class="mr-2">favorite</v-icon>Adoptar
            </v-btn>
        </v-card-actions>
        <app-contact-dialog
            :dialog="dialog"
            :closeDialog="closeDialog"
            :contacto="mascota.contacto"
        ></app-contact-dialog>
    </v-card>
</template>

<script>
import ContactDialog from "~/components/adopciones/ContactDialog.vue";

export default {
    props: ["mascota"],
    components: {
        "app-contact-dialog": ContactDialog
    },
    data() {
        return {
            dialog: false
        };
    },
    methods: {
        closeDialog() {
            this.dialog = false;
        }
    }
};
</script>

