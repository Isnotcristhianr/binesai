<script setup lang="ts">
//components
import Hero from "../components/main/hero/hero.vue";
import sponsors from "../components/main/hero/sponsors.vue";
import Intro from "../components/main/intro/intro.vue";
import Objectives from "../components/main/intro/objetives.vue";
import Hitos from "@/components/main/intro/hitos.vue";
import Impactos from "@/components/main/intro/impactos.vue";
import Beneficios from "@/components/main/intro/beneficios.vue";
import Footer from "../components/structure/footer.vue";
</script>

<template>
  <main class="overflow-hidden">
    <!-- Hero Section -->
    <div class="">
      <Hero />
    </div>

    <!-- Sponsors Section -->
    <div class="sponsors-container w-full max-w-screen-xl mx-auto">
      <sponsors />
    </div>

    <div class="max-w-screen-xl mx-auto">
      <div>
        <!-- intro section -->
        <Intro />
      </div>
      <div>
        <!-- objetivos section -->
        <Objectives />
      </div>
    </div>
    <div>
      <!-- hitos section -->
      <Hitos />
    </div>
    <!-- impactos section -->
    <div class="w-full">
      <Impactos />
    </div>
    <div>
      <!-- beneficios section -->
      <Beneficios />
    </div>

    <!-- Footer Section -->
    <div>
      <Footer />
    </div>
  </main>
</template>
