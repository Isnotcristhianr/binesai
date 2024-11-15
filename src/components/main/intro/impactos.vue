<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Activities from "./activities.vue";
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen w-screen"
    style="background-image: url(/imgs/bgImpactos.jpg); background-size: cover; background-position: center;"
  >
    <!-- Sombreado Blanco -->
    <div class="absolute inset-0 bg-white opacity-30"></div>

    <!-- Contenido Principal -->
    <div class="relative z-10 max-auto p-6 md:p-10">
      <!-- Card Título -->
      <div class="flex items-start mb-8">
        <h1
          class="text-7xl font-extrabold text-primary leading-tight md:leading-none md:text-right mb-8 items-center drop-shadow-lg"
        >
          {{ $t("impactos_clave.title") }}
        </h1>
      </div>

      <!-- Contenido Colapsable -->
      <div class="w-full space-y-4">
        <div class="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input type="radio" name="my-accordion-2" checked />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto1.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-700">
            <p>{{ $t("impactos_clave.impactos.impacto1.description") }}</p>
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto2.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-700">
            <p>{{ $t("impactos_clave.impactos.impacto2.description") }}</p>
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white shadow-md rounded-lg overflow-hidden">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto3.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-700">
            <p>{{ $t("impactos_clave.impactos.impacto3.description") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
