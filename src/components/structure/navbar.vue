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
    <!-- Navbar fijo -->
    <nav class="fixed top-0 left-0 right-0 z-40 glass border-b">
      <div class="container mx-auto">
        <div class="flex items-center justify-between h-16 px-4">
          <!-- Botón menú -->
         <!--  <button
            class="text-2xl"
            @click="toggleMenu"
          >
            ☰
          </button> -->

          <!-- Logo central -->
          <div class="absolute left-1/2 transform -translate-x-1/2 mr-8">
            <button
            class="text-2xl"
            @click="toggleMenu"
          >
            ☰
          </button>
          
            <span class="text-2xl font-normal">
              BINESAI
            </span>
          </div>

          <!-- Espacio para simetría -->
          <div class="w-8"></div>
        </div>
      </div>
    </nav>

    <!-- Menú overlay -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 bg-[#F5F5F5]"
    >
      <div class="h-screen flex flex-col items-center justify-center">
        <div class="space-y-12">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="toggleMenu"
            class="block text-4xl text-center text-gray-900 hover:text-gray-600"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones suaves */
.router-link-active {
  color: #000;
  font-weight: 500;
}

/* Optimización de rendimiento */
nav {
  contain: content;
}

/* Prevenir scroll cuando el menú está abierto */
:root {
  overflow: hidden;
}
</style>
