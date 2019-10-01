<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >Adopciones</h1>
            <v-card>
                <v-container fluid grid-list-md :class="{'pa-0': getBreakpoint.smAndDown}">
                    <v-layout row wrap>
                        <nuxt-link tag="v-flex" to="/adopciones/perros" class="xs12 md4 pointer">
                            <v-hover>
                                <v-card slot-scope="{ hover }">
                                    <v-img src="https://i.imgur.com/g4osZZK.jpg" aspect-ratio="1">
                                        <h3
                                            v-if="getBreakpoint.smAndDown"
                                            class="display-2 font-weight-bold pl-2"
                                        >Perros</h3>
                                        <v-expand-transition v-if="getBreakpoint.mdAndUp">
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
                        <nuxt-link tag="v-flex" to="/adopciones/gatos" class="xs12 md4 pointer">
                            <v-hover>
                                <v-card slot-scope="{ hover }">
                                    <v-img
                                        src="http://onehdwallpaper.com/wp-content/uploads/2015/07/Beautiful-Cat-Full-HD-Wallpapers.jpg"
                                        aspect-ratio="1"
                                    >
                                        <h3
                                            v-if="getBreakpoint.smAndDown"
                                            class="display-2 font-weight-bold pl-2"
                                        >Gatos</h3>
                                        <v-expand-transition v-if="getBreakpoint.mdAndUp">
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
                        <nuxt-link tag="v-flex" to="/adopciones/otros" class="xs12 md4 pointer">
                            <v-hover>
                                <v-card slot-scope="{ hover }">
                                    <v-img
                                        src="https://cdn.wallpapersafari.com/65/47/E2OTot.jpg"
                                        aspect-ratio="1"
                                    >
                                        <h3
                                            v-if="getBreakpoint.smAndDown"
                                            class="display-2 font-weight-bold pl-2"
                                        >Otras mascotas</h3>
                                        <v-expand-transition v-if="getBreakpoint.mdAndUp">
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: mapGetters({
        getBreakpoint: "getBreakpoint"
    })
};
</script>


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
