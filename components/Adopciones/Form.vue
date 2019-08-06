<template>
    <form @submit.prevent="onSubmit">
        <input type="hidden" name="id" v-model="datos.id" />
        <v-container grid-list-xs v-if="datos.tipo != 'delete'">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field label="Nombre" v-model="datos.nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 d-flex>
                    <v-select :items="getCategorias" v-model="datos.categoria" label="Categoria"></v-select>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xs v-else>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center">
                    <p class="subheading font-weight-medium">¿Esta seguro de eliminar esta mascota?</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions class="justify-center">
            <v-btn color="success" type="submit" @click="close" v-if="datos.tipo != 'delete'">Enviar</v-btn>
            <v-btn color="error" type="submit" @click="close" v-else>Eliminar</v-btn>
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
        close: {
            type: Function,
            required: false
        }
    },
    methods: {
        ...mapActions({
            createMascota: "adopciones/createMascota",
            editMascota: "adopciones/editMascota",
            deleteMascota: "adopciones/deleteMascota"
        }),
        onSubmit() {
            if (this.datos.tipo == "create") {
                this.createMascota(this.datos);
            } else if (this.datos.tipo == "edit") {
                let datos = { ...this.datos, deleteData: this.categoria };
                this.editMascota(datos);
            } else {
                this.deleteMascota(this.datos);
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
