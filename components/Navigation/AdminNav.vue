<template>
    <v-navigation-drawer v-model="drawer" dark fixed>
        <v-list class="pa-1">
            <v-list-tile avatar tag="div">
                <v-list-tile-content>
                    <v-list-tile-title>Callejeritos</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0">
            <v-divider light></v-divider>
            <nuxt-link
                tag="v-list-tile"
                v-for="item in items"
                :key="item.title"
                :to="item.link"
                @click
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </nuxt-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            mini: false,
            items: [
                { icon: "home", title: "Home", link: "/" },
                { icon: "feedback", title: "Blog", link: "/blog" },
                { icon: "favorite", title: "Adopciones", link: "/adopciones" }
            ]
        };
    },
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        }
    }
};
</script>
