<template>
    <v-flex xs12>
        <v-card>
            <v-card-title primary-title>
                <h3 class="display-1">Usuarios</h3>
                <v-spacer></v-spacer>
                <v-btn fab icon color="success" class="justify-end" to="/admin/usuarios/create">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="headers" :items="getUsuarios">
                <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.nombre }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>
                        <v-btn
                            flat
                            icon
                            color="primary"
                            :to="'/admin/usuarios/edit/' + props.item.id"
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

export default {
    layout: "admin",
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
                    text: "mail",
                    value: "mail"
                },
                {
                    text: "Acciones",
                    sortable: false
                }
            ],
            dialog: false,
            deleteData: ""
        };
    },
    methods: {
        ...mapActions({
            deleteUser: "usuarios/deleteUser"
        }),
        openDelete(data) {
            this.deleteData = data;
            this.dialog = true;
        },
        deleteItem() {
            this.deleteUser(this.deleteData);
            this.dialog = false;
        }
    },
    computed: mapGetters({
        getUsuarios: "usuarios/getUsuarios"
    })
};
</script>