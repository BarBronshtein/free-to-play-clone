<template>
  <article @click="onSelectGame" class="game-preview">
    <img :src="game.imgUrl" />
    <div class="sub-title title">{{game.title.length> 18 ? game.title.slice(0,18)+'...':game.title}}</div>
    <div class="sub-title date">{{game.releaseDate}}</div>
    <div class="overlay"></div>
    <div class="genre">{{game.genre}}</div>
  </article>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Game } from '@/models/game.model';
export default defineComponent({
  name: 'game-preview',
  data() {
    return {};
  },
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true
    }
  },
  methods: {
    onSelectGame() {
      this.$emit("selectGame", this.game.id);
    }
  },
});
</script>

<style lang="scss" scoped>

</style>
