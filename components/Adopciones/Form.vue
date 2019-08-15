<template>
    <form @submit.prevent="onSubmit">
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
                    <v-img
                        :src="previewImage ? previewImage : datos.imageUrl "
                        v-if="datos.imageUrl"
                    ></v-img>
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
        </v-container>
        <v-container grid-list-xs v-else>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center">
                    <p class="subheading font-weight-medium">¿Esta seguro de eliminar esta mascota?</p>
                </v-flex>
            </v-layout>
        </v-container>
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
                    <v-text-field v-model="contacto.domicilio" name="Domicilio" label="Domicilio"></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-text-field v-model="contacto.telefono" name="Telefono" label="Telefono"></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>

        <v-card-actions class="justify-center">
            <v-btn
                color="success"
                type="submit"
                @click="closeHandler"
                v-if="datos.tipo != 'delete'"
            >Enviar</v-btn>
            <v-btn color="error" type="submit" @click="closeHandler" v-else>Eliminar</v-btn>
        </v-card-actions>
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
        datosAdopcion: {
            type: Object,
            required: false
        },
        categoria: {
            type: String,
            required: false,
            default: ""
        },
        close: {
            type: Function,
            required: false
        }
    },
    components: { TiptapVuetify },
    data() {
        return {
            previewImage: "",
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
            editMascota: "adopciones/editMascota",
            deleteMascota: "adopciones/deleteMascota"
        }),
        onSubmit() {
            if (this.datos.tipo == "create") {
                delete this.datos.tipo;
                this.createMascota({
                    ...this.datos,
                    contacto: this.contacto,
                    imagen: this.image
                });
            } else if (this.datos.tipo == "edit") {
                delete this.datos.tipo;
                let datos = {
                    ...this.datos,
                    contacto: this.contacto,
                    imagen: this.image,
                    deleteData: this.categoria
                };
                this.editMascota(datos);
            } else {
                delete this.datos.tipo;
                this.deleteMascota(this.datos);
            }
            this.resetDatos;
        },
        closeHandler() {
            this.close();
            this.resetDatos();
        },
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked(event) {
            const files = event.target.files;
            let filename = files[0].name;
            if (filename.lastIndexOf(".") <= 0) {
                return alert("Por favor, ingresa un archivo valido.");
            }
            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.previewImage = fileReader.result;
            });
            fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        },
        resetDatos() {
            delete this.datos;
        }
    },
    computed: {
        ...mapGetters({
            getCategorias: "adopciones/getCategorias"
        }),
        datos() {
            return {
                ...this.datosAdopcion.data,
                tipo: this.datosAdopcion.tipo
            };
        },
        contacto() {
            if (this.datosAdopcion.data) {
                return {
                    ...this.datosAdopcion.data.contacto
                };
            }
            return {};
        }
    }
};
</script>
