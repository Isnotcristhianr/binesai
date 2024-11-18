<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Activities from "./activities.vue";
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen w-screen"
    style="background-image: url(/imgs/bgImpactos.jpg); background-size: cover; background-position: center; background-size: 100% 100%;"
  >
    <!-- Sombreado Blanco -->
    <div class="absolute inset-0 opacity-30"></div>

    <!-- Contenido Principal -->
    <div class="relative z-10 max-w-3xl mx-auto backdrop-blur-lg shadow-lg rounded-lg p-8 md:p-12 m-4">
      <!-- Card Título -->
      <div class="flex items-start mb-8">
        <h2
          class="text-5xl font-bold text-secondary leading-tight text-center mb-8 drop-shadow-lg"
        >
          {{ $t("impactos_clave.title") }}
        </h2>
      </div>

      <!-- Contenido Colapsable -->
      <div class="w-full space-y-6">
        <div class="collapse collapse-arrow bg-white shadow-lg rounded-lg overflow-hidden">
          <input type="checkbox" />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto1.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>{{ $t("impactos_clave.impactos.impacto1.description") }}</p>
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white shadow-lg rounded-lg overflow-hidden">
          <input type="checkbox" />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto2.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>{{ $t("impactos_clave.impactos.impacto2.description") }}</p>
          </div>
        </div>

        <div class="collapse collapse-arrow bg-white shadow-lg rounded-lg overflow-hidden">
          <input type="checkbox" />
          <div class="collapse-title text-lg md:text-xl font-semibold text-primary">
            {{ $t("impactos_clave.impactos.impacto3.title") }}
          </div>
          <div class="collapse-content p-4 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>{{ $t("impactos_clave.impactos.impacto3.description") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-opacity-80 {
  background-color: rgba(255, 255, 255, 0.80);
}
</style>
