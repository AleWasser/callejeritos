<template>
    <v-container fluid pa-0>
        <v-img src="https://cdn.wallpapersafari.com/23/39/Wy2uph.jpg"></v-img>
        <v-layout
            row
            wrap
            :class="{'px-0': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
            align-start
            elevation-24
            style="margin-top: -205px;"
        >
            <v-flex xs12>
                <v-card class="px-5 mx-auto">
                    <v-card-title primary-title class="align-center justify-center">
                        <div>
                            <h3 class="display-2 text-xs-center">Hablemos de Callejeritos</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <p
                            class="subheading text-md-center"
                        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum minima illo sunt. Fugit, nobis praesentium incidunt aperiam officiis ratione exercitationem, dolorum commodi quo aut pariatur laboriosam, provident sunt consequatur. Debitis?Inventore tempora reprehenderit nam excepturi praesentium error voluptas a facere asperiores eligendi. Quas nobis accusantium eos itaque porro voluptate rerum, quia ab exercitationem cum omnis non, ducimus perferendis, iusto blanditiis.</p>
                    </v-card-text>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex xs12 md4 class="text-xs-center">
                                <v-icon size="65" class="mb-2">pets</v-icon>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit quod id. Optio sint, earum quaerat laboriosam ab amet hic nesciunt, facilis exercitationem qui iusto ipsa impedit blanditiis cum reprehenderit?</p>
                            </v-flex>
                            <v-flex xs12 md4 class="text-xs-center">
                                <v-icon size="65" class="mb-2">pets</v-icon>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit quod id. Optio sint, earum quaerat laboriosam ab amet hic nesciunt, facilis exercitationem qui iusto ipsa impedit blanditiis cum reprehenderit?</p>
                            </v-flex>
                            <v-flex xs12 md4 class="text-xs-center">
                                <v-icon size="65" class="mb-2">pets</v-icon>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit quod id. Optio sint, earum quaerat laboriosam ab amet hic nesciunt, facilis exercitationem qui iusto ipsa impedit blanditiis cum reprehenderit?</p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-divider></v-divider>

                    <v-card-title primary-title class="align-center justify-center">
                        <div>
                            <h3 class="display-1">Contactanos</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <p
                            class="subheading text-xs-center"
                        >Envianos un mail. Contestaremos a la brevedad.</p>
                    </v-card-text>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex xs12 md6>
                                <v-text-field label="Nombre"></v-text-field>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field label="Email"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-textarea name label="Mensaje"></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-card-actions class="align-center justify-center">
                            <v-btn color="primary">Enviar</v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

