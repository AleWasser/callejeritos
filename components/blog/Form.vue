<template>
    <form @submit.prevent="onSubmit">
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-text-field v-model="titulo" name="titulo" label="Titulo" id="titulo"></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                        v-model="descripcion"
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
                    <tiptap-vuetify v-model="contenido" :extensions="extensions" />
                </v-flex>
                <v-flex xs12 v-html="contenido"></v-flex>
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
    components: { TiptapVuetify },
    data() {
        return {
            imagen: "",
            titulo: "",
            descripcion: "",
            contenido: "",
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
            this.createPost({
                titulo: this.titulo,
                descripcion: this.descripcion,
                imagen: this.imagen,
                contenido: this.contenido
            });
        }
    }
};
</script>