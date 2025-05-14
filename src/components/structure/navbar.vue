<script setup lang="ts">
// Vue
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const isOpen = ref(false);
const menuItems = [
  { to: '/', text: 'Acerca de la 8va Binesai' },
  { to: '/participantes', text: 'Artistas Participantes' },
  { to: '/ganadores', text: 'Ganadores' },
  { to: '/programacion', text: 'Programación' },
  { to: '/curaduria', text: 'Curaduria' },
  { to: '/contacto', text: 'Contacto' },
  { to: '/auspiciantes', text: 'Auspiciantes' },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
</script>

<template>
  <div class="relative">
    <!-- Navbar minimalista con efecto glass -->
    <nav class="fixed top-0 left-0 right-0 z-40 navbar-glass">
      <div class="container mx-auto">
        <div class="flex items-center justify-between h-20 px-6">
          <!-- Botón menú -->
          <button
            class="text-2xl text-gray-800 hover:text-[#9B1C1F] transition-colors z-50"
            @click="toggleMenu"
          >
            <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>

          <!-- Logo centrado -->
          <div class="absolute left-1/2 transform -translate-x-1/2">
            <router-link to="/" class="logo-link text-2xl font-light tracking-[0.2em] text-gray-900">
              BINESAI
            </router-link>
          </div>

          <!-- Elemento fantasma para mantener el espaciado -->
          <div class="w-8"></div>
        </div>
      </div>
    </nav>

    <!-- Menú overlay a pantalla completa -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-30 bg-white transition-opacity duration-300"
      :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="h-screen flex flex-col items-center justify-center px-8">
        <div class="space-y-12 text-center">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="toggleMenu"
            class="nav-link block text-4xl font-light tracking-wide text-gray-900 hover:text-[#9B1C1F] transition-all duration-300 transform hover:scale-105"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

/* Estilos específicos para los enlaces de navegación */
.nav-link.router-link-active {
  color: #9B1C1F;
  font-weight: 400;
  position: relative;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #9B1C1F;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

/* Estilos específicos para el logo */
.logo-link {
  position: relative;
  display: inline-block;
}

.logo-link.router-link-active {
  color: inherit;
  font-weight: inherit;
  animation: none;
}

/* Animación para el menú */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.nav-link.router-link-active {
  animation: fadeIn 0.5s ease forwards;
}
</style>
