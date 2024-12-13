<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("../components/main/hero/hero.vue"));
const sponsors = defineAsyncComponent(() => import("../components/main/hero/sponsors.vue"));
const Intro = defineAsyncComponent(() => import("../components/main/intro/intro.vue"));
const Objectives = defineAsyncComponent(() => import("../components/main/intro/objetives.vue"));
const Hitos = defineAsyncComponent(() => import("../components/main/intro/hitos.vue"));
const Impactos = defineAsyncComponent(() => import("../components/main/intro/impactos.vue"));
const Beneficios = defineAsyncComponent(() => import("../components/main/intro/beneficios.vue"));
const Footer = defineAsyncComponent(() => import("../components/structure/footer.vue"));
const Team = defineAsyncComponent(() => import("../components/main/intro/widgets/team.vue"));
const Form = defineAsyncComponent(() => import("../components/main/form/form_component.vue"));
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
    <div class="mb-8" hidden>
      <!-- equipo section -->
      <Team />
    </div>
    <!-- Footer Section -->
      <Footer />

  </main>
</template>
