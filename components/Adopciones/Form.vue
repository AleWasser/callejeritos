<template>
    <v-card>
        <form action="#" @submit.prevent="onSubmit">
            <input type="hidden" name="id" v-model="mascotaId" />
            <v-container grid-list-xs>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-text-field label="Nombre" v-model="mascotaNombre"></v-text-field>
                    </v-flex>
                    <v-flex xs12 d-flex>
                        <v-select
                            :items="getCategorias"
                            v-model="mascotaCategoria"
                            label="Categoria"
                        ></v-select>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card-actions class="justify-center">
                <v-btn color="success" type="submit">Enviar</v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    props: {
        id: {
            type: String,
            required: false,
            default: null
        },
        nombre: {
            type: String,
            required: false,
            default: ""
        },
        categoria: {
            type: String,
            required: false,
            default: ""
        }
    },
    data() {
        return {
            mascotaId: this.id,
            mascotaNombre: this.nombre,
            mascotaCategoria: this.categoria
        };
    },
    methods: {
        ...mapActions({
            createMascota: "adopciones/createMascota"
        }),
        onSubmit() {
            let data = {
                id: this.mascotaId,
                nombre: this.mascotaNombre,
                categoria: this.mascotaCategoria
            };
            this.createMascota(data);
        }
    },
    computed: mapGetters({
        getCategorias: "adopciones/getCategorias"
    })
};
</script>
