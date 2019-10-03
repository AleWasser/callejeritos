<template>
    <v-flex xs12>
        <v-btn color="grey lighten-2" @click="filtros = !filtros">
            <v-icon class="mr-2">filter_list</v-icon>Filtros
        </v-btn>
        <v-slide-y-reverse-transition class="ma-2">
            <v-card v-show="filtros" color="grey lighten-2">
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <v-flex xs4>
                            <v-select :items="getCiudades" @change="filtrar" label="Ciudad"></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-slide-y-reverse-transition>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            filtros: false
        };
    }
};
</script>