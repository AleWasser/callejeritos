<template>
    <v-container fluid :class="{'mt-3':getBreakpoint.smAndDown, 'mt-5': getBreakpoint.mdAndUp}">
        <v-layout row wrap>
            <v-flex xs12>
                <h1
                    class="text-xs-center my-4"
                    :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
                >Perros</h1>
                <app-item-list :mascotas="getPerros"></app-item-list>
            </v-flex>
        </v-layout>
    </v-container>
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
        getPerros: "adopciones/getPerros"
    })
};
</script>
