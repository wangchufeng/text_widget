<template>
    <div class='ButtonClass'>
        <h1> __Button Style__</h1>

        <v-btn class='pink white--text'>CLICK ME</v-btn>
        <v-btn depressed color='pink'>CLICK ME</v-btn>

        <v-btn class="ma-5" color="primary" dark>
            <v-icon>mdi-thumb-down</v-icon>
        </v-btn>

        <v-btn color="primary" dark>Accept
            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn class="ma-5" color="primary" small dark>Accept
            <v-icon small dark right>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn class="ma-5 pink white--text" depressed large>
            <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
            <span>Accept</span>
        </v-btn>
        <v-btn class="ma-5 pink white--text" depressed fab>
                <v-icon>home</v-icon>
            </v-btn>

            

        <a href="https://material.io/icons/?style=baseline">icon style</a>
    </div>
</template>

<script>
    export default {

    }
</script>