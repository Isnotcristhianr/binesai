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
    class="card bg-gradient-to-r from-primary to-secondary text-neutral-content w-full max-w-sm mx-auto p-3 sm:p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105"
    data-aos="fade-up"
  >
    <div class="card-body space-y-1 sm:space-y-3">
      <h2 class="card-title text-2xl sm:text-4xl font-extrabold min-w-full">{{ title }}</h2>
      <p class="leading-relaxed min-w-full">{{ description }}</p>
    </div>
  </div>
</template>
