<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4 text-capitalize"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >{{categoria}}</h1>
            <app-item-list :mascotas="getMascotas"></app-item-list>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import ItemList from "~/components/Adopciones/ItemList.vue";

export default {
    components: {
        "app-item-list": ItemList
    },
    data() {
        return {
            categoria: ""
        };
    },
    computed: {
        ...mapGetters({
            getBreakpoint: "getBreakpoint",
            getPerros: "adopciones/getPerros",
            getGatos: "adopciones/getGatos",
            getOtros: "adopciones/getOtros"
        }),
        getMascotas() {
            switch (this.$route.params.categoria) {
                case "perros":
                    return this.getPerros;
                    break;

                case "gatos":
                    return this.getGatos;
                    break;

                case "otros":
                    return this.getOtros;
                    break;

                default:
                    this.$route.push("/");
                    break;
            }
        }
    },
    mounted() {
        this.categoria = this.$route.params.categoria;
    }
};
</script>
