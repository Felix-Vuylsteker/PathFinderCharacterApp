<script>
</script>

<template>
  <div class="homeContent">
    <RouterLink to="/Create" custom v-slot="{ navigate }" >
      <button @click="navigate" role="button">Créer un Personnage</button>
    </RouterLink>
    <button>Charger un Personnage</button>
  </div>
</template>

<style scoped>
.homeContent{
  position: absolute;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 5%;
}
button{
  margin: 5%;
  padding: 5%;
  font-size: 30px;
  background-color: rgba(255,255,255,15%);
  color: #FFEEBD;
  border-radius: 12px;
  border-color: #FFEEBD;
}
</style>