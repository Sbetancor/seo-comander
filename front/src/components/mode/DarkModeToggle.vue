<script setup lang="ts">
import { ref, onMounted } from "vue";

// Reactive variable to track dark mode state
const isDarkMode = ref<boolean>(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};

// On mount: Check localStorage & system preference
onMounted(() => {
  const savedTheme = localStorage.getItem("color-theme");

  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
  } else {
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Apply the dark class to <html> accordingly
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="isDarkMode"
      @change="toggleDarkMode"
      class="sr-only peer"
    />
    <div
      class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
    ></div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      {{ isDarkMode ? "Modo claro" : "Modo noche" }}
    </span>
  </label>
</template>
