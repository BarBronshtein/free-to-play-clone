<template>
  <main class="game-app main-layout">
    <game-filter />
    <game-list :games="games" @selectGame="selectedGame" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gameFilter from '../components/game-filter.vue';
import gameList from '../components/game-list.vue';
export default defineComponent({
  data() {
    return {};
  },
  created() { },
  components: { gameFilter, gameList },
  methods: {
    selectedGame(gameId: string) {
      this.$router.push('/details/' + gameId);
    }
  },
  computed: {
    games() {
      return this.$store.getters.games;
    }
  },

});
</script>

<style lang="scss" scoped>

</style>