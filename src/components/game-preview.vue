<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'game-preview',
  props: {
    game: {
      id: Number,
      title: String,
      thumbnail: String,
      releaseDate: String
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() { },
  unmounted() { }
})

</script>

<style lang="scss" scoped>

</style>