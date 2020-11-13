<template>
<div class="gradient">
    <div class="content">
        <div class="error-text">
            <h1>404</h1>
            <v-btn depressed color="#870000">
                <router-link to="/">GET ME OUT OF HERE!</router-link>
            </v-btn>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NotFound",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.gradient {
    background-image: linear-gradient(135deg, #000000 35%, #bb0000 100%);
    color: white;

    .content {
        margin: auto;
        width: 50%;
        padding: 10px;

        .error-text {
            text-align: center;
            justify-content: center;
            margin-top: 33%;
            margin-bottom: 33%;

            div {
                margin: auto;
            }

            a {
                text-decoration: none;
                color: #000000;
            }

            h1 {
                font-size: 4em;
            }
        }
    }
}
</style>
