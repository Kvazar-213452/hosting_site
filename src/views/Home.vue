<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

let page = "home";
</script>

<template>
<Menu :receivedValue="page"></Menu>
<Footer></Footer>
</template>

<style scoped>

</style>
