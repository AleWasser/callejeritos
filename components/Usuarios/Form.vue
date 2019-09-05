<template>
    <form @submit.prevent="onSubmit">
        <pre>{{datos}}</pre>
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field v-model="datos.nombre" name="nombre" label="Nombre" id="nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="!edit">
                    <v-text-field v-model="datos.email" name="email" label="Email" id="email"></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="!edit">
                    <v-text-field
                        v-model="datos.password"
                        :append-icon="show ? 'visibility' : 'visibility_off'"
                        :type="show ? 'text' : 'password'"
                        name="password"
                        label="Password"
                        @click:append="show = !show"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                    <v-btn color="success" type="submit">{{this.edit ? 'Actualizar' : 'Crear'}}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: {
        usuario: {
            type: Object,
            required: false,
            default() {
                return {
                    nombre: "",
                    email: "",
                    password: ""
                };
            }
        },
        edit: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        ...mapActions({
            createUser: "usuarios/createUser",
            editUser: "usuarios/editUser"
        }),
        onSubmit() {
            if (this.edit) {
                this.editUser({
                    nombre: this.datos.nombre,
                    email: this.datos.email,
                    password: this.datos.password,
                    id: this.datos.id
                });
            } else {
                this.createUser({
                    nombre: this.datos.nombre,
                    email: this.datos.email,
                    password: this.datos.password
                });
            }
        }
    },
    computed: {
        datos() {
            return {
                ...this.usuario
            };
        }
    }
};
</script>