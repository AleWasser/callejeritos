<template>
    <v-dialog
        v-model="dialog"
        persistent
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
        <v-card>
            <v-card-title primary-title>
                <h3 class="headline mb-0">Datos de contacto</h3>
                <v-spacer></v-spacer>
                <v-icon @click="closeDialog" color="error">close</v-icon>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-container grid-list-xs>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field :value="contacto.nombre" label="Nombre" outline readonly></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                                :value="contacto.apellido"
                                label="Apellido"
                                outline
                                readonly
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                                :value="contacto.telefono"
                                label="Telefono"
                                outline
                                readonly
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                                :value="contacto.domicilio"
                                label="Domicilio"
                                outline
                                readonly
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn color="primary" @click="closeDialog">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["dialog", "closeDialog", "contacto"]
};
</script>