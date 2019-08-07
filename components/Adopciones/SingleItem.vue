<template>
    <v-card>
        <v-img :src="mascota.imageUrl || '/imagenes/default.jpg'" aspect-ratio="3"></v-img>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{mascota.nombre}}</h3>
                <div>description</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn color="red darken-1" dark block large>
                <v-icon class="mr-2">favorite</v-icon>Adoptar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["mascota"]
};
</script>

