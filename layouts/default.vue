<template>
    <v-app>
        <app-sidenav></app-sidenav>
        <v-container fluid :class="{'mt-3':getBreakpoint.smAndDown, 'mt-5': getBreakpoint.mdAndUp}">
            <nuxt />
        </v-container>
        <v-footer>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import Sidenav from "~/components/Navigation/Sidenav.vue";

export default {
    components: {
        "app-sidenav": Sidenav
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint"
    }),
    mounted() {
        this.$store.commit("setBreakpoint", this.$vuetify.breakpoint);
    }
};
</script>
