<template>
    <div class='ToolBars'>
        <h1>__ToolBars__</h1>
        <nav>
            <v-toolbar dense>
                <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer">
                </v-app-bar-nav-icon>

                <v-toolbar-title class="text--uppercase grey--text">
                    <span>Title</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text color="grey" v-on="on">
                            <span>Menu</span>
                            <v-icon>expand_more</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer app v-model="drawer" class="primary">
                <!-- <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title white--text">
                            Application
                        </v-list-item-title>
                        <v-list-item-subtitle class="white--text">
                            subtext
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item> -->

                <v-col>
                    <v-row justify="center" class="mt-5">
                        <v-avatar size="100">
                            <img src="/avatar-1.png">
                        </v-avatar>
                    </v-row>
                    <v-row justify="center" class="mt-2">
                        <p class="white--text">The Net Ninja</p>
                    </v-row>
                    <v-row justify="center">
                            <popus/>
                    </v-row>

                </v-col>

                <v-divider></v-divider>

                <v-list dense nav>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <!-- <router-link :to="{ name: 'dashboard' }"> </router-link> -->

                        <v-list-item-icon>
                            <v-icon class="white--text mx-3">{{link.icon}}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                                <!-- {{link.text}} -->
                                {{link.text}}
                            </v-list-item-title>
                        </v-list-item-content>


                    </v-list-item>
                </v-list>

            </v-navigation-drawer>

        </nav>
        <a href="https://vuetifyjs.com/en/components/toolbars#toolbars">ToolBars</a>
    </div>
</template>

<script>
import popus from "./Popup"
    export default {
        components:{popus},
        data() {
            return {
                drawer: false,
                right: null,
                links: [{
                        icon: 'dashboard',
                        text: 'Dashboard',
                        route: '/'
                    },
                    {
                        icon: 'folder',
                        text: 'My Projects',
                        route: '/projects'
                    },
                    {
                        icon: 'person',
                        text: 'Team',
                        route: '/team'
                    },
                ],
            }
        }
    }
</script>