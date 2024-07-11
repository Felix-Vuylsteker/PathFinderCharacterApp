<script setup>
defineProps({
  item:String
})
</script>

<template>
  <div>
    <p>{{$props.item}}</p>
    <div class="alignment">
      <div class="row">
        <div>
            <p>Lawful Good</p>
            <p>croisé</p>
        </div>
        <div>
            <p>Neutral Good</p>
            <p>bienfaiteur</p>
        </div>
        <div>
          <p>Chaotic Good</p>
          <p>rebelles</p>
        </div>
      </div>
      <div class="row">
        <div>
          <p>Lawful Neutral</p>
          <p>juge</p>
        </div>
        <div>
          <p>True Neutral</p>
          <p>indécis</p>
        </div>
        <div>
          <p>Chaotic Neutral</p>
          <p>esprit libre</p>
        </div>
      </div>
      <div class="row">
        <div>
          <p>
            Lawful Evil
          </p>
          <p>dominateur</p>
        </div>
        <div>
          <p>
            Neutral Evil
          </p>
          <p>malfaisant</p>
        </div>
        <div>
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