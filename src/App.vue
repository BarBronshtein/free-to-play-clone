<script lang="ts">
import { defineComponent } from 'vue';
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue';
import { key } from './store/gameStore'
export default defineComponent({
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadGames', filterBy: '' })
  },
  components: { appHeader, appFooter }
})
</script>

<template>
  <app-header />
  <RouterView />
  <app-footer />
</template>