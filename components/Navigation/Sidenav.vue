<template>
    <nav>
        <v-toolbar dense flat fixed light color="transparent">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" :mini-variant="mini" dark temporary app>
            <v-list class="pa-1">
                <v-list-tile v-if="mini" @click.stop="mini = !mini">
                    <v-list-tile-action>
                        <v-icon>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar tag="div">
                    <v-list-tile-content>
                        <v-list-tile-title>Callejeritos Almirante Brown</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
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
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            mini: false,
            items: [
                { icon: "home", title: "Home", link: "/" },
                { icon: "feedback", title: "Blog", link: "/blog" }
            ]
        };
    }
};
</script>
