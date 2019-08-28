<template>
    <v-img
        src="http://www.10wallpaper.com/wallpaper/1920x1080/1209/Lovely_Dogs-dog_photo_wallpaper_1920x1080.jpg"
        aspect-ratio="2"
    >
        <v-layout
            row
            wrap
            align-start
            justify-end
            fill-height
            pr-3
            pt-3
            :class="{'pl-2': getBreakpoint.smAndDown}"
        >
            <v-flex xs12 md6 class="white--text text-md-right">
                <h6 class="title font-weight-bold">Entrada secundaria de prueba</h6>
                <p class="subheading mb-0">Texto de entrada de prueba</p>
                <v-btn round small color="amber darken-1" dark>Ver mas</v-btn>
            </v-flex>
        </v-layout>
    </v-img>
</template>

<script>
export default {
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        }
    }
};
</script>