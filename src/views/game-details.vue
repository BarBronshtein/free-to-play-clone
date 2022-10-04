<template>
  <main class="game-details">
    <div class="col left-col flex column">
      <img :src="src" alt="loading..." />
      <a class="game-link" :href="game?.gameUrl">Play now</a>
      <div class="date">
        {{game?.releaseDate}}</div>
    </div>
    <div class="col right-col flex column">
      <div class="title">{{game.title}}</div>
      <span class="detail">{{game.publisher}}</span>
      <p>{{game.description}}</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      srcs: [],
      counter: 0,
      curSrc: null as unknown as string,
      intervalId: null as unknown as number,
    };
  },
  async created() {
    try {
      const { id } = this.$route.params;
      await this.$store.dispatch({ type: "loadGame", id });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    displayScreenshots() {
      this.intervalId = setInterval(() => {
        if (this.counter > this.srcs.length - 1) this.counter = 0;
        this.curSrc = this.srcs[this.counter];
        this.counter++;
      }, 3000);
    },
  },
  computed: {
    game() {
      return this.$store.getters.game;
    },
    src() {
      return this.curSrc
    }
  },
  mounted() {
    this.srcs = this.game.screenshots || [];
    this.displayScreenshots();
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
});
</script>

<style lang="scss" scoped>

</style>
