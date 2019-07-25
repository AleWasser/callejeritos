<template>
    <v-app>
        <app-sidenav></app-sidenav>
        <nuxt />
        <v-footer>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import Sidenav from "~/components/Navigation/Sidenav.vue";
export default {
    components: {
        "app-sidenav": Sidenav
    }
};
</script>
