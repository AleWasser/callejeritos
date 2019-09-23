<template>
    <div class="text-xs-center">
        <v-bottom-sheet :value="sheet" @input="closeSheet">
            <v-list>
                <v-subheader>Compartir en</v-subheader>
                <v-list-tile
                    v-for="tile in tiles"
                    :key="tile.title"
                    @click
                    :href="tile.link"
                    :data-action="tile.action"
                    target="_blanck"
                >
                    <v-list-tile-avatar>
                        <v-avatar size="32px" tile>
                            <img :src="`/imagenes/iconos/${tile.img}`" :alt="tile.title" />
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
    props: ["sheet", "closeSheet", "url"],
    data() {
        return {
            tiles: [
                {
                    img: "facebook.png",
                    title: "Facebook",
                    link: `https://www.facebook.com/sharer/sharer.php?u=${process
                        .env.baseUrl +
                        "/blog/" +
                        this.url.id}`
                },
                {
                    img: "twitter.png",
                    title: "Twitter",
                    link: `https://twitter.com/intent/tweet?text=Callejeritos Almirante Brown ${process
                        .env.baseUrl +
                        "/blog/" +
                        this.url.id}`
                },
                {
                    img: "whatsapp.png",
                    title: "WhatsApp",
                    link: `whatsapp://send?text=Callejeritos Almirante Brown`,
                    action: "share/whatsapp/share"
                }
            ]
        };
    }
};
</script>