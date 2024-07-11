<script setup>
import {ref} from 'vue'
import router from "@/router/index.js";
const alignment = ref("Choose Alignment")
function goToAlignment(){
  router.push({
    name:'alignment',
    params:{
      item:'item'
    }
  })
}
</script>

<template>
  <div class="form">
    <div class="col">
      <label for="name">CHARACTER NAME</label>
      <input v-model="CHARACTERNAME">
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <label for="pronouns">PRONOUNS</label>
          <input v-model="PRONOUNS">
        </div>
        <div class="col">
          <label for="alignment">ALIGNMENT</label>
          <button @click="goToAlignment()">{{alignment}}}</button>
        </div>
      </div>
      <div class="col">
        <label for="playername">PLAYER NAME</label>
        <input v-model="PLAYERNAME">
      </div>
    </div>
    <button @click="console.log(CHARACTERNAME,PRONOUNS,ALIGNMENT,PLAYERNAME)">PRINT</button>
  </div>
</template>

<style scoped>
.form{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  display: flex;
  background-color: rgba(0,0,0,50%);
  width: 50%;
  color: #FFEEBD;
}

.col{
  display: grid;
}
.row{
  display: flex;
}
</style>