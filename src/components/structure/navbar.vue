<script setup lang="ts">
// Vue
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";
// Componentes
const { locale } = useI18n();
</script>

<template>
  <div class="fixed m-2 z-50 rounded bg-primary/30 backdrop-blur">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost flex items-center gap-2">
        <Icon icon="mdi:menu" class="text-white/80" />
        <span class="text-white/80">Menu</span>
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
