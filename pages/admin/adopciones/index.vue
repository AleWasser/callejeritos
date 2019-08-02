<template>
    <v-flex xs12>
        <v-card>
            <v-card-title primary-title>
                <h3 class="display-1">Adopciones</h3>
                <v-spacer></v-spacer>
                <v-btn fab icon color="success" class="justify-end" to="/admin/adopciones/add">
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
                        <v-icon small class="mr-2">edit</v-icon>
                        <v-icon small>delete</v-icon>
                    </td>
                </template>
            </v-data-table>
        </v-card>
    </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

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
                    text: "categoria",
                    value: "categoria"
                },
                {
                    text: "Acciones",
                    sortable: false
                }
            ]
        };
    },
    computed: mapGetters({
        getAdopciones: "adopciones/getAdopciones"
    })
};
</script>
