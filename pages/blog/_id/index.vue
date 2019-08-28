<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-img
                    :src="post.imageUrl"
                    :aspect-ratio="getBreakpoint.smAndDown ? 1.5 : 2.5"
                    @load="loaded = true"
                    v-show="loaded"
                ></v-img>
                <v-card-text class="text-xs-center" v-if="!loaded">
                    <v-progress-circular indeterminate color="primary" :size="100"></v-progress-circular>
                </v-card-text>
                <v-card-title primary-title class="pb-0">
                    <div>
                        <h2
                            class="mb-1"
                            :class="{'display-1': getBreakpoint.smAndDown, 'display-3 ': getBreakpoint.mdAndUp}"
                        >{{post.titulo}}</h2>
                        <p class="subheading pl-3">{{post.descripcion}}</p>
                    </div>
                </v-card-title>
                <v-card-text class="px-4 pt-0" v-html="post.contenido"></v-card-text>
                <v-card-actions>
                    <v-btn flat color="primary" to="/blog">Volver</v-btn>
                    <v-btn flat icon @click="sheet = true">
                        <v-icon>share</v-icon>
                    </v-btn>
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
            <app-share-dialog :sheet="sheet" :closeSheet="closeSheet"></app-share-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import ShareDialog from "~/components/adopciones/ShareDialog.vue";

export default {
    components: {
        "app-share-dialog": ShareDialog
    },
    data() {
        return {
            post: {},
            loaded: false,
            sheet: false
        };
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint",
        getPostById: "blog/getPostById"
    }),
    methods: {
        getPost(id) {
            this.post = this.getPostById(id);
        },
        closeSheet() {
            this.sheet = false;
        }
    },
    mounted() {
        this.getPost(this.$route.params.id);
    }
};
</script>
