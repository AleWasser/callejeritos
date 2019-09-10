<template>
    <v-toolbar color="primary" app dense>
        <v-toolbar-items>
            <v-btn flat v-for="(item,index) in items" :key="index" :to="item.link">
                <v-icon class="mr-2">{{item.icon}}</v-icon>
                {{item.title}}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat @click="onClick">Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            mini: false,
            items: [
                {
                    icon: "dashboard",
                    title: "Dashboard",
                    link: "/admin/dashboard"
                },
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
                    link: "/admin/usuarios/"
                }
            ]
        };
    },
    computed: {
        getBreakpoint() {
            return this.$store.getters.getBreakpoint;
        },
        getUser() {
            return this.$store.getters.getUserData;
        }
    },
    methods: {
        onClick() {
            this.$store.dispatch("logout");
        }
    }
};
</script>
