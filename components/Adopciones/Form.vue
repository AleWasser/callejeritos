<template>
    <form @submit.prevent="onSubmit">
        <input type="hidden" name="id" v-model="datos.id" />
        <v-container grid-list-xs v-if="datos.tipo != 'delete'">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field label="Nombre" v-model="datos.nombre"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-img :src="imageUrl"></v-img>
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
                <v-flex xs12 d-flex>
                    <v-select :items="getCategorias" v-model="datos.categoria" label="Categoria"></v-select>
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
        <v-card-actions class="justify-center">
            <v-btn color="success" type="submit" @click="close" v-if="datos.tipo != 'delete'">Enviar</v-btn>
            <v-btn color="error" type="submit" @click="close" v-else>Eliminar</v-btn>
        </v-card-actions>
    </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
    data() {
        return {
            imageUrl: "",
            image: null
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
                this.createMascota({ ...this.datos, imagen: this.image });
            } else if (this.datos.tipo == "edit") {
                let datos = { ...this.datos, deleteData: this.categoria };
                this.editMascota(datos);
            } else {
                this.deleteMascota(this.datos);
            }
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
                this.imageUrl = fileReader.result;
            });
            fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        }
    },
    computed: {
        ...mapGetters({
            getCategorias: "adopciones/getCategorias"
        }),
        datos() {
            return this.datosAdopcion;
        }
    }
};
</script>
