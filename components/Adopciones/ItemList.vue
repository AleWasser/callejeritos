<template>
    <v-card>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md4 v-for="item in mascotas" :key="item.id">
                    <v-card>
                        <v-img
                            :src="item.imageUrl || '/imagenes/default.jpg'"
                            @load="loaded = true"
                        ></v-img>
                        <v-card-text class="text-xs-center" v-if="!loaded">
                            <v-progress-circular indeterminate color="primary" :size="100"></v-progress-circular>
                        </v-card-text>
                        <v-card-title primary-title>
                            <h3 class="headline mb-0">{{item.nombre}}</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn
                                block
                                color="primary"
                                :to="`/adopciones/${item.categoria}/${item.id}`"
                            >Ver mas</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: ["mascotas"],
    data() {
        return {
            loaded: false
        };
    }
};
</script>
