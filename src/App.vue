<template>
  <div id="mydiv">
    <CanvasParticle />
    <AppHeader />
    <div class="container content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CanvasParticle from './components/CanvasParticle.vue'
</script>
