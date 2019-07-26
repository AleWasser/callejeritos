<template>
    <v-container fluid mt-5>
        <v-layout>
            <v-flex xs12>
                <v-card height="500">
                    <v-container grid-list-md>
                        <v-layout row wrap my-4>
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
                                <v-hover>
                                    <v-card slot-scope="{ hover }">
                                        <v-img
                                            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F256905-animals-dog-puppies.jpg&f=1"
                                            aspect-ratio="1"
                                        >
                                            <v-expand-transition>
                                                <div
                                                    v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 white--text"
                                                    style="height: 100%;"
                                                >Perros</div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </nuxt-link>
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
                                <v-hover>
                                    <v-card slot-scope="{ hover }">
                                        <v-img
                                            src="http://onehdwallpaper.com/wp-content/uploads/2015/07/Beautiful-Cat-Full-HD-Wallpapers.jpg"
                                            aspect-ratio="1"
                                        >
                                            <v-expand-transition>
                                                <div
                                                    v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 white--text"
                                                    style="height: 100%;"
                                                >Gatos</div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </nuxt-link>
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
                                <v-hover>
                                    <v-card slot-scope="{ hover }">
                                        <v-img
                                            src="https://cdn.wallpapersafari.com/65/47/E2OTot.jpg"
                                            aspect-ratio="1"
                                        >
                                            <v-expand-transition>
                                                <div
                                                    v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 white--text"
                                                    style="height: 100%;"
                                                >Otras mascotas</div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </nuxt-link>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.8;
    position: absolute;
    width: 100%;
}
.pointer {
    cursor: pointer;
}
</style>
