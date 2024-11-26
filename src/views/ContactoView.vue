<script setup lang="ts">
import Footer from "../components/structure/footer.vue";
import Title from "@/components/structure/title.vue";
import ContactoView from "@/components/main/contacto/contactform.vue";
</script>
<template>
  <main class="flex flex-col min-h-screen">
    <!-- Encabezado -->
    <Title :title="$t('contacto.title')" />
    <!-- Contenedor principal -->
    <div class="flex-grow shadow-inner mb-4 overflow-auto">
      <div class="container mx-auto px-4 py-6">
        <ContactoView />
      </div>
    </div>
    <!-- Footer -->
    <Footer class="mt-auto" />
  </main>
</template>
