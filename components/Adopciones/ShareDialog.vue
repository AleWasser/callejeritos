<template>
    <div class="text-xs-center">
        <v-bottom-sheet :value="sheet" @input="closeSheet">
            <v-list>
                <v-subheader>Compartir en</v-subheader>
                <v-list-tile v-for="tile in tiles" :key="tile.title" @click>
                    <v-list-tile-avatar>
                        <v-avatar size="32px" tile>
                            <img
                                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                :alt="tile.title"
                            />
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    props: ["sheet", "closeSheet"],
    data() {
        return {
            tiles: [
                { img: "keep.png", title: "Keep" },
                { img: "inbox.png", title: "Inbox" },
                { img: "messenger.png", title: "Messenger" },
                { img: "google.png", title: "Google+" }
            ]
        };
    }
};
</script>