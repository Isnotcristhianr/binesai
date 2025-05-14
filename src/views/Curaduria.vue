<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const ejesCuraduria = [
  {
    titulo: "Materialidades Tradicionales",
    descripcion: "Configuradas por el aprendizaje más tradicional y de rigor de la academia en lo que se ha dado en llamar las bellas artes.",
    icono: "mdi:palette-outline"
  },
  {
    titulo: "Materialidades Contemporáneas",
    descripcion: "Bajo el uso de dispositivos más creativos cuya discursiva se entreteje bajo parámetros conceptuales que permiten no solo la apreciación estética de la escultura sino también su distribución filosófica.",
    icono: "mdi:cube-outline"
  },
  {
    titulo: "Materialidades Lúdicas",
    descripcion: "Formas tridimensionales que siendo en su gran mayoría públicas incitan e invitan a la interacción con el público asistente, transformándose en objetos relacionales.",
    icono: "mdi:gesture"
  }
];

const curador = {
  nombre: "Hernán Pacurucu C.",
  cargos: [
    "DIRECTOR EJECUTIVO DE LA BIENAL DE CUENCA",
    "CURADOR DE OFF ARTE CONTEMPORANEO",
    "CURADOR DE BIENAL NOMADE",
    "DIRECTOR ACADÉMICO DEL CONGRESO INTERNACIONAL DE TEORÍA, FILOSOFÍA, Y CRÍTICA DEL ARTE CONTEMPORÁNEO"
  ]
};
</script>

<template>
  <section class="py-16 mt-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <header class="text-center space-y-6 mb-20">
        <h2 class="text-5xl font-light text-gray-900">Bajo la sombra de tus alas</h2>
        <div class="w-24 h-1 bg-red-600 mx-auto"></div>
        <h3 class="text-2xl text-gray-500 font-light">El devenir de la escultura</h3>
      </header>

      <!-- Descarga de la curaduria -->
      <div class="flex justify-center mb-10">
        <a href="/docs/Curaduria_8 BINESAI.pdf" download target="_blank" class="bg-red-600 text-white px-4 py-2 rounded-md">
          Descargar Curaduria
        </a>
      </div>

      <!-- Cita -->
      <div class="max-w-4xl mx-auto mb-20 text-center">
        <blockquote class="text-2xl font-light italic text-gray-600">
          "Yo no invento nada, redescubro"
          <footer class="mt-4 text-lg text-gray-500">
            — Auguste Rodin
          </footer>
        </blockquote>
      </div>

      <!-- Texto Principal -->
      <div class="prose prose-lg mx-auto mb-20 text-gray-600 leading-relaxed">
        <p class="mb-6">
          Si removemos desde sus propias epistemes, podemos comprender que el acto
          artístico es sin lugar a dudas un acto de creación, creación no solo en el sentido
          dogmático del término, en cuanto algo que germina de la nada, sino en un
          sentido más ontológico que nos da cuenta de la pregunta filosofía...
        </p>
        <!-- Puedes agregar más párrafos según necesites -->
      </div>

      <!-- Disposición Orgánica -->
      <div class="space-y-16">
        <h3 class="text-3xl font-light text-center text-gray-900 mb-12">Disposición orgánica</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(eje, index) in ejesCuraduria" 
               :key="index"
               class="group bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon :icon="eje.icono" class="text-2xl text-red-600" />
            </div>
            <h4 class="text-xl font-medium text-gray-900 mb-4 text-center group-hover:text-red-600 transition-colors duration-300">
              {{ eje.titulo }}
            </h4>
            <p class="text-gray-600 text-center">
              {{ eje.descripcion }}
            </p>
          </div>
        </div>
      </div>

      <!-- Información del Curador -->
      <div class="mt-20 text-center space-y-6" data-aos="fade-up">
        <div class="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon icon="mdi:account" class="text-3xl text-red-600" />
        </div>
        <h4 class="text-2xl font-medium text-gray-900">{{ curador.nombre }}</h4>
        <div class="space-y-2">
          <p v-for="(cargo, index) in curador.cargos" 
             :key="index" 
             class="text-sm text-gray-500 font-light">
            {{ cargo }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prose {
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
}
</style> 