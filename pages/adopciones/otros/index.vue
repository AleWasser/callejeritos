<template>
    <v-flex xs12>
        <h1
            class="text-xs-center my-4"
            :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
        >Otras Mascotas</h1>
        <app-item-list :mascotas="getOtros"></app-item-list>
    </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

import ItemList from "~/components/Adopciones/ItemList.vue";

export default {
    components: {
        "app-item-list": ItemList
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint",
        getOtros: "adopciones/getOtros"
    })
};
</script>
