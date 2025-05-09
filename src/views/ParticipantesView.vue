<template>
  <div class="min-h-screen bg-white pt-32 pb-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Vista de Lista -->
      <div v-if="!participanteSeleccionado" class="space-y-12">
        <div class="text-center">
          <h1 class="text-4xl font-light text-gray-900 mb-4">Artistas Seleccionados</h1>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto">Descubre las obras y trayectorias de nuestros talentosos artistas participantes</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="participante in participantes" 
              :key="participante.id"
              @click="verDetalle(participante.id)"
              class="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer border border-gray-100">
            <h3 class="text-xl font-medium text-gray-900 mb-2 group-hover:text-red-600">{{ participante.nombre }}</h3>
            <p class="text-gray-500">{{ participante.provincia }}</p>
          </div>
        </div>
      </div>

      <!-- Vista de Detalle -->
      <div v-else class="max-w-5xl mx-auto">
        <button @click="volver" class="mb-12 flex items-center text-gray-400 hover:text-red-600 transition-colors duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a la galería
        </button>

        <div class="space-y-16">
          <header class="text-center space-y-6">
            <h1 class="text-5xl font-light text-gray-900">{{ participanteSeleccionado.nombre }}</h1>
            <div class="w-24 h-1 bg-red-600 mx-auto"></div>
            <p class="text-xl text-gray-500">{{ participanteSeleccionado.provincia }}</p>
          </header>
            
          <div v-if="participanteSeleccionado.obras && participanteSeleccionado.obras.length > 0" 
               class="space-y-32">
            <article v-for="obra in participanteSeleccionado.obras" :key="obra.id" class="space-y-16">
              <!-- Galería de imágenes -->
              <div v-if="obra.imagenes && obra.imagenes.length > 0" 
                   class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(imagen, index) in obra.imagenes" 
                     :key="index" 
                     class=" overflow-hidden rounded-xl group">
                  <img :src="imagen" 
                       :alt="`${obra.titulo} - Vista ${index + 1}`" 
                       class="object-cover transform transition-transform duration-700 group-hover:scale-110">
                </div>
              </div>

              <!-- Información de la obra -->
              <div class="space-y-12 px-4">
                <h2 class="text-3xl font-light text-gray-900 text-center">{{ obra.titulo }}</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl mx-auto">
                  <div class="space-y-3 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <h3 class="text-sm uppercase tracking-wider text-red-600">Técnica</h3>
                    <p class="text-gray-900 font-light">{{ obra.tecnica }}</p>
                  </div>

                  <div class="space-y-3 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <h3 class="text-sm uppercase tracking-wider text-red-600">Soporte</h3>
                    <p class="text-gray-900 font-light">{{ obra.soporte }}</p>
                  </div>

                  <div class="space-y-3 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <h3 class="text-sm uppercase tracking-wider text-red-600">Dimensiones</h3>
                    <p class="text-gray-900 font-light">{{ obra.dimensiones }}</p>
                  </div>

                  <div class="space-y-3 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <h3 class="text-sm uppercase tracking-wider text-red-600">Materiales</h3>
                    <p class="text-gray-900 font-light">{{ obra.materiales }}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Mensaje cuando no hay obras -->
          <div v-else class="text-gray-400 italic text-center py-24 text-xl font-light">
            Información de la obra estará disponible próximamente.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { participantes } from '../data/participantes'

const route = useRoute()
const router = useRouter()

const participanteId = computed(() => {
  const id = route.params.id
  return id ? Number(id) : null
})

const participanteSeleccionado = computed(() => {
  if (!participanteId.value) return null
  return participantes.find(p => p.id === participanteId.value) || null
})

const verDetalle = (id: number) => {
  router.push(`/participantes/${id}`)
}

const volver = () => {
  router.push('/participantes')
}
</script>

<style scoped>
.aspect-w-4 {
  position: relative;
  padding-bottom: 75%;
}

.aspect-w-4 > img {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}
</style>
