<template>
    <h1>Admin</h1>
</template>

<script>
import ItemList from "~/components/Adopciones/ItemList.vue";

export default {
    layout: "admin",
    components: {
        "app-item-list": ItemList
    }
};
</script>
