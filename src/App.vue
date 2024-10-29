<script setup lang="ts">
/* Components */
import Navbar from "./components/structure/navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>
