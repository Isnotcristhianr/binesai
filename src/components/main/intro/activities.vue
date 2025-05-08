<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex justify-center py-12">
    <div class="group relative inline-flex flex-col items-center gap-6 hover:cursor-pointer">
      <!-- Texto descriptivo -->
      <span class="text-xl font-light tracking-wide text-gray-800">
        {{ $t("dosier.text") }}
      </span>

      <!-- Botón de descarga minimalista -->
      <a 
        href="/docs/Dossier_BINESAI.pdf" 
        download 
        class="flex items-center gap-3 px-8 py-3 border border-gray-200 rounded-full transition-all duration-300 hover:bg-red-700 hover:border-red-700 group"
      >
        <Icon 
          icon="mdi:download" 
          class="text-xl text-gray-600 group-hover:text-white transition-colors duration-300" 
        />
        <span class="text-lg font-light text-gray-800 group-hover:text-white transition-colors duration-300">
          {{ $t("dosier.down") }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Eliminamos el estilo anterior ya que ahora usamos group-hover directamente en las clases */
</style>