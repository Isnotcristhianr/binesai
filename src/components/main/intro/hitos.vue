<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const panels = [
  {
    image: "/imgs/hitos/gallery_1.jpg",
    text: computed(() => t("hitos.hitos.hito1.title")),
    description: computed(() => t("hitos.hitos.hito1.description")),
    link: "/about",
  },
  {
    image: "/imgs/hitos/gallery_2.jpeg",
    text: computed(() => t("hitos.hitos.hito2.title")),
    description: computed(() => t("hitos.hitos.hito2.description")),
    link: "/about",
  },
  {
    image: "/imgs/hitos/gallery_3.jpeg",
    text: computed(() => t("hitos.hitos.hito3.title")),
    description: computed(() => t("hitos.hitos.hito3.description")),
    link: "/about",
  },
  {
    image: "/imgs/hitos/gallery_4.jpeg",
    text: computed(() => t("hitos.hitos.hito4.title")),
    description: computed(() => t("hitos.hitos.hito4.description")),
    link: "/about",
  },
  {
    image: "/imgs/hitos/gallery_5.jpeg",
    text: computed(() => t("hitos.hitos.hito5.title")),
    description: computed(() => t("hitos.hitos.hito5.description")),
    link: "/about",
  },
  {
    image: "/imgs/hitos/gallery_6.jpeg",
    text: computed(() => t("hitos.hitos.hito6.title")),
    description: computed(() => t("hitos.hitos.hito6.description")),
    link: "/about",
  },
];

const expandedIndex = ref(Math.floor(Math.random() * panels.length));

const handleClick = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
};

onMounted(() => {
  // Additional behavior can be added here on component mount if needed.
});
</script>

<template>
  <div
    class="bg-primary rounded-xl shadow-xl min-h-screen w-screen flex flex-col items-center justify-center p-2 sm:p-4"
  >
    <div
      class="w-full flex flex-col-reverse md:flex-row items-center justify-center p-2 sm:p-4 gap-4"
    >
      <div
        class="flex w-full max-w-7xl h-[60vh] md:h-[80vh] gap-1 sm:gap-2 items-center justify-center"
      >
        <div
          v-for="(panel, index) in panels"
          :key="index"
          @click="handleClick(index)"
          :class="[
            'h-full rounded-xl sm:rounded-2xl bg-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative',
            expandedIndex === index
              ? 'w-[85%] sm:w-[80%] md:w-[55%] lg:w-[50%]'
              : 'w-[15%] sm:w-[20%] md:w-[15%] lg:w-[10%] hover:bg-gray-200',
            'min-w-[30px] sm:min-w-[40px] block',
          ]"
        >
          <img
            :src="panel.image"
            alt=""
            class="w-full h-full object-cover object-center"
          />

          <div
            v-if="expandedIndex === index"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/[.75] text-white p-3 sm:p-4 lg:p-6 text-center overflow-y-auto"
          >
            <div class="max-w-[90%] sm:max-w-[85%] mx-auto">
              <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                {{ panel.text }}
              </h2>
              <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 leading-tight sm:leading-relaxed">
                {{ panel.description }}
              </p>
              <a :href="panel.link" class="mt-2 sm:mt-3 inline-block">
                <Icon
                  icon="mdi:plus"
                  class="text-2xl sm:text-3xl md:text-4xl text-white hover:text-gray-300"
                />
              </a>
            </div>
          </div>

          <div
            v-else
            class="absolute inset-0 flex items-center justify-center text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg font-bold"
            :class="{
              'transform rotate-90 origin-center': expandedIndex !== index,
            }"
          >
            <span class="px-1">{{ panel.text }}</span>
          </div>
        </div>
      </div>

      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white text-center m-2 sm:m-4"
      >
        {{ $t("hitos.title") }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
.transform.rotate-90 {
  transform: rotate(90deg);
  text-align: center;
  white-space: nowrap;
}

.origin-center {
  transform-origin: center;
}

/* Añadir estilos para el scroll suave */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
}
</style>
