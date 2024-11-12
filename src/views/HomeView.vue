<script setup lang="ts">
//components
import Hero from "../components/hero/hero.vue";
import sponsors from "../components/hero/sponsors.vue";
import Footer from "../components/structure/footer.vue";
</script>

<template>
  <main>
    <!-- Hero Section -->
     <div >
       <Hero />
     </div>

     <!-- Sponsors Section -->
     <div class="sponsors-container w-full max-w-full mx-auto">
       <sponsors />
     </div>

     <!-- Footer Section -->
      <Footer />
  </main>
</template>
