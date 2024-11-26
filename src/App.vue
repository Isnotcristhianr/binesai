<script setup lang="ts">
/* Components */
import Navbar from "./components/structure/navbar.vue";
</script>

<template >
  <div class="font-sans">

    <header>
      <Navbar />
    </header>
  
    <main class="bg-base-100">
      <RouterView />
    </main>
  </div>
</template>
