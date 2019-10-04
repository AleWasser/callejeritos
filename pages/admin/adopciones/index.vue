<template>
    <v-flex xs12>
        <v-card>
            <v-card-title primary-title>
                <h3 class="display-1">Adopciones</h3>
                <v-spacer></v-spacer>
                <v-btn fab icon color="success" class="justify-end" to="/admin/adopciones/create">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="headers" :items="getAdopciones">
                <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.nombre }}</td>
                    <td>{{ props.item.categoria }}</td>
                    <td>{{ props.item.contacto.nombre }}</td>
                    <td>
                        <v-btn
                            flat
                            icon
                            color="primary"
                            :to="'/admin/adopciones/edit/' + props.item.id"
                        >
                            <v-icon small>edit</v-icon>
                        </v-btn>
                        <v-btn flat icon color="error" @click="openDelete(props.item)">
                            <v-icon small>delete</v-icon>
                        </v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-card>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-card>
                    <v-card-title class="headline">¿Esta seguro de eliminar este usuario?</v-card-title>
                    <v-card-text>Una vez borrado el mismo no se podra recuperar.</v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" flat @click="dialog = false">Cancelar</v-btn>
                        <v-btn color="primary" flat @click="deleteItem">Aceptar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-flex>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Form from "~/components/Adopciones/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-adopcion-form": Form
    },
    data() {
        return {
            headers: [
                {
                    text: "id",
                    value: "id"
                },
                {
                    text: "nombre",
                    value: "nombre"
                },
                {
                    text: "categoria",
                    value: "categoria"
                },
                {
                    text: "contacto",
                    value: "Contacto"
                },
                {
                    text: "Acciones",
                    sortable: false
                }
            ],
            dialog: false,
            deleteDialog: false,
            datosAdopcion: {},
            dialogType: "create",
            deleteData: ""
        };
    },
    computed: mapGetters({
        getAdopciones: "adopciones/getAdopciones"
    }),
    methods: {
        ...mapActions({
            deleteMascota: "adopciones/deleteMascota"
        }),
        openDelete(data) {
            this.deleteData = data;
            this.dialog = true;
        },
        deleteItem() {
            this.deleteMascota(this.deleteData);
            this.dialog = false;
        }
    }
};
</script>
