<script setup lang="ts">
//components
import Hero from "../components/main/hero/hero.vue";
import sponsors from "../components/main/hero/sponsors.vue";
import Intro from "../components/main/intro/intro.vue";
import Objectives from "../components/main/intro/objetives.vue";
import Hitos from "../components/main/intro/hitos.vue";
import Impactos from "../components/main/intro/impactos.vue";
import Beneficios from "../components/main/intro/beneficios.vue";
import Footer from "../components/structure/footer.vue";
import Team from "../components/main/intro/widgets/team.vue";
import Form from "../components/main/form/form_component.vue";
</script>

<template>
  <main class="overflow-hidden">
    <!-- Hero Section -->
    <div class="mb-8">
      <Hero />
    </div>

    <!-- Sponsors Section -->
    <div class="sponsors-container w-full max-w-screen-xl mx-auto mb-8">
      <sponsors />
    </div>

    <div class="max-w-screen-xl mx-auto mb-8 space-y-8">
      <div>
        <!-- intro section -->
        <Intro />
      </div>
      <!-- form section -->
      <Form />
      <div>
        <!-- objetivos section -->
        <Objectives />
      </div>
    </div>
    <div class="mb-8">
      <!-- hitos section -->
      <Hitos />
    </div>
    <!-- impactos section -->
    <div class="w-full mb-8">
      <Impactos />
    </div>
    <div class="mb-8">
      <!-- beneficios section -->
      <Beneficios />
    </div>
    <div class="mb-8">
      <!-- equipo section -->
      <Team />
    </div>

    <!-- Footer Section -->
    <div class="mb-8">
      <Footer />
    </div>
  </main>
</template>
