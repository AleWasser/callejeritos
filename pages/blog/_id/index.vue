<template>
    <v-container fluid grid-list-xs mt-5>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-img
                        src="http://thewallpaper.co/wp-content/uploads/2016/02/pure-black-german-shepherd-dog-wide-hd-wallpapers-for-background-cute-doggy-widescreen-1920x1080.jpg"
                        :aspect-ratio="getBreakpoint.smAndDown ? 1.5 : 2.5"
                    ></v-img>
                    <v-card-title primary-title class="pb-0">
                        <div>
                            <h2
                                class="mb-1"
                                :class="{'display-1': getBreakpoint.smAndDown, 'display-3 ': getBreakpoint.mdAndUp}"
                            >Titulo de prueba</h2>
                            <p class="subheading pl-3">description corta</p>
                        </div>
                    </v-card-title>
                    <v-card-text class="px-4 pt-0">
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
                        <v-card class="mb-2">
                            <v-card-title primary-title>
                                <p class="subtitle-1 font-weight-medium mb-0">Nombre usuario</p>
                            </v-card-title>
                            <v-card-text class="pt-0">
                                <p
                                    class="body-1"
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio praesentium, itaque ab vero suscipit adipisci necessitatibus quo assumenda cumque blanditiis tenetur quibusdam maxime accusamus repudiandae repellat est asperiores fuga!Vitae odit quidem eveniet quasi possimus, iusto minima? Tempora voluptatum, consequatur ipsam, deserunt id dicta tempore recusandae saepe commodi exercitationem debitis fugiat aspernatur dolorum reprehenderit, ea voluptas at voluptatibus laborum.</p>
                            </v-card-text>
                        </v-card>
                        <v-divider></v-divider>
                        <v-card>
                            <v-card-title primary-title>
                                <p class="subtitle-1 font-weight-medium mb-0">Nombre usuario</p>
                            </v-card-title>
                            <v-card-text class="pt-0">
                                <p
                                    class="body-1"
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio praesentium, itaque ab vero suscipit adipisci necessitatibus quo assumenda cumque blanditiis tenetur quibusdam maxime accusamus repudiandae repellat est asperiores fuga!Vitae odit quidem eveniet quasi possimus, iusto minima? Tempora voluptatum, consequatur ipsam, deserunt id dicta tempore recusandae saepe commodi exercitationem debitis fugiat aspernatur dolorum reprehenderit, ea voluptas at voluptatibus laborum.</p>
                            </v-card-text>
                        </v-card>
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
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        }
    }
};
</script>
