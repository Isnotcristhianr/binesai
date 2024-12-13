<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Footer = defineAsyncComponent(() => import("../components/structure/footer.vue"));
const Title = defineAsyncComponent(() => import("../components/structure/title.vue"));
const ContactoView = defineAsyncComponent(() => import("../components/main/contacto/contactform.vue"));
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
