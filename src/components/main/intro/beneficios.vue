<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";
import fadeupcard from "./widgets/fadeupcard.vue";
const title = "Beneficios para Auspiciantes";
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen relative ">
    <div class="absolute top-0 w-full h-[28vh] bg-primary text-white flex items-center justify-center rounded-lg">
      <!-- Título "Beneficios para Auspiciantes" -->
      <h1 class="text-5xl md:text-8xl font-extrabold text-center drop-shadow-lg">
        {{ $t("beneficios_auspiciantes.title") }}
      </h1>
    </div>
    <div class="grid gap-11 items-center justify-center w-full mt-[30vh]">
      <!-- Contenedor de las tarjetas centrado -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 items-center justify-center mx-auto"
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
    </div>
  </div>
</template>
<style scoped></style>
