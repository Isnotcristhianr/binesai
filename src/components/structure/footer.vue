<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
<footer class="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer class="footer bg-base-200 text-base-content border-t border-base-300 px-5 py-4 flex flex-col md:flex-row justify-between items-center">
  <aside class="flex items-center space-x-4">
    <img src="/imgs/Logo BINESAI completo.png" alt="Logo BINESAI" class="h-12 w-auto rounded-lg" />
    <div class="text-center md:text-left">
      <p class="text-lg font-semibold">BINESAI</p>
      <p class="text-sm">© 2024 BINESAI</p>
      <p class="text-xs">Desarrollado por <a href="https://www.isnotcristhianr.me/" target="_blank" class="link">IsnotCristianr.dev</a></p>
    </div>
  </aside>
  <nav class="flex space-x-3 mt-4 md:mt-0">
    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
      <Icon icon="mdi:facebook" class="text-3xl" />
    </a>
    <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
      <Icon icon="mdi:twitter" class="text-3xl" />
    </a>
    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
      <Icon icon="mdi:instagram" class="text-3xl" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
      <Icon icon="mdi:linkedin" class="text-3xl" />
    </a>
  </nav>
</footer>
</template>
