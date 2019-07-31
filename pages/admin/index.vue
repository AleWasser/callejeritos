<template>
    <v-container fluid :class="{'mt-3':getBreakpoint.smAndDown, 'mt-5': getBreakpoint.mdAndUp}">
        <v-layout row wrap>
            <v-flex xs3>
                <v-card>
                    <v-card-title class="justify-center" primary-title>
                        <div>
                            <h3 class="headline mb-0">Adopciones</h3>
                        </div>
                    </v-card-title>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary">Listado</v-btn>
                        <v-btn color="primary">Crear</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
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
