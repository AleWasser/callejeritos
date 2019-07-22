<template>
    <v-container fluid mt-5>
        <v-layout row wrap>
            <v-flex xs12>
                <h1 class="display-4 text-xs-center my-4">Blog</h1>
                <v-card>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs12 :class="{'my-1 pa-0': $vuetify.breakpoint.smAndDown}">
                                <v-img
                                    src="http://thewallpaper.co/wp-content/uploads/2016/02/pure-black-german-shepherd-dog-wide-hd-wallpapers-for-background-cute-doggy-widescreen-1920x1080.jpg"
                                    :aspect-ratio="$vuetify.breakpoint.smAndDown ? 2 : 3"
                                >
                                    <v-layout
                                        row
                                        wrap
                                        align-center
                                        justify-start
                                        fill-height
                                        :class="{'pl-2': $vuetify.breakpoint.smAndDown, 'pl-5': $vuetify.breakpoint.mdAndUp}"
                                    >
                                        <v-flex xs12 class="white--text">
                                            <h3
                                                class="font-weight-bold"
                                                :class="{'title': $vuetify.breakpoint.smAndDown, 'display-2 ': $vuetify.breakpoint.mdAndUp}"
                                            >Entrada principal de prueba</h3>
                                            <p class="subheading mb-0">Texto de entrada de prueba</p>
                                            <v-btn round small color="amber darken-1" dark>Ver mas</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-img>
                            </v-flex>
                            <v-flex xs12 md6 :class="{'my-1 pa-0': $vuetify.breakpoint.smAndDown}">
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
                                        :class="{'pl-2': $vuetify.breakpoint.smAndDown}"
                                    >
                                        <v-flex xs12 md6 class="white--text text-md-right">
                                            <h6
                                                class="title font-weight-bold"
                                            >Entrada secundaria de prueba</h6>
                                            <p class="subheading mb-0">Texto de entrada de prueba</p>
                                            <v-btn round small color="amber darken-1" dark>Ver mas</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-img>
                            </v-flex>
                            <v-flex xs12 md6 :class="{'my-1 pa-0': $vuetify.breakpoint.smAndDown}">
                                <v-img
                                    src="http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-full-hd-1920-1080-widescreen-awesome/wallpaper-photoshopped-cat-1920-x-1080-full-hd.jpg"
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
                                        :class="{'pl-2': $vuetify.breakpoint.smAndDown}"
                                    >
                                        <v-flex xs12 md6 class="white--text text-md-right">
                                            <h6
                                                class="title font-weight-bold"
                                            >Entrada secundaria de prueba</h6>
                                            <p class="subheading mb-0">Texto de entrada de prueba</p>
                                            <v-btn round small color="amber darken-1" dark>Ver mas</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-img>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
//TODO Efectos: Al hacer mouseover opacar la imagen y agrandar el titulo
export default {
    data() {
        return {
            breakpoint: {}
        };
    },
    created() {
        this.breakpoint = this.$vuetify.breakpoint;
    }
};
</script>
