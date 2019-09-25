<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h1
                class="text-xs-center my-4"
                :class="{'display-2': getBreakpoint.smAndDown, 'display-4':getBreakpoint.mdAndUp}"
            >Donaciones</h1>
            <v-card>
                <v-container fluid grid-list-md text-xs-center>
                    <v-layout row wrap>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <h3 class="display-1">MercadoPago</h3>
                        </v-flex>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <v-btn
                                color="primary"
                                href="https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=4fc5f3860bf34947ababdf3a978d7c23"
                                target="_blanck"
                            >Subscribirse</v-btn>
                            <v-btn
                                color="primary"
                                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=214223563-8b4ed523-df66-4451-9acb-146d432ef03d"
                                target="_blanck"
                            >Donar $100</v-btn>
                        </v-flex>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci rem aperiam, autem expedita reprehenderit similique nam quam, iste iure commodi? Animi, ipsam. Quidem repellendus molestias architecto esse obcaecati ipsa!</p>
                        </v-flex>
                        <v-flex xs12 :class="{'my-1 pa-0': getBreakpoint.smAndDown}">
                            <p>
                                Tenes dudas?
                                <nuxt-link to="#">contactanos</nuxt-link>
                            </p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters({
        getBreakpoint: "getBreakpoint"
    })
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>