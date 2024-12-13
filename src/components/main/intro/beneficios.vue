<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from "vue";

const fadeupcard = defineAsyncComponent(() => import("./widgets/fadeupcard.vue"));
const title = "Beneficios para Auspiciantes";
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full relative ">
    <div class="absolute top-0 w-full h-[28vh] bg-primary text-white flex items-center justify-center rounded-lg">
      <h2 class="text-3xl md:text-5xl lg:text-8xl font-extrabold text-center drop-shadow-lg">
        {{ $t("beneficios_auspiciantes.title") }}
      </h2>
    </div>
    <div class="grid gap-6 md:gap-8 lg:gap-11 items-center justify-center w-full mt-[30vh]">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-8 items-center justify-center mx-auto"
      >
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio1.title')"
          :description="$t('beneficios_auspiciantes.beneficios.beneficio1.description')"
        />
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio2.title')"
          :description="$t('beneficios_auspiciantes.beneficios.beneficio2.description')"
        />
        <fadeupcard
          :title="$t('beneficios_auspiciantes.beneficios.beneficio3.title')"
          :description="$t('beneficios_auspiciantes.beneficios.beneficio3.description')"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
