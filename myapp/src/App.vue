<template>
  <v-app>
    <!-- <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar> -->

    <v-content>
      <ToolBars />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  // import ColorAndText from './components/ColorAndText'
  // import ButtonAndIcons from './components/ButtonAndIcons'
  // import BreakPoint_Visibility from './components/BreakPoint_Visibility'
  import ToolBars from './components/ToolBars'


  export default {
    name: 'App',
    components: {
      // HelloWorld,
      // ColorAndText,
      // ButtonAndIcons,
      // BreakPoint_Visibility,
      ToolBars,
    },
    data() {
      return {

      }
    }
  };
</script>