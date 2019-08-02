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
            <v-btn flat>Logout</v-btn>
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
                }
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
