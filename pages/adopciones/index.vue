<template>
    <v-container fluid :class="{'mt-3':getBreakpoint.smAndDown, 'mt-5': getBreakpoint.mdAndUp}">
        <v-layout row wrap>
            <v-flex xs12>
                <h1
                    class="text-xs-center my-4"
                    :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
                >Adopciones</h1>
                <v-card>
                    <v-container fluid grid-list-md :class="{'pa-0': getBreakpoint.smAndDown}">
                        <v-layout row wrap>
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
                                <v-hover>
                                    <v-card slot-scope="{ hover }">
                                        <v-img
                                            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F256905-animals-dog-puppies.jpg&f=1"
                                            aspect-ratio="1"
                                        >
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
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
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
                            <nuxt-link tag="v-flex" to="#" class="xs12 md4 pointer">
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
                            <v-flex xs12 mt-3>
                                <h3
                                    class="display-1"
                                >Mascotas en adopcion: {{getCount.perros + getCount.gatos}}</h3>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: mapGetters({
        getCount: "adopciones/getCount",
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
