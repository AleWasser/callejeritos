<template>
    <v-container fluid :class="{'mt-3':getBreakpoint.smAndDown, 'mt-5': getBreakpoint.mdAndUp}">
        <v-layout row wrap>
            <h1>Admin</h1>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import ItemList from "~/components/Adopciones/ItemList.vue";

export default {
    layout: "admin",
    components: {
        "app-item-list": ItemList
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint"
    })
};
</script>
