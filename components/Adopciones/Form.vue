<template>
    <form action="#" @submit.prevent="onSubmit">
        <input type="hidden" name="id" v-model="datos.id" />
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field label="Nombre" v-model="datos.nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 d-flex>
                    <v-select :items="getCategorias" v-model="datos.categoria" label="Categoria"></v-select>
                </v-flex>
            </v-layout>
            <pre>
        {{categoria}}
    </pre>
        </v-container>
        <v-card-actions class="justify-center">
            <v-btn color="success" type="submit">Enviar</v-btn>
        </v-card-actions>
    </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    props: {
        datosAdopcion: {
            type: Object,
            required: false
        },
        categoria: {
            type: String,
            required: false,
            default: ""
        },
        closeDialog: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        ...mapActions({
            createMascota: "adopciones/createMascota",
            editMascota: "adopciones/editMascotas"
        }),
        onSubmit() {
            if (this.datos.tipo == "create") {
                this.createMascota(this.datos);
            } else {
                let datos = { ...this.datos, deleteData: this.categoria };
                this.editMascota(datos);
            }
        }
    },
    computed: {
        ...mapGetters({
            getCategorias: "adopciones/getCategorias"
        }),
        datos() {
            return this.datosAdopcion;
        }
    }
};
</script>
