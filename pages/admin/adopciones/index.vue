<template>
    <v-flex xs12>
        <v-card>
            <v-card-title primary-title>
                <h3 class="display-1">Adopciones</h3>
                <v-spacer></v-spacer>
                <v-btn
                    fab
                    icon
                    color="success"
                    class="justify-end"
                    @click="openAddDialog('create')"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="headers" :items="getAdopciones">
                <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.nombre }}</td>
                    <td>{{ props.item.categoria }}</td>
                    <td>
                        <v-icon
                            small
                            class="mr-2"
                            @click="openEditDialog('edit',props.item.id, props.item.nombre, props.item.categoria, props.item.imageUrl)"
                        >edit</v-icon>
                        <v-icon
                            small
                            @click="openDeleteDialog('delete', props.item.id, props.item.categoria, props.item.imageUrl)"
                        >delete</v-icon>
                    </td>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Adopcion</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn flat icon color="error" @click="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <app-adopcion-form
                        :close="closeDialog"
                        :datosAdopcion="datosAdopcion"
                        :categoria="deleteData"
                    ></app-adopcion-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

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
        closeDialog() {
            this.dialog = false;
        },
        openEditDialog(tipo, id, nombre, categoria, imageUrl) {
            this.dialog = true;
            this.deleteData = categoria;
            this.datosAdopcion = { tipo, id, nombre, categoria, imageUrl };
        },
        openDeleteDialog(tipo, id, categoria, imageUrl) {
            this.dialog = true;
            this.datosAdopcion = { tipo, id, categoria, imageUrl };
        },
        openAddDialog(tipo) {
            this.dialog = true;
            this.datosAdopcion = { tipo, imageUrl: "" };
        }
    }
};
</script>
