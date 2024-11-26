<script setup lang="ts">
import { ref } from "vue";
const showModal = ref(false);
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  showModal.value = true;
  // Resetear el formulario después del envío
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
};

const slides = [
  { src: "/imgs/carousel_2.jpg" },
  { src: "/imgs/carousel_3.jpg" },
  { src: "/imgs/carousel_4.jpg" },
  { src: "/imgs/carousel_5.jpg" },
  { src: "/imgs/carousel_6.jpg" },
  { src: "/imgs/carousel_7.jpg" },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <!-- Carrusel simplificado -->
      <v-carousel
        height="400"
        cycle
        hide-delimiters
        show-arrows="hover"
        class="rounded-xl shadow-lg overflow-hidden backdrop-blur-md bg-white/30 dark:bg-black/30"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.src"
          cover
        >
        </v-carousel-item>
      </v-carousel>

      <!-- Formulario de contacto con mejor contraste -->
      <div class="bg-white/80 dark:bg-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <form @submit="handleSubmit" class="space-y-6">
          <div class="space-y-4">
            <div>
              <label 
                for="name" 
                class="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Nombre completo
              </label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                class="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:ring-2 focus:ring-primary"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label 
                for="email" 
                class="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Correo electrónico
              </label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                name="email"
                placeholder="tu@ejemplo.com"
                class="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:ring-2 focus:ring-primary"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label 
                for="message" 
                class="block text-sm font-medium text-gray-900 dark:text-white mb-1"
              >
                Mensaje
              </label>
              <textarea
                v-model="formData.message"
                id="message"
                name="message"
                placeholder="¿En qué podemos ayudarte?"
                class="textarea textarea-bordered w-full h-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:ring-2 focus:ring-primary"
                required
                aria-required="true"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            class="btn btn-primary w-full text-white font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>

    <!-- Mapa -->
    <div class="mt-6 rounded-2xl overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.744007640545!2d-78.11747378878707!3d0.3496980996453988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3d674c066b9f%3A0x12528cd14f0e3d5!2sCentro%20Cultural%20Tahuandos!5e0!3m2!1ses!2sec!4v1732554002808!5m2!1ses!2sec"
        class="w-full h-[400px] border-0 relative z-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación del Centro Cultural Tahuandos"
        aria-label="Mapa mostrando la ubicación del Centro Cultural Tahuandos"
      ></iframe>
    </div>
  </div>

  <!-- Modal con efecto blur -->
  <dialog id="my_modal_2" class="modal backdrop-blur-sm" :open="showModal">
    <div class="modal-box text-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
      <h3 class="text-2xl font-bold text-primary mb-2">¡Gracias por contactarnos!</h3>
      <p class="text-gray-900 dark:text-white">
        Hemos recibido tu mensaje. Te responderemos pronto.
      </p>
      <button 
        @click="showModal = false"
        class="btn btn-primary mt-6"
      >
        Cerrar
      </button>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button @click="showModal = false">cerrar</button>
    </form>
  </dialog>
</template>

<style scoped>
/* Animaciones suaves */
.input,
.textarea,
.btn {
  transition: all 0.2s ease-in-out;
}

/* Mejoras para inputs */
.input::placeholder,
.textarea::placeholder {
  color: rgba(107, 114, 128, 0.7);
}

.dark .input::placeholder,
.dark .textarea::placeholder {
  color: rgba(156, 163, 175, 0.7);
}

/* Efecto hover para inputs */
.input:hover,
.textarea:hover {
  border-color: var(--primary-color);
}
</style>
