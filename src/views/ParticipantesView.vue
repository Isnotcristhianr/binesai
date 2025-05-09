<template>
  <div class="min-h-screen bg-white mt-20">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Vista de Lista -->
      <div v-if="!participanteSeleccionado">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Artistas Seleccionados</h1>
        
        <div class="overflow-hidden bg-white shadow sm:rounded-lg">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="participante in participantes" 
                :key="participante.id"
                @click="verDetalle(participante.id)"
                class="flex justify-between gap-x-6 p-5 hover:bg-gray-50 cursor-pointer">
              <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">{{ participante.nombre }}</p>
                </div>
              </div>
              <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">{{ participante.provincia }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Vista de Detalle -->
      <div v-else>
        <button @click="volver" class="mb-8 flex items-center text-gray-600 hover:text-gray-800">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>

        <div class="bg-white">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ participanteSeleccionado.nombre }}</h1>
            <p class="text-xl text-gray-600 mb-8">{{ participanteSeleccionado.provincia }}</p>
            
            <div v-if="participanteSeleccionado.obras && participanteSeleccionado.obras.length > 0" 
                 class="space-y-8">
              <div v-for="obra in participanteSeleccionado.obras" :key="obra.id">
                <!-- Galería de imágenes -->
                <div v-if="obra.imagenes && obra.imagenes.length > 0" 
                     class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div v-for="(imagen, index) in obra.imagenes" 
                       :key="index" 
                       class="aspect-w-4 aspect-h-3">
                    <img :src="imagen" 
                         :alt="`${obra.titulo} - Vista ${index + 1}`" 
                         class="object-cover w-full h-full rounded-lg shadow-md">
                  </div>
                </div>

                <!-- Información de la obra -->
                <div class="bg-gray-50 rounded-lg p-6 space-y-4">
                  <h2 class="text-2xl font-semibold text-gray-900">{{ obra.titulo }}</h2>
                  
                  <div class="space-y-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div class="text-sm font-medium text-gray-500">Técnica</div>
                      <div class="text-sm text-gray-900 md:col-span-3">{{ obra.tecnica }}</div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div class="text-sm font-medium text-gray-500">Soporte</div>
                      <div class="text-sm text-gray-900 md:col-span-3">{{ obra.soporte }}</div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div class="text-sm font-medium text-gray-500">Dimensiones</div>
                      <div class="text-sm text-gray-900 md:col-span-3">{{ obra.dimensiones }}</div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div class="text-sm font-medium text-gray-500">Materiales</div>
                      <div class="text-sm text-gray-900 md:col-span-3">{{ obra.materiales }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mensaje cuando no hay obras -->
            <div v-else class="text-gray-500 italic text-center py-8">
              Información de la obra estará disponible próximamente.
            </div>
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
