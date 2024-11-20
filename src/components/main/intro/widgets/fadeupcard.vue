<!-- FadeUpCard.vue -->
<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>
<template>
  <div
    class="card bg-gradient-to-r from-primary to-secondary text-neutral-content w-full sm:w-96 mx-auto p-8 rounded-xl shadow-2xl transform transition-transform hover:scale-105"
    data-aos="fade-up"
  >
    <div class="card-body space-y-4">
      <h2 class="card-title text-5xl font-extrabold min-w-full">{{ title }}</h2>
      <p class="leading-relaxed min-w-full">{{ description }}</p>
    </div>
  </div>
</template>
