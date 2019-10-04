<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-card-title primary-title>
                    <h3 class="display-1">Dashboard</h3>
                </v-card-title>
                <v-container grid-list-md>
                    <v-layout row wrap class="justify-center">
                        <v-flex xs3 v-for="(item,index) in items" :key="index">
                            <nuxt-link
                                tag="v-card"
                                :to="item.link"
                                class="text-xs-center pa-2 link"
                            >
                                <v-icon x-large>{{item.icon}}</v-icon>
                                <v-card-text>
                                    <h5 class="headline">{{item.title}}</h5>
                                </v-card-text>
                            </nuxt-link>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            items: [
                {
                    icon: "table_chart",
                    title: "Adopciones",
                    link: "/admin/adopciones"
                },
                {
                    icon: "chrome_reader_mode",
                    title: "Blog",
                    link: "/admin/blog"
                },
                {
                    icon: "account_box",
                    title: "Usuarios",
                    link: "/admin/usuarios"
                },
                {
                    icon: "accessibility",
                    title: "Mi perfil",
                    link: "/admin/perfil/"
                },
                {
                    icon: "home",
                    title: "Volver al sitio",
                    link: "/"
                }
            ]
        };
    }
};
</script>

<style scoped>
.link {
    cursor: pointer;
}
</style>