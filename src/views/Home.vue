<template>
<div class="home">
    <h1>This is a home page</h1>
    <div>
        <div v-if="!isLogged">
            <small>Not Loged In?</small><br /><button type="button" @click="loginClick()">
                Login
            </button>
        </div>
        <div v-else>
            <small>You are logged In</small>
            <button @click="logOut()">LogOut</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    login,
    isLogged,
    logOutUser,
} from '../utils/auth';

export default {
    name: 'Home',
    components: {},
    methods: {
        loginClick() {
            login();
        },
        logOut() {
            this.isLogged = false;
            logOutUser();
        },
    },
    data: () => ({
        isLogged: isLogged(),
    }),
};
</script>
