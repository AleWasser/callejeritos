<template>
    <v-card>
        <v-img :src="post.imageUrl" aspect-ratio="2">
            <v-layout
                row
                wrap
                align-start
                justify-end
                fill-height
                pr-3
                pt-3
                :class="{'pl-2': getBreakpoint.smAndDown}"
            ></v-layout>
        </v-img>
        <v-card-title primary-title class="pa-3">
            <h3 class="headline mb-0">{{post.titulo}}</h3>
            <v-spacer></v-spacer>
            {{post.fecha}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <p class="subheading mb-0">{{post.descripcion}}</p>
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn block color="amber darken-1" dark :to="'/blog/' + post.id">Ver mas</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["post"],
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        }
    }
};
</script>