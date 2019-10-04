<template>
    <form @submit.prevent="onSubmit">
        <pre>{{datos}}</pre>
        <input type="hidden" name="id" v-model="datos.id" />
        <v-container grid-list-xs v-if="datos.tipo != 'delete'">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field label="Nombre" v-model="datos.nombre"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <label>Descripcion</label>
                    <tiptap-vuetify v-model="datos.descripcion" :extensions="extensions" />
                </v-flex>
                <v-flex xs12 d-flex>
                    <v-select :items="getCategorias" v-model="datos.categoria" label="Categoria"></v-select>
                </v-flex>
                <v-flex xs12>
                    <v-img :src="datos.imageUrl" v-if="datos.imageUrl"></v-img>
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
            </v-layout>
            <v-divider></v-divider>
            <v-container grid-list-xs>
                <h6 class="title">Datos de contacto</h6>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-text-field v-model="contacto.nombre" name="Nombre" label="Nombre"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field v-model="contacto.apellido" name="Apellido" label="Apellido"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            v-model="contacto.domicilio"
                            name="Domicilio"
                            label="Domicilio"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field v-model="contacto.telefono" name="Telefono" label="Telefono"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-select :items="getCiudades" v-model="contacto.ciudad" label="Ciudad"></v-select>
                    </v-flex>
                    <v-flex xs12 class="text-xs-center">
                        <v-btn color="success" type="submit">{{this.edit ? 'Actualizar' : 'Crear'}}</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    Link,
    Blockquote,
    HardBreak,
    HorizontalRule,
    History
} from "tiptap-vuetify";

export default {
    props: {
        mascota: {
            type: Object,
            required: false,
            default() {
                return {
                    nombre: "",
                    email: "",
                    password: ""
                };
            }
        },
        categoria: {
            type: String,
            required: false,
            default: ""
        },
        close: {
            type: Function,
            required: false
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
            // previewImage: "",
            previewTitle: "",
            image: null,
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
                new Link(),
                new Blockquote(),
                new HardBreak(),
                new HorizontalRule(),
                new History()
            ]
        };
    },
    methods: {
        ...mapActions({
            createMascota: "adopciones/createMascota",
            editMascota: "adopciones/editMascota"
        }),
        onSubmit() {
            if (!this.edit) {
                this.createMascota({
                    ...this.datos,
                    contacto: this.contacto,
                    imagen: this.image
                });
            } else {
                let datos = {
                    ...this.datos,
                    contacto: this.contacto,
                    imagen: this.image,
                    deleteData: this.categoria
                };
                this.editMascota(datos);
            }
        },
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked(event) {
            const files = event.target.files;
            // let filename = files[0].name;
            // if (filename.lastIndexOf(".") <= 0) {
            //     return alert("Por favor, ingresa un archivo valido.");
            // }
            // const fileReader = new FileReader();
            // fileReader.addEventListener("load", () => {
            //     this.previewImage = fileReader.result;
            // });
            // fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        }
    },
    computed: {
        ...mapGetters({
            getCategorias: "adopciones/getCategorias",
            getCiudades: "adopciones/getCiudades"
        }),
        datos() {
            return {
                ...this.mascota
            };
        },
        contacto() {
            return {
                ...this.mascota.contacto
            };
        }
    }
};
</script>
