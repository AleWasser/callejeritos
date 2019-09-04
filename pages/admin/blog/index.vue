<template>
    <v-flex xs12>
        <v-card>
            <v-container fluid grid-list-md :class="{'pa-0': getBreakpoint.smAndDown}">
                <v-btn block color="success" dark to="/admin/blog/create">Crear nuevo post</v-btn>
                <v-layout row wrap>
                    <v-flex class="xs12 md3 pointer" v-for="item in getPosts" :key="item.id">
                        <app-blog-list :post="item" :openDelete="openDelete"></app-blog-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-card>
                    <v-card-title class="headline">¿Esta seguro de eliminar este post?</v-card-title>
                    <v-card-text>Una vez borrado el mismo no se podra recuperar.</v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" flat @click="dialog = false">Cancelar</v-btn>
                        <v-btn color="primary" flat @click="deleteItem">Aceptar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-flex>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AdminBlogList from "~/components/blog/AdminBlogList.vue";

export default {
    layout: "admin",
    components: {
        "app-blog-list": AdminBlogList
    },
    data() {
        return { dialog: false, deleteData: "" };
    },
    computed: mapGetters({
        getBreakpoint: "getBreakpoint",
        getPosts: "blog/getPosts"
    }),
    methods: {
        ...mapActions({
            deletePost: "blog/deletePost"
        }),
        openDelete(data) {
            this.deleteData = data;
            this.dialog = true;
        },
        deleteItem() {
            this.deletePost(this.deleteData);
            this.dialog = false;
        }
    }
};
</script>

