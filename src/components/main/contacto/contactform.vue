<script setup lang="ts">
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  disable: window.innerWidth < 768
});

const showModal = ref(false);
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  showModal.value = true;
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
};

const contactInfo = [
  {
    icon: 'mdi:map-marker',
    title: 'Dirección',
    content: 'San Antonio de Ibarra, Imbabura, Ecuador'
  },
  {
    icon: 'mdi:phone',
    title: 'Teléfono',
    content: '+593 (0) 999 999 999'
  },
  {
    icon: 'mdi:email',
    title: 'Email',
    content: 'info@binesai.com'
  }
];

const slides = [
  { src: "/imgs/carousel_2.jpg", alt: "Exposición de esculturas" },
  { src: "/imgs/carousel_3.jpg", alt: "Taller de escultura" },
  { src: "/imgs/carousel_4.jpg", alt: "Obras de arte" },
  { src: "/imgs/carousel_5.jpg", alt: "Galería de esculturas" },
  { src: "/imgs/carousel_6.jpg", alt: "Exhibición de arte" },
  { src: "/imgs/carousel_7.jpg", alt: "Muestra artística" }
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner con overlay -->
    <div class="relative h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden rounded-xl m-2 mt-20">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2 sm:mb-4">
            Contáctanos
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y escuchar tus comentarios
          </p>
        </div>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
      <!-- Información de contacto -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
        <div 
          v-for="(info, index) in contactInfo" 
          :key="index"
          class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Icon 
            :icon="info.icon" 
            class="w-8 h-8 text-[#9B1C1F] mb-4"
          />
          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ info.title }}</h3>
          <p class="text-gray-600">{{ info.content }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Formulario de contacto -->
        <div 
          class="bg-white rounded-xl shadow-lg p-6 sm:p-8"
          data-aos="fade-right"
        >
          <h2 class="text-2xl font-light text-[#9B1C1F] mb-6">Envíanos un mensaje</h2>
          <form @submit="handleSubmit" class="space-y-6">
            <div class="space-y-4">
              <div>
                <label 
                  for="name" 
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  {{ $t("contacto.form.name.label") }}
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  id="name"
                  name="name"
                  :placeholder="$t('contacto.form.name.placeholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9B1C1F] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  for="email" 
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  {{ $t("contacto.form.email.label") }}
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  name="email"
                  :placeholder="$t('contacto.form.email.placeholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9B1C1F] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label 
                  for="message" 
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  {{ $t("contacto.form.message.label") }}
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  name="message"
                  :placeholder="$t('contacto.form.message.placeholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9B1C1F] focus:border-transparent transition-all duration-300 min-h-[120px]"
                  required
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              class="w-full bg-[#9B1C1F] text-white py-3 rounded-lg hover:bg-[#7a1619] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {{ $t("contacto.form.submit") }}
            </button>
          </form>
        </div>

        <!-- Mapa -->
        <div 
          class="rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.744007640545!2d-78.11747378878707!3d0.3496980996453988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3d674c066b9f%3A0x12528cd14f0e3d5!2sCentro%20Cultural%20Tahuandos!5e0!3m2!1ses!2sec!4v1732554002808!5m2!1ses!2sec"
            class="w-full h-[450px] border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación del Centro Cultural Tahuandos"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de confirmación -->
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    v-if="showModal"
    @click="showModal = false"
  >
    <div 
      class="bg-white rounded-xl p-8 max-w-md mx-4 transform transition-all duration-300"
      @click.stop
    >
      <div class="text-center">
        <Icon 
          icon="mdi:check-circle" 
          class="w-16 h-16 text-green-500 mx-auto mb-4"
        />
        <h3 class="text-2xl font-light text-[#9B1C1F] mb-2">¡Gracias por contactarnos!</h3>
        <p class="text-gray-600 mb-6">
          Hemos recibido tu mensaje. Te responderemos pronto.
        </p>
        <button 
          @click="showModal = false"
          class="bg-[#9B1C1F] text-white px-6 py-2 rounded-lg hover:bg-[#7a1619] transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animaciones y transiciones */
.transform {
  will-change: transform;
}

/* Mejoras para inputs */
input::placeholder,
textarea::placeholder {
  color: #9CA3AF;
}

input:hover,
textarea:hover {
  border-color: #9B1C1F;
}

/* Reducción de movimiento si el usuario lo prefiere */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  input,
  textarea,
  button {
    font-size: 0.875rem;
  }
}
</style>
