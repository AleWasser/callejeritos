<template>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1>
            <v-text-field name="nombre" label="Nombre" id="nombre" :value="nombre"></v-text-field>
        </v-flex>
        <v-flex xs10 offset-xs1>
            <v-text-field name="email" label="Email" id="email" :value="email"></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ["nombre", "email"]
};
</script>