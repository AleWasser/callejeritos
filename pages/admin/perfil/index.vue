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
                    <v-card-actions class="justify-center pt-0">
                        <v-btn color="primary" type="submit">Editar</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    layout: "admin",
    computed: {
        getUser() {
            return this.$store.getters.getUserData;
        }
    }
};
</script>