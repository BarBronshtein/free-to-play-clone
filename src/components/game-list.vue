<template>
  <section class="game-list">
    <div v-for="game in games" :key="game.id">
      <game-preview :game="game" @selectGame="$emit('selectGame',$event)" />
    </div>
  </section>
</template>

<script lang="ts">
import gamePreview from './game-preview.vue';
export default {
  name: 'game-list',
  data() {
    return {};
  },
  components: { gamePreview },
  props: ['games'],

};
</script>

<style lang="scss" scoped>

</style>