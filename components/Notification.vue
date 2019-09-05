<template>
    <v-snackbar
        v-model="snackbar"
        right
        top
        :color="notification.color"
        v-if="notification"
        :timeout="notification.time"
    >
        {{notification.text}}
        <v-btn flat color="primary" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            snackbar: false
        };
    },
    computed: {
        notification() {
            let notificaciones = { ...this.$store.getters.getNotification };
            if (Object.keys(notificaciones).length > 0) {
                this.snackbar = true;
                return notificaciones;
            }
        }
    }
};
</script>