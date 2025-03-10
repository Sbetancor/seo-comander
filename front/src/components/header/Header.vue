<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import DarkModeToggle from '../mode/DarkModeToggle.vue'


</script>
<template>
<header class="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 class="text-lg font-semibold">App Header hola</h1>
    <DarkModeToggle/>
  </header>
</template>
