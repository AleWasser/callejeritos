<template>
    <v-hover>
        <v-card slot-scope="{ hover }">
            <v-img :src="post.imageUrl" aspect-ratio="1">
                <v-expand-transition v-if="getBreakpoint.mdAndUp">
                    <div
                        v-if="hover"
                        class="text-xs-center transition-fast-in-fast-out v-card--reveal grey darken-4 display-3"
                    >
                        <v-btn fab icon color="info" :to="'/blog/' + post.id">
                            <v-icon>visibility</v-icon>
                        </v-btn>
                        <v-btn fab icon color="primary" :to="'/admin/blog/edit/' + post.id">
                            <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn fab icon color="error" @click="openModal(post)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </div>
                </v-expand-transition>
            </v-img>
        </v-card>
    </v-hover>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    props: ["post", "openDelete"],
    computed: mapGetters({
        getBreakpoint: "getBreakpoint"
    }),
    methods: {
        openModal(post) {
            this.openDelete(post);
        }
    }
};
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
}
.pointer {
    cursor: pointer;
}
</style>