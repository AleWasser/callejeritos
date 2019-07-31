<template>
    <v-card>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md4 v-for="item in mascotas" :key="item.id">
                    <v-card>
                        <v-img
                            src="http://1.bp.blogspot.com/--GsimxUheFs/T9ml_rep9JI/AAAAAAAAG5c/W3TAUZV3B5c/s1600/Dog+Wallpaper+112.jpg"
                        ></v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{item.nombre}}</h3>
                                <div>description</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn block color="primary">Ver mas</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: ["mascotas"]
};
</script>
