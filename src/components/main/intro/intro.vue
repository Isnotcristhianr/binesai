<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Activities from "./activities.vue";
</script>

<template>
  <Activities />
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <div class="grid md:grid-cols-2 gap-8 max-w-screen-lg w-full">
      <!-- Card Título -->
      <div class="flex items-start md:justify-end">
        <h1
          class="text-7xl font-extrabold text-primary leading-tight md:leading-none md:text-right"
        >
          {{ $t("intro.title.p1") }}
          <br />
          {{ $t("intro.title.p2") }}
          <br />
          {{ $t("intro.title.p3") }}
          <br />
          {{ $t("intro.title.p4") }}
        </h1>
      </div>

      <!-- Card Descripción -->
      <div class="flex items-center">
        <p class="text-lg leading-relaxed text-justify">
          {{ $t("intro.description.p1") }}
          <span class="font-semibold 0"
            >
            {{ $t("intro.description.p2") }}
            I</span
          >
          {{ $t("intro.description.p3") }}
          <span class="font-semibold"
            >
              {{ $t("intro.description.p4") }}
            </span
          >
          {{ $t("intro.description.p5") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Opcional: Estilos para ajustar la tipografía */
h1 {
  line-height: 1.2;
}
</style>
