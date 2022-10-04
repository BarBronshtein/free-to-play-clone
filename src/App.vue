<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { GameService } from './services/game.service';
export default defineComponent({
  name: 'App',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    this.$store.dispatch('loadgames')
  },
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>