<script setup lang="ts">
// Vue
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);
const menuItems = [
  { to: '/', text: 'Inicio' },
  { to: '/inscripcion', text: 'Inscripción' },
  { to: '/auspiciantes', text: 'Auspiciantes' },
  { to: '/programacion', text: 'Programación' }
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative">
    <!-- Navbar minimalista -->
    <nav class="fixed top-0 left-0 right-0 z-40">
      <div class="container mx-auto">
        <div class="flex items-center justify-between h-20 px-6">
          <!-- Menú y logo integrados -->
          <div class="flex items-center gap-8">
            <button
              class="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
              @click="toggleMenu"
            >
              <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" />
            </button>
            <span class="text-2xl font-light tracking-wider">
              BINESAI
            </span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Menú overlay minimalista -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-30 bg-white"
    >
      <div class="h-screen flex flex-col items-start justify-center px-16">
        <div class="space-y-12">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="toggleMenu"
            class="block text-4xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition-colors"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #000;
}

/* Efecto glass sutil */
nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Animaciones suaves */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
}
</style>
