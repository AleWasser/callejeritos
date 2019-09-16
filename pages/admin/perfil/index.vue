<template>
    <v-layout row wrap>
        <v-flex xs4 offset-xs4>
            <form @submit.prevent="onSubmit">
                <v-card>
                    <v-card-text class="text-xs-center pb-1">
                        <v-avatar :size="125" color="grey lighten-4">
                            <img
                                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                                alt="avatar"
                            />
                        </v-avatar>
                        <p class="subheading font-weight-medium mt-2 mb-1">{{getUser.userName}}</p>
                        <p>{{getUser.email}}</p>
                    </v-card-text>
                    <v-layout row wrap v-if="edit">
                        <v-flex xs10 offset-xs1>
                            <v-text-field
                                name="nombre"
                                label="Nombre"
                                id="nombre"
                                ref="userName"
                                v-model="userName"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs10 offset-xs1>
                            <v-text-field
                                name="email"
                                label="Email"
                                id="email"
                                ref="email"
                                v-model="email"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-card-actions class="justify-center pt-0">
                        <v-btn
                            color="primary"
                            type="button"
                            @click="onClick"
                        >{{edit ? 'Aceptar' : 'Editar'}}</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            edit: false,
            userName: "",
            email: ""
        };
    },
    computed: {
        getUser() {
            return this.$store.getters.getUserData;
        }
    },
    methods: {
        onClick() {
            this.edit = !this.edit;
            if (!this.edit) {
                this.$store.dispatch("editUser", {
                    userName: this.userName,
                    email: this.email
                });
            }
        }
    }
};
</script>