<template>
  <gamePreview game="game"></gamePreview>
</template>

<script lang="ts">
import gamePreview from './game-preview.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: { gamePreview },
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