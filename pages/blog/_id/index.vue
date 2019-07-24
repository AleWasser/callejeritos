<template>
    <v-container fluid grid-list-xs mt-5>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-img
                        src="http://thewallpaper.co/wp-content/uploads/2016/02/pure-black-german-shepherd-dog-wide-hd-wallpapers-for-background-cute-doggy-widescreen-1920x1080.jpg"
                        aspect-ratio="3"
                    ></v-img>
                    <v-card-title primary-title class="pb-0">
                        <div>
                            <h2 class="display-3 mb-1">Titulo de prueba</h2>
                            <p class="subheading">description corta</p>
                        </div>
                    </v-card-title>
                    <v-card-text class="pa-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque similique aperiam dolorum porro quis fugit autem. Quisquam, deleniti dolorum? Voluptatum ullam corrupti facere repellendus laborum obcaecati, porro est aut?
                            Atque reprehenderit provident quis eligendi excepturi officia illum ipsa! Reiciendis mollitia deserunt optio quibusdam, blanditiis sapiente libero doloremque veniam suscipit modi in quasi voluptates. Atque eligendi vel officiis aperiam qui.
                            Accusamus saepe dignissimos, excepturi unde tempore magnam et eos deserunt incidunt facilis enim dolore. Deleniti, voluptatem animi error repudiandae quam tempore dolores sint nulla minima, voluptas rerum quia magnam eligendi.
                            Iusto dicta maxime deleniti molestias sequi quod quas praesentium quidem esse enim ipsa, aperiam voluptatum officia non. Aperiam eaque quis mollitia officiis optio, veniam doloremque nisi corporis deserunt consequatur necessitatibus.
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="primary">Volver</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 mt-3>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="display-2 mb-0">Comentarios</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <v-list class="pa-4">
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>Titulo</v-list-tile-title>
                                    <v-list-tile-sub-title>Comentario de prueba</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-list-tile-action-text>Fecha</v-list-tile-action-text>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card-text>
                    <v-card-actions>
                        <p>//Formulario para nuevo comentario</p>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            id: ""
        };
    },
    mounted() {
        this.id = this.$route.params.id;
    }
};
</script>
