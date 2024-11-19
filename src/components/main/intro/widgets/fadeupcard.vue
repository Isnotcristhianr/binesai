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
    class="card bg-gradient-to-r from-primary to-secondary text-neutral-content w-96 mx-auto p-5 rounded-lg drop-shadow-lg"
    data-aos="fade-up"
  >
    <div class="card-body">
      <h2 class="card-title text-4xl font-extrabold ">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
