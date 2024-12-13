<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Calendar = defineAsyncComponent(() => import("../components/main/programacion/calendar.vue"));
const Title = defineAsyncComponent(() => import("../components/structure/title.vue"));
const Footer = defineAsyncComponent(() => import("../components/structure/footer.vue"));
</script>
<template>
  <main class="flex flex-col min-h-screen">
    <!-- Encabezado -->
    <Title :title="'PROGRAMACIÓN DEL EVENTO'" />
    <!-- Contenedor principal -->
    <div class="flex-grow shadow-inner mb-4 overflow-auto">
      <div class="container mx-auto px-4 py-6">
        <Calendar />
      </div>
    </div>
    <!-- Footer -->
    <Footer class="mt-auto" />
  </main>
</template>
