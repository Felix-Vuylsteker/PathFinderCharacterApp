<script setup>
import {characterStore} from "@/Stores/CharacterStore.js";
const characterStoreInstance = characterStore()
defineProps({
  item:String
})
</script>

<template>
  <div>
    <p>{{$props.item}}</p>
    <div class="alignment">
      <div class="row">
        <div @click="characterStoreInstance.patchAlignment('Lawful Good')">
            <p>Lawful Good</p>
            <p>croisé</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('Neutral Good')">
            <p>Neutral Good</p>
            <p>bienfaiteur</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('Chaotic Good')">
          <p>Chaotic Good</p>
          <p>rebelles</p>
        </div>
      </div>
      <div class="row">
        <div @click="characterStoreInstance.patchAlignment('Lawful Neutral')">
          <p>Lawful Neutral</p>
          <p>juge</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('True Neutral')">
          <p>True Neutral</p>
          <p>indécis</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('Chaotic Neutral')">
          <p>Chaotic Neutral</p>
          <p>esprit libre</p>
        </div>
      </div>
      <div class="row">
        <div @click="characterStoreInstance.patchAlignment('Lawful Evil')">
          <p>
            Lawful Evil
          </p>
          <p>dominateur</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('Neutral Evil')">
          <p>
            Neutral Evil
          </p>
          <p>malfaisant</p>
        </div>
        <div @click="characterStoreInstance.patchAlignment('Chaotic Evil')">
          <p>Chaotic Evil</p>
          <p>destructeur</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alignment{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  display: grid;
  background-color: rgba(0,0,0,50%);
  color: #FFEEBD;
}
.row{
  display: flex;
}
div{
  padding: 5%;
}
</style>