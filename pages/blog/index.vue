<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >Blog</h1>
            <v-card>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <v-carousel>
                                <v-carousel-item v-for="(color, i) in colors" :key="color">
                                    <v-sheet :color="color" height="100%" tile>
                                        <v-layout align-center justify-center row fill-height>
                                            <div class="display-3">Slide {{ i + 1 }}</div>
                                        </v-layout>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </v-flex>
                        <v-flex xs12 md6 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <app-blog-list></app-blog-list>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import BlogList from "~/components/blog/BlogList.vue";
//TODO Efectos: Al hacer mouseover opacar la imagen y agrandar el titulo
export default {
    components: {
        "app-blog-list": BlogList
    },
    data() {
        return {
            colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
        };
    },
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        }
    }
};
</script>
