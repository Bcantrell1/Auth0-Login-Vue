<template>
<div>
    <h1>Loading...</h1>
    <v-text-field color="error" loading disabled></v-text-field>
</div>
</template>

<script>
import {
    handleAuth,
} from '../utils/auth';

export default {
    name: 'Callback',
    beforeMount() {
        handleAuth((error) => {
            if (error) {
                this.$router.push('/');
                return;
            }
            console.log('logged in');
            this.$store.dispatch("login");
            this.$router.push('/dashboard');
        });
    },
};
</script>
