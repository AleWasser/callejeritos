<template>
    <v-layout row wrap>
        <v-flex xs4 offset-xs4>
            <form @submit.prevent="onSubmit">
                <v-card>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0">Login</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="email" name="email" label="Email" id="email"></v-text-field>
                        <v-text-field
                            v-model="password"
                            :append-icon="show ? 'visibility' : 'visibility_off'"
                            :type="show ? 'text' : 'password'"
                            name="password"
                            label="Password"
                            @click:append="show = !show"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn flat color="primary" to="/">Cancelar</v-btn>
                        <v-btn flat color="primary" type="submit">Ingresar</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
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
            this.userLogin({ email: this.email, password: this.password }).then(
                () => this.$router.push("/admin")
            );
        }
    }
};
</script>