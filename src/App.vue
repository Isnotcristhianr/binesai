<script setup lang="ts">
/* Components */
import Navbar from "./components/structure/navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="bg-base-100">
    <RouterView />
  </main>
</template>
