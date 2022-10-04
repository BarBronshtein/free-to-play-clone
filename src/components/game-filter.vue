<template>
  <section class="game-filter">
    <input @input="execute" v-model="category" type="text" placeholder="Search for games by genre">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'game-filter',
  data() {
    return {
      category: '',
      execute: Object.create(null)
    }
  },
  created() {
    this.execute = this.debounce(this.setFilterBy)
  },
  methods: {
    debounce(cb: Function, delay = 300) {
      let timeout: number;
      return function execuredFunc(...args: any[]) {
        const later = () => {
          clearTimeout(timeout);
          cb(...args);
        }
        timeout = setTimeout(later, delay)
      }
    },
    setFilterBy() {
      this.$store.dispatch({ type: 'loadGames', filterBy: this.category })
    }
  },
});

</script>

<style lang="scss" scoped>

</style>