<template>
    <v-app>
        <app-nav></app-nav>
        <v-container fluid class="mt-5">
            <v-layout row wrap>
                <nuxt />
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import AdminNav from "~/components/Navigation/AdminNav.vue";

export default {
    middleware: ["check-auth", "auth"],
    components: {
        "app-nav": AdminNav
    },
    mounted() {
        this.$store.commit("setBreakpoint", this.$vuetify.breakpoint);
    }
};
</script>
