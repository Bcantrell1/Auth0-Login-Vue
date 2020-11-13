<template>
<v-app id="inspire">
    <v-navigation-drawer :width="125" v-model="drawer" app>
        <v-list dense nav>
            <div v-if="isLoggedIn">
                <v-list-item v-for="item in loggedInItems" :key="item.title" :to="item.route" @click="actionClick(item.action)" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div v-else>
                <v-list-item v-for="item in loggedOutItems" :key="item.title" :to="item.route" @click="actionClick(item.action)" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
        <router-view />
    </v-main>
    <v-footer app>
        <!-- -->
    </v-footer>
</v-app>
</template>

<script>
import Vuex from 'vuex';
import {
    logOutUser,
    isLogged
} from './utils/auth';
export default {
    name: 'App',
    methods: {
        logOut() {
            this.isLogged = false;
            this.$store.dispatch("logout");
            logOutUser();
            if (this.$router.history.current.path === '/') {
                this.$forceUpdate();
            } else {
                this.$router.push('/');
            }

        },
        actionClick(action) {
            if (action === "logOut") {
                this.logOut();
            }
        }
    },
    computed: {
        ...Vuex.mapGetters(["isLoggedIn"])
    },
    data: () => ({
        drawer: null,
        loggedInItems: [{

                title: 'Home',
                icon: 'mdi-image',
                route: '/',
            },
            {
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                route: '/dashboard',
            },
            {
                title: 'About',
                icon: 'mdi-help-box',
                route: '/about',
            },
            {
                title: 'Log Out',
                icon: 'mdi-help-box',
                route: '/',
                action: 'logOut'
            }
        ],
        loggedOutItems: [{

                title: 'Home',
                icon: 'mdi-image',
                route: '/',
            },
            {
                title: 'About',
                icon: 'mdi-help-box',
                route: '/about',
            },
        ],
    })
};
</script>

<style lang="scss">
img {
    width: 20%;
    margin-top: 10px;
}
</style>
