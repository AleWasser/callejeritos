<template>
    <v-app>
        <v-container fluid>
            <v-layout row>
                <v-flex xs3>
                    <app-nav></app-nav>
                </v-flex>
                <v-flex xs9>
                    <nuxt />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import AdminNav from "~/components/Navigation/AdminNav.vue";

export default {
    components: {
        "app-nav": AdminNav
    },
    mounted() {
        this.$store.commit("setBreakpoint", this.$vuetify.breakpoint);
    }
};
</script>
