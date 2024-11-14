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
          class="text-6xl font-extrabold text-primary leading-tight md:leading-none md:text-right"
        >
          Fortaleciendo<br />
          el legado<br />
          escultórico<br />
          ecuatoriano
        </h1>
      </div>

      <!-- Card Descripción -->
      <div class="flex items-center">
        <p class="text-lg leading-relaxed text-justify">
          La
          <span class="font-semibold 0"
            >8va Bienal Nacional de Escultura San Antonio de Ibarra
            BINESAI</span
          >
          es una gran exhibición de arte que tiene como misión visibilizar y
          fortalecer el patrimonio escultórico del Ecuador. Este proyecto, a
          realizarse en 2025, busca reunir a los principales exponentes de la
          escultura contemporánea,
          <span class="font-semibold"
            >promoviendo el diálogo entre generaciones y el intercambio
            cultural</span
          >
          entre artistas, estudiantes, maestros artesanos y la comunidad. San
          Antonio de Ibarra, reconocida por su tradición escultórica, será el
          epicentro de este encuentro que reúne arte, cultura y patrimonio,
          impulsando la creación de nuevas formas y técnicas en la escultura
          contemporánea.
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
