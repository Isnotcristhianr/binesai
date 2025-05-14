<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Activities = defineAsyncComponent(() => import('./activities.vue'));
</script>

<template>
  <Activities />
  <div class="flex items-center justify-center min-h-screen">
    <div class="max-w-[1000px] w-full px-6 md:px-12 lg:px-16">
      <div class="grid md:grid-cols-[45%_55%] items-center">
        <!-- Título Principal a la izquierda -->
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] text-[#9B1C1F]">
            Fortaleciendo
            <br />
            <span>el legado</span>
            <br />
            <span>escultórico</span>
            <br />
            ecuatoriano
          </h1>
        </div>

        <!-- Contenido Principal a la derecha -->
        <div class="mt-8 md:mt-0 md:pl-12 lg:pl-16">
          <div class="space-y-6">
            <p class="text-lg md:text-xl font-light leading-relaxed">
              La <span class="font-normal">8va Bienal Nacional de Escultura San Antonio de Ibarra BINESAI</span> es una gran exhibición de arte que tiene como misión visibilizar y fortalecer el patrimonio escultórico del Ecuador.
            </p>
            <p class="text-lg md:text-xl font-light leading-relaxed">
              Este proyecto a realizarse en 2025, busca reunir a los principales exponentes de la escultura contemporánea, promoviendo el diálogo entre generaciones y el intercambio cultural entre <span class="font-normal">artistas, estudiantes, maestros artesanos y la comunidad.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 span {
  display: inline-block;
}

</style>
