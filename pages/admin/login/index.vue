<template>
    <v-layout row wrap>
        <app-notification></app-notification>
        <v-flex xs4 offset-xs4>
            <form @submit.prevent="onSubmit">
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">Login</h3>
                    </v-card-title>
                    <v-card-text>
                        <span v-if="$v.email.$error" class="error--text caption">Campo requerido</span>
                        <v-text-field
                            v-model="email"
                            name="email"
                            label="Email"
                            id="email"
                            @blur="$v.email.$touch()"
                            :error="$v.email.$error"
                            required
                            class="pt-1 mt-1"
                            autocomplete="off"
                        ></v-text-field>
                        <span
                            v-if="$v.password.$error"
                            class="error--text caption"
                        >Debes introducir una contraseña</span>
                        <v-text-field
                            v-model="password"
                            :append-icon="show ? 'visibility' : 'visibility_off'"
                            :type="show ? 'text' : 'password'"
                            name="password"
                            label="Password"
                            @click:append="show = !show"
                            @blur="$v.password.$touch()"
                            :error="$v.password.$error"
                            required
                            class="pt-1 mt-1"
                            autocomplete="off"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn flat color="primary" to="/">Cancelar</v-btn>
                        <v-btn
                            flat
                            color="primary"
                            type="submit"
                            :disabled="this.$v.$invalid"
                        >Ingresar</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

import Notification from "~/components/Notification.vue";

export default {
    components: {
        "app-notification": Notification
    },
    data() {
        return {
            show: false,
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions({
            userLogin: "userLogin"
        }),
        onSubmit() {
            if (!this.$v.$invalid) {
                this.userLogin({
                    email: this.email,
                    password: this.password
                }).then(() => this.$router.push("/admin"));
            }
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    }
};
</script>