<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Lista de miembros del equipo
const teamMembers = [
  {
    image: "/imgs/team/team1.webp",
    name: computed(() => t("team.member1.name")),
    title: computed(() => t("team.member1.title")),
    description: computed(() => t("team.member1.description")),
  },
  {
    image: "/imgs/team/team1.webp",
    name: computed(() => t("team.member2.name")),
    title: computed(() => t("team.member2.title")),
    description: computed(() => t("team.member2.description")),
  },
  {
    image: "/imgs/team/team1.webp",
    name: computed(() => t("team.member3.name")),
    title: computed(() => t("team.member3.title")),
    description: computed(() => t("team.member3.description")),
  },
  {
    image: "/imgs/team/team1.webp",
    name: computed(() => t("team.member4.name")),
    title: computed(() => t("team.member4.title")),
    description: computed(() => t("team.member4.description")),
  },
];
</script>

<template>
  <section class="bg-primary py-8 px-4 md:px-8">
    <!-- Título principal -->
    <h2 class="text-5xl sm:text-5xl font-bold text-center text-white mb-8">
      {{ $t("team.title") }}
    </h2>

    <!-- Contenedor del equipo -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
    >
      <!-- Tarjetas de miembros -->
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
        :class="{
          'bg-transparent': !member.image.includes('white_background'),
        }"
      >
        <!-- Imagen del miembro -->
        <div class="relative h-128">
          <img
            :src="member.image"
            alt="member"
            class="w-full h-full"
            style="mask-image: linear-gradient(black 80%, transparent)"
          />
        </div>
        <!-- Detalles del miembro -->
        <div class="p-6 text-center bg-white">
          <h3 class="text-2xl font-bold text-black mt-4">
            {{ member.name }}
          </h3>
          <p class="text-sm font-medium text-black">
            {{ member.title }}
          </p>
          <p class="text-black text-sm mt-4">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
