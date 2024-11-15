<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Generamos un índice aleatorio para expandir un hito al cargar
const panels = [
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito1.title")),
    description: computed(() => t("hitos.hitos.hito1.description")),
    link: "/about",
  },
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito2.title")),
    description: computed(() => t("hitos.hitos.hito2.description")),
    link: "/about",
  },
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito3.title")),
    description: computed(() => t("hitos.hitos.hito3.description")),
    link: "/about",
  },
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito4.title")),
    description: computed(() => t("hitos.hitos.hito4.description")),
    link: "/about",
  },
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito5.title")),
    description: computed(() => t("hitos.hitos.hito5.description")),
    link: "/about",
  },
  {
    image: "/imgs/gallery_image1.jpg",
    text: computed(() => t("hitos.hitos.hito6.title")),
    description: computed(() => t("hitos.hitos.hito6.description")),
    link: "/about",
  },
];

// Estado inicial aleatorio para expandedIndex
const expandedIndex = ref(Math.floor(Math.random() * panels.length));

const handleClick = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
};

onMounted(() => {
  // Aquí puedes agregar algún comportamiento adicional si es necesario al montar el componente.
});
</script>

<template>
  <div
    class="bg-primary rounded-xl shadow-xl min-h-screen w-screen flex flex-col items-center justify-between"
  >
    <div
      class="w-full flex flex-col md:flex-row items-center justify-center p-4 relative"
    >
      <!-- Contenedor de imágenes -->
      <div
        class="flex w-full max-w-7xl h-[60vh] md:h-[80vh] gap-3 items-center justify-center z-10"
      >
        <div
          v-for="(panel, index) in panels"
          :key="index"
          @click="handleClick(index)"
          :class="[
            'h-full rounded-2xl bg-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative',
            expandedIndex === index
              ? 'w-[80%] md:w-[60%]'
              : 'w-[15%] md:w-[10%] hover:bg-gray-200',
            'min-w-[40px] block',
          ]"
        >
          <!-- Imagen de fondo -->
          <img
            :src="panel.image"
            alt=""
            class="w-full h-full object-cover object-top"
          />

          <!-- Sombreado y texto sobre la imagen expandida -->
          <div
            v-if="expandedIndex === index"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-4 text-center"
          >
            <h2 class="text-lg md:text-2xl font-bold mb-2">{{ panel.text }}</h2>
            <p class="text-sm md:text-lg mb-4">{{ panel.description }}</p>
            <!-- Botón de enlace con el ícono de + -->
            <a :href="panel.link" class="mt-4">
              <Icon
                icon="mdi:plus"
                class="text-3xl md:text-4xl text-white hover:text-gray-300"
              />
            </a>
          </div>

          <!-- Texto sobre la imagen no expandida -->
          <div
            v-else
            class="absolute inset-0 flex items-center justify-center text-white text-sm md:text-xl font-bold"
            :class="{
              'transform rotate-270 origin-center': expandedIndex !== index, // Rota el texto cuando el panel está comprimido
            }"
          >
            {{ panel.text }}
          </div>
        </div>
      </div>

      <!-- Título principal -->
      <h1
        class="text-4xl md:text-7xl font-extrabold leading-tight md:leading-none md:text-right m-8 text-white text-center"
      >
        {{ $t("hitos.title") }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
/* Aseguramos que el texto esté correctamente alineado cuando se rota */
.transform.rotate-90 {
  transform: rotate(90deg);
  text-align: center;
  white-space: nowrap;
}

.origin-center {
  transform-origin: center;
}
</style>
