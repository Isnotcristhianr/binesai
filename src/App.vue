<script setup lang="ts">
/* Components */  
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() => import("./components/structure/navbar.vue"));

import { onMounted } from "vue";
onMounted(() => {
  const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "BINESAI",
        "url": "https://binesai.com",
        "logo": "https://binesai.com/icons/Logo BINESAI-Horizontal_9.jpg",
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
    <main >
      <RouterView />
    </main>
  </div>
</template>
