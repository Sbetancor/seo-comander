<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Import your Vue-based icon components
import IconHome from '../icons/IconHome.vue'
import IconContacts from '../icons/IconContacts.vue'
import IconGraph from '../icons/IconGraph.vue'
import IconTable from '../icons/IconTable.vue'
// Sidebar state
const isExpanded = ref(false);

// Menu items with a mix of Vue components and raw SVGs
const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: IconHome, // Use imported Vue component
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: IconContacts,
  },
  {
    name: "estadisticas",
    path: "/estadisticas",
    icon: IconGraph,
  },
  {
    name: "table",
    path: "/table",
    icon: IconTable,
  },
];
</script>

<template>
  <aside
    class="h-screen bg-blue-900 text-white transition-all duration-400 flex flex-col"
    :class="isExpanded ? 'w-64' : 'w-16'"
    @mouseover="isExpanded = true"
    @mouseleave="isExpanded = false"
  >
    <!-- Sidebar Header -->
    <div class="flex items-center p-4">
      <span v-if="isExpanded" class="ml-2 text-lg font-semibold">The App</span>
    </div>

    <!-- Sidebar Menu -->
    <nav class="flex-1 px-1 space-y-2">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-2 rounded transition hover:bg-blue-700"
      >
        <!-- Use Vue components dynamically -->
        <component v-if="item.icon !== 'svg'" :is="item.icon" class="w-6 h-6" />

        <span v-if="isExpanded" class="ml-3">{{ item.name }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>
