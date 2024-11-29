<script setup lang="ts">
/* Components */
import Navbar from "@/components/structure/navbar.vue";

import { onMounted } from "vue";
onMounted(() => {
  const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "BINESAI",
        "url": "https://binesai.com",
        "logo": "https://binesai.com/imgs/Logo BINESAI.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+593-999999999",
          "contactType": "Customer Service"
        }});
      document.head.appendChild(script);
});
</script>

<template >
  <div class="font-sans">

    <header>
      <Navbar />
    </header>
    <h1 hidden>Binesai: Bienal Nacional de Escultura San Antonio de Ibarra</h1>
    <main class="bg-base-100">
      <RouterView />
    </main>
  </div>
</template>
