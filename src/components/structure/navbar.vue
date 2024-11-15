<script setup lang="ts">
// Vue
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

// Componentes
const { locale } = useI18n();
const toggleLocale = () => {
  locale.value = locale.value === "en" ? "es" : "en";
};
</script>

<template>
  <div class="fixed m-2 z-50 rounded bg-primary/30 backdrop-blur">
    <div class="dropdown">
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost flex items-center gap-2"
      >
        <Icon icon="mdi:menu" class="text-white/80" />
        <span class="text-white/80">Menu</span>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/auspiciantes">Auspiciantes</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/programacion">Programacion</router-link></li>
        <li>
          <div class="divider"></div>
          <div class="flex flex-col items-start gap-2 p-2">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:tools" class="text-gray-500" />
              <span class="text-gray-500">{{ $t("setup") }}</span>
            </div>
            <button
              @click="toggleLocale"
              class="btn btn-ghost w-full text-left flex items-center justify-between gap-2"
            >
              <Icon icon="mdi:translate" class="text-gray-500" /><span>{{
                locale === "es" ? "Español" : "English"
              }}</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
