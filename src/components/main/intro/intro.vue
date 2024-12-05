<script setup lang="ts">
import Activities from './activities.vue';
</script>
  
<template>
  <Activities />
  <div class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
    <div class="grid gap-8 max-w-screen-lg w-full sm:grid-cols-2">
      <!-- Card Título -->
      <div class="flex flex-col items-end justify-center">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight text-right"
        >
          {{ $t("intro.title.p1") }}
          <br />
          {{ $t("intro.title.p2") }}
          <br />
          {{ $t("intro.title.p3") }}
          <br />
          {{ $t("intro.title.p4") }}
        </h2>
      </div>

      <!-- Card Descripción -->
      <div class="flex flex-col justify-center">
        <p class="text-base sm:text-lg leading-relaxed text-left">
          {{ $t("intro.description.p1") }}
          <span class="font-semibold">
            {{ $t("intro.description.p2") }}
          </span>
          {{ $t("intro.description.p3") }}
          <span class="font-semibold">
            {{ $t("intro.description.p4") }}
          </span>
          {{ $t("intro.description.p5") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
