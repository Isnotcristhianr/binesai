<script setup lang="ts">
import { Icon } from "@iconify/vue";

const redes = [
  { nombre: 'Facebook', icono: 'mdi:facebook', url: 'https://facebook.com' },
  { nombre: 'Twitter', icono: 'mdi:twitter', url: 'https://twitter.com' },
  { nombre: 'Instagram', icono: 'mdi:instagram', url: 'https://instagram.com' },
  { nombre: 'LinkedIn', icono: 'mdi:linkedin', url: 'https://linkedin.com' }
];

const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Auspiciantes', ruta: '/auspiciantes' },
  { texto: 'Programación', ruta: '/programacion' },
  { texto: 'Contacto', ruta: '/contacto' }
];

const contacto = {
  direccion: 'San Antonio de Ibarra, Imbabura, Ecuador',
  email: 'info@binesai.com',
  telefono: '+593 (0) 999 999 999'
};
</script>

<template>
  <footer class="bg-gradient-to-b from-gray-900 to-black text-white">
    <!-- Contenido principal del footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Logo y descripción -->
        <div class="space-y-4">
          <img 
            src="/icons/Bienal_footer.jpg" 
            alt="Logo BINESAI" 
            class="h-20 rounded-lg"
          />
          <p class="text-gray-400 text-sm leading-relaxed">
            Bienal Nacional de Escultura San Antonio de Ibarra, celebrando y promoviendo el arte escultórico ecuatoriano.
          </p>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-lg font-medium text-[#9B1C1F] mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li v-for="enlace in enlaces" :key="enlace.ruta">
              <router-link 
                :to="enlace.ruta"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ enlace.texto }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Información de contacto -->
        <div>
          <h3 class="text-lg font-medium text-[#9B1C1F] mb-4">Contacto</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start">
              <Icon icon="mdi:map-marker" class="w-5 h-5 mt-1 mr-2 text-[#9B1C1F]" />
              <span>{{ contacto.direccion }}</span>
            </li>
            <li class="flex items-center">
              <Icon icon="mdi:email" class="w-5 h-5 mr-2 text-[#9B1C1F]" />
              <a 
                :href="'mailto:' + contacto.email"
                class="hover:text-white transition-colors duration-300"
              >
                {{ contacto.email }}
              </a>
            </li>
            <li class="flex items-center">
              <Icon icon="mdi:phone" class="w-5 h-5 mr-2 text-[#9B1C1F]" />
              <a 
                :href="'tel:' + contacto.telefono"
                class="hover:text-white transition-colors duration-300"
              >
                {{ contacto.telefono }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div>
          <h3 class="text-lg font-medium text-[#9B1C1F] mb-4">Síguenos</h3>
          <div class="flex space-x-4">
            <a 
              v-for="red in redes" 
              :key="red.nombre"
              :href="red.url"
              :aria-label="red.nombre"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#9B1C1F] transition-colors duration-300"
            >
              <Icon 
                :icon="red.icono" 
                class="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Barra inferior -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} BINESAI. Todos los derechos reservados.
          </p>
          <p class="text-sm text-gray-400 mt-2 md:mt-0">
            Desarrollado por 
            <a 
              href="https://www.isnotcristhianr.dev/" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9B1C1F] hover:text-white transition-colors duration-300"
            >
              IsnotCristianr.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Optimizaciones de rendimiento */
img {
  contain: content;
}

/* Transiciones suaves */
.transition-colors {
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Reducción de movimiento si el usuario lo prefiere */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>
