<template>
    <form @submit.prevent="onSubmit">
        <pre>{{post}}</pre>
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-text-field v-model="post.titulo" name="titulo" label="Titulo" id="titulo"></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                        v-model="post.descripcion"
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
                    <tiptap-vuetify v-model="post.contenido" :extensions="extensions" />
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                    <v-btn color="success" type="submit">Crear</v-btn>
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
            createPost: "blog/createPost"
        }),
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked(event) {
            const files = event.target.files;
            this.imagen = files[0];
        },
        onSubmit() {
            if (this.edit) {
                console.log("edit");
            } else {
                this.createPost({
                    titulo: this.post.titulo,
                    descripcion: this.post.descripcion,
                    imagen: this.post.imagen,
                    contenido: this.post.contenido
                });
            }
        }
    }
};
</script>