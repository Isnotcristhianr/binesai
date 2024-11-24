<script setup lang="ts">
// Define si hay algún evento posterior al envío
import { ref } from "vue";
const showModal = ref(false);
const handleSubmit = (event: Event) => {
  event.preventDefault();
  showModal.value = true;
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
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div
      class="dark:bg-gray-800 sm:rounded-lg flex justify-center items-center"
    >
      <!-- Carrusel con fondo semitransparente -->
      <div class="relative w-[70%]">
        <!-- Fondo blanco semitransparente -->
<!--         <div class="absolute inset-0 bg-white/25 z-10"></div> -->

        <!-- Logo centrado -->
       <!--  <div class="absolute inset-0 flex justify-center items-center z-20">
          <img
            src="/imgs/Logo. Binesai transpaente.png"
            alt="Logo"
            class="w-20 h-20 object-contain"
          />
        </div> -->

        <!-- Carrusel funcional -->
        <v-carousel
          height="400"
          cycle
          hide-delimiters
          show-arrows="hover"
          class="rounded-lg relative"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <!-- Contact form -->
    <form class="p-6 flex flex-col justify-center" @submit="handleSubmit">
      <div class="flex flex-col">
        <!-- Campo de Nombre -->
        <div class="form-control">
          <label class="label" for="name">
            <span class="label-text">Nombre completo</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            class="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div class="flex flex-col mt-2">
        <!-- Campo de Correo Electrónico -->
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Correo electrónico</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jhony@example.com"
            class="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div class="flex flex-col mt-2">
        <!-- Campo de Mensaje -->
        <div class="form-control">
          <label class="label" for="message">
            <span class="label-text">Mensaje</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            class="textarea textarea-bordered w-full"
            rows="5"
            required
          ></textarea>
        </div>
      </div>

      <!-- Botón de Enviar -->
      <button type="submit" class="btn btn-primary w-full text-white">
        Enviar mensaje
      </button>
    </form>
  </div>
  <!-- modal -->
  <dialog id="my_modal_2" class="modal" :open="showModal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Gracias por contactárnos!</h3>
      <p class="py-4">Te responderemos pronto</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button @click="showModal = false">Cerrar</button>
    </form>
  </dialog>
</template>
