<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Activities from "./activities.vue";
</script>

<template>
  <Activities />
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div
      class="flex justify-center flex-col items-center m-6 max-w-screen-md w-full"
    >
      <div
        class="banner banner-secondary p-4 text-center bg-primary text-xl font-bold mb-4 rounded-md shadow-lg text-white"
      >
        Fortaleciendo el legado escultórico ecuatoriano
      </div>
      <p class="text-justify max-w-lg m-4 text-xl">
        La
        <label class="font-bold">
          8va Bienal Nacional de Escultura San Antonio de Ibarra BINESAI</label
        >
        es una gran exhibición de arte que tiene como misión visibilizar y
        fortalecer el patrimonio escultórico del Ecuador. Este proyecto, a
        realizarse en 2025, busca reunir a los principales exponentes de la
        escultura contemporánea,
        <label class="font-bold">
          promoviendo el diálogo entre generaciones y el intercambio
          cultural</label
        >
        entre artistas, estudiantes, maestros artesanos y la comunidad. San
        Antonio de Ibarra, reconocida por su tradición escultórica, será el
        epicentro de este encuentro que reúne arte, cultura y patrimonio,
        impulsando la creación de nuevas formas y técnicas en la escultura
        contemporánea.
      </p>
    </div>
  </div>
</template>
