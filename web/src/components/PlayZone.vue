<template>
    <div class="playzone"><GameMap /></div>
</template>

<script>
import GameMap from "./GameMap.vue";

export default {
    components: {
    GameMap,
},
setup() {

  },
}
</script>

<style scoped>
div.playzone {
    width: 80vw;
    height: 80vh;
    margin:75px auto;
}

</style>