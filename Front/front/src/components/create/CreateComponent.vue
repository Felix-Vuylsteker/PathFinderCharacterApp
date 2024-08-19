<script setup>
import {onMounted, ref, watch} from 'vue'
import router from "@/router/index.js";
const alignment = ref("Choose Alignment")
import {characterStore} from "@/Stores/CharacterStore.js";
const characterStoreInstance = characterStore()

const CHARACTERNAME = ref(""); // Declare ref for CHARACTERNAME
function goToAlignment(){
  router.push({
    name:'alignment',
    params:{
      item:'item'
    }
  })
}

// Watch for changes in CHARACTERNAME and update local storage
watch(CHARACTERNAME, (newValue) => {
  localStorage.setItem('CHARACTERNAME', newValue);
});

// On component mount, retrieve the CHARACTERNAME from local storage
onMounted(() => {
  const storedName = localStorage.getItem('CHARACTERNAME');
  if (storedName) {
    CHARACTERNAME.value = storedName;
  }
});
</script>

<script>

</script>

<template>
  <div class="form">
    <div class="col">
      <label for="name">CHARACTER NAME</label>
      <input v-model="CHARACTERNAME" @change="characterStoreInstance.patchCharacterName(CHARACTERNAME)">
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <label for="pronouns">PRONOUNS</label>
          <input v-model="PRONOUNS" @change="characterStoreInstance.patchPronouns(PRONOUNS)">
        </div>
        <div class="col">
          <label for="alignment">ALIGNMENT</label>
          <button @click="goToAlignment()">{{alignment}}}</button>
        </div>
      </div>
      <div class="col">
        <label for="playername">PLAYER NAME</label>
        <input v-model="PLAYERNAME" @change="characterStoreInstance.patchPlayerName(PLAYERNAME)">
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