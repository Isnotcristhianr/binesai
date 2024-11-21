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
    class="bg-primary rounded-xl shadow-xl min-h-screen w-screen flex flex-col items-center justify-center p-4"
  >
    <div
      class="w-full flex flex-col md:flex-row items-center justify-center p-4 gap-4"
    >
      <div
        class="flex w-full max-w-7xl h-[60vh] md:h-[80vh] lg:h-[80vh] gap-2 items-center justify-center"
      >
        <div
          v-for="(panel, index) in panels"
          :key="index"
          @click="handleClick(index)"
          :class="[
            'h-full rounded-2xl bg-white cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative',
            expandedIndex === index
              ? 'w-[70%] md:w-[55%] lg:w-[50%]'
              : 'w-[20%] md:w-[15%] lg:w-[10%] hover:bg-gray-200',
            'min-w-[40px] block',
          ]"
        >
          <img
            :src="panel.image"
            alt=""
            class="w-full h-full object-cover object-top"
          />

          <div
            v-if="expandedIndex === index"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/[.60] text-white p-2 lg:p-4 text-center"
          >
            <h2 class="text-sm md:text-lg lg:text-2xl font-bold mb-1 lg:mb-2 ">
              {{ panel.text }}
            </h2>
            <p class="text-xs md:text-sm lg:text-lg mb-2 lg:mb-4">
              {{ panel.description }}
            </p>
            <a :href="panel.link" class="mt-2 lg:mt-4">
              <Icon
                icon="mdi:plus"
                class="text-2xl md:text-3xl lg:text-4xl text-white hover:text-gray-300"
              />
            </a>
          </div>

          <div
            v-else
            class="absolute inset-0 flex items-center justify-center text-gray-100 text-xs md:text-sm lg:text-xl font-bold border-2 border-black"
            :class="{
              'transform rotate-90 origin-center': expandedIndex !== index,
            }"
          >
            {{ panel.text }}
          </div>
        </div>
      </div>

      <h2
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white text-center m-4"
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
</style>
