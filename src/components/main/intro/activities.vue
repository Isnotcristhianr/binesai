<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="flex justify-center">
        <div class="inline-block text-center bg-base-100 shadow-xl p-4 rounded-lg m-4">
            <span class="text-lg font-medium mx-4">
                {{ $t("dosier.text") }}
            </span>
            <a href="/docs/Dossier_BINESAI.pdf" download class="download-button btn btn-primary mt-2">
                <Icon icon="mdi:download" class="text-white/80" />
                {{ $t("dosier.down") }}
            </a>
        </div>
    </div>
</template>