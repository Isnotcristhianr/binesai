<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue"

const isPagado = ref(false)
const loading = ref(false)

const handlePago = async () => {
  loading.value = true
  window.open('https://www.isnotcristhianr.dev', '_blank')
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <img src="/imgs/Logo BINESAI completo.png" alt="Logo BINESAI" class="h-16 w-auto mx-auto mb-4 rounded-lg" />
        <h2 class="text-3xl font-bold text-gray-900">Sitio Web en Desarrollo</h2>
        <p class="mt-2 text-gray-600">Para acceder al contenido completo, es necesario realizar el pago al desarrollador</p>
      </div>

      <!-- Card de Pago -->
      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="p-6 sm:p-8">
          <div class="space-y-6">
            <!-- Mensaje Principal -->
            <div class="alert alert-error">
              <Icon icon="mdi:information" class="text-2xl" />
              <span>Este sitio web requiere un pago para su activación</span>
            </div>

            <!-- Detalles -->
            <div class="divider">Información de Contacto</div>
            <div class="space-y-4">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Desarrollador</p>
                <a href="https://www.isnotcristhianr.dev" target="_blank" class="link text-xl">IsnotCristhianr.dev</a>
              </div>
              
              <div class="alert alert-warning mt-4">
                <Icon icon="mdi:alert" class="text-2xl" />
                <span>Para activar el sitio web, contacte al desarrollador para coordinar el pago</span>
              </div>
            </div>

            <!-- Botón de Contacto -->
            <button 
              class="btn btn-primary w-full" 
              :class="{ 'loading': loading }"
              @click="handlePago"
            >
              {{ loading ? 'Redirigiendo...' : 'Contactar al Desarrollador' }}
            </button>
          </div>
        </div>

        <!-- Footer del Card -->
        <div class="bg-gray-50 px-6 py-4 sm:px-8">
          <div class="text-center space-y-2">
            <p class="text-sm text-gray-600">
              Desarrollado con ❤️ por
            </p>
            <a href="https://www.isnotcristhianr.dev/" target="_blank" class="link text-lg font-semibold block">
              IsnotCristhianr.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

