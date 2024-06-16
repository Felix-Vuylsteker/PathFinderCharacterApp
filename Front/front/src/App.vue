<script setup>
import { RouterView } from 'vue-router'
import NavBar from "@/components/navbar/NavBar.vue";

</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<style scoped>
.container{
  position: absolute;
  background-color: #3c2517;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("assets/homeBackground.jpg");
  background-size: 100% 100%;
}
</style>
