<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from "@iconify/vue"

export default defineComponent({
  name: 'Footer',
  components: {
    Icon
  }
})
</script>

<template>
  <footer class="bg-gray-800 text-white py-4 flex flex-col md:flex-row justify-between items-center">
    <div class="flex items-center space-x-4 px-5">
      <img src="/imgs/Logo BINESAI completo.png" alt="Logo BINESAI" class="h-12 w-auto rounded-lg" />
      <div class="text-start md:text-left">
        <p class="text-lg font-semibold">BINESAI</p>
        <p class="text-sm">© 2024 BINESAI. Todos los derechos reservados.</p>
        <p class="text-xs">Desarrollado por <a href="https://www.isnotcristhianr.dev/" target="_blank" class="link">IsnotCristianr.dev</a></p>
      </div>
    </div>
    <nav class="flex space-x-3 mt-4 md:mt-0 px-5">
      <a href="https://facebook.com" target="_blank" aria-label="Facebook">
        <Icon icon="mdi:facebook" class="text-3xl hover:text-gray-400 transition-colors" />
      </a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter">
        <Icon icon="mdi:twitter" class="text-3xl hover:text-gray-400 transition-colors" />
      </a>
      <a href="https://instagram.com" target="_blank" aria-label="Instagram">
        <Icon icon="mdi:instagram" class="text-3xl hover:text-gray-400 transition-colors" />
      </a>
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <Icon icon="mdi:linkedin" class="text-3xl hover:text-gray-400 transition-colors" />
      </a>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto; /* Empujar el pie de página hacia abajo */
}
</style>
