<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="display-1">Adopciones</h3>
                        <v-spacer></v-spacer>
                        <v-btn color="success" class="justify-end">Crear nueva</v-btn>
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
        </v-layout>
    </v-container>
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
