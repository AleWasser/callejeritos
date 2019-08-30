<template>
    <form @submit.prevent="onSubmit">
        <pre>{{datos}}</pre>
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-text-field v-model="datos.titulo" name="titulo" label="Titulo" id="titulo"></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                        v-model="datos.descripcion"
                        name="descripcion"
                        label="Descripcion"
                        id="descripcion"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <input
                        type="file"
                        class="d-none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked"
                    />
                    <v-btn raised color="info" @click="onPickFile">Seleccionar una imagen</v-btn>
                </v-flex>
                <v-flex xs12>
                    <tiptap-vuetify v-model="datos.contenido" :extensions="extensions" />
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                    <v-btn color="success" type="submit">{{this.edit ? 'Actualizar' : 'Crear'}}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </form>
</template>

<script>
import { mapActions } from "vuex";
import {
    TiptapVuetify,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    BulletList,
    OrderedList,
    ListItem,
    Blockquote,
    HardBreak,
    HorizontalRule,
    History
} from "tiptap-vuetify";

export default {
    props: {
        post: {
            type: Object,
            required: false,
            default() {
                return {
                    imagen: "",
                    titulo: "",
                    descripcion: "",
                    contenido: ""
                };
            }
        },
        edit: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    components: { TiptapVuetify },
    data() {
        return {
            extensions: [
                new Heading({
                    levels: [1, 2]
                }),
                new Bold(),
                new Italic(),
                new Strike(),
                new Underline(),
                new BulletList(),
                new OrderedList(),
                new ListItem(),
                new Blockquote(),
                new HardBreak(),
                new HorizontalRule(),
                new History()
            ]
        };
    },
    methods: {
        ...mapActions({
            createPost: "blog/createPost",
            editPost: "blog/editPost"
        }),
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked(event) {
            const files = event.target.files;
            this.datos.imagen = files[0];
        },
        onSubmit() {
            if (this.edit) {
                this.editPost({
                    titulo: this.datos.titulo,
                    descripcion: this.datos.descripcion,
                    imagen: this.datos.imagen,
                    contenido: this.datos.contenido,
                    id: this.datos.id
                });
            } else {
                this.createPost({
                    titulo: this.datos.titulo,
                    descripcion: this.datos.descripcion,
                    imagen: this.datos.imagen,
                    contenido: this.datos.contenido
                });
            }
        }
    },
    computed: {
        datos() {
            return {
                ...this.post
            };
        }
    }
};
</script>