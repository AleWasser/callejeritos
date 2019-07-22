<template>
    <v-app>
        <v-toolbar dense flat fixed dark color="transparent">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Callejeritos Almirante Brown</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute dark temporary app>
            <v-list class="pa-1">
                <v-list-tile v-if="mini" @click.stop="mini = !mini">
                    <v-list-tile-action>
                        <v-icon>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar tag="div">
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>

            <!-- <v-list class="pt-0" dense>
                <v-divider light></v-divider>

                <v-list-tile v-for="item in items" :key="item.title" @click>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>-->
        </v-navigation-drawer>
        <nuxt />
        <v-footer>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            mini: false
        };
    }
};
</script>
