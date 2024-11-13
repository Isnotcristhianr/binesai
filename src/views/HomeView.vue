<script setup lang="ts">
//components
import Hero from "../components/main/hero/hero.vue";
import sponsors from "../components/main/hero/sponsors.vue";
import Intro from "../components/main/intro/intro.vue";
import Objectives from "../components/main/intro/objetives.vue";
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

     <div class="shadow-inner">

       <div class="max-w-screen-xl mx-auto ">
         <!-- intro section -->
          <Intro />
          <!-- objetivos section -->
          <Objectives />
       </div>
     </div>

     <!-- Footer Section -->
      <Footer />
  </main>
</template>
