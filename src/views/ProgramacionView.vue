<script setup lang="ts">
//components
import Calendar from "@/components/main/programacion/calendar.vue";
import Title from "@/components/structure/title.vue";
import Footer from "../components/structure/footer.vue";
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
