<template>
    <v-dialog v-model="openDialog" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Adopcion</h3>
                </div>
                <v-spacer></v-spacer>
                <v-btn flat icon color="error" @click="closeDialog">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <!-- <app-adopcion-form :closeDialog="editDialog"></app-adopcion-form> -->
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Form from "~/components/Adopciones/Form.vue";
export default {
    props: ["dialog", "closeDialog", "data"],
    components: {
        "app-adopcion-form": Form
    },
    methods: {
        openDialog() {
            return this.dialog;
        }
    }
};
</script>
