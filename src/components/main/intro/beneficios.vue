<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import fadeupcard from "./widgets/fadeupcard.vue";
const title = "Beneficios para Auspiciantes";
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-screen">
    <div class="grid gap-11 items-center justify-center w-full">
      <!-- Contenedor de las tarjetas centrado -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 items-center justify-center mx-auto h-[70vh]"
      >
        <!-- Tarjeta 1 con animación -->
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio1.title')"
          :description="
            $t('beneficios_auspiciantes.beneficios.beneficio1.description')
          "
        />
        <!-- Tarjeta 2 con animación -->
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio2.title')"
          :description="
            $t('beneficios_auspiciantes.beneficios.beneficio2.description')
          "
        />
        <!-- Tarjeta 3 con animación -->
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio3.title')"
          :description="
            $t('beneficios_auspiciantes.beneficios.beneficio3.description')
          "
        />
      </div>
      <!-- Sección de título -->
      <div
        class="h-[30vh] bg-primary text-white flex items-center justify-center w-screen"
      >
        <!-- Título "Beneficios para Auspiciantes" -->
        <h1
          class="text-4xl md:text-7xl font-extrabold text-center drop-shadow-lg"
        >
          {{ $t("beneficios_auspiciantes.title") }}
        </h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
