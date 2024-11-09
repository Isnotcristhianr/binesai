<script setup lang="ts">
// Vue
import { ref } from "vue";
// Importamos el hook useI18n para manejar los idiomas
import { useI18n } from "vue-i18n";

// Componentes
const { locale } = useI18n();
</script>

<template>
  <div class="fixed m-2 z-50 rounded bg-primary/30 backdrop-blur">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
        <span>Menu</span>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
</template>
