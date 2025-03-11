<template>
  <div class="p-6">
    <!-- Filtros -->
    <div class="flex gap-4 mb-6 justify-end">
      <!-- Selector de Clientes -->
      <multiselect v-model="selectedClient" :options="clients" class="custom-multiselect" :searchable="true"
        :preselect-first="false" :allow-empty="true" selected-label="" select-label="" deselect-label="" label="name"
        track-by="id" placeholder="Ver todos los Clientes" />
      <multiselect v-model="selectedProject" :options="allProjects" class="custom-multiselect" :searchable="true"
        :preselect-first="false" :allow-empty="true" selected-label="" select-label="" deselect-label="" label="name"
        track-by="id" placeholder="Ver todos los Proyectos" />
    </div>
    <!-- Contenedor de Roadmap -->
    <div class="w-full">
      <!-- Cabecera de Meses -->
      <div class="flex bg-gray-100 font-bold p-2 rounded">
        <div class="w-48 p-2 flex justify-center">Clientes</div>
        <div v-for="month in months" :key="month" class="flex-1 text-center p-2 border-l">
          {{ month }}
        </div>
      </div>

      <!-- Lista de Clientes y Proyectos -->
      <div v-for="client in filteredClients" :key="client.id" class="client-row flex border-b">
        <!-- Nombre del Cliente -->
        <div class="w-48 flex flex-col justify-center m-1 text-white font-semibold text-center rounded"
          :style="{ backgroundColor: client.projects[0]?.color }">
          {{ client.name }}
        </div>

        <!-- Lista de Proyectos -->
        <div class="flex-1 flex flex-col">
          <div v-for="project in client.projects" :key="project.id" class="relative my-1 group"
            @click="navigateToTasks(project.id)">
            <!-- Efecto hover: escalado + sombra -->
            <div
              class="absolute text-white font-semibold rounded-md p-2 overflow-hidden whitespace-nowrap cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg"
              :style="{
                backgroundColor: project.color,
                left: `${(getMonthIndex(project.start_day) / 12) * 100}%`,
                width: `${((getMonthIndex(project.end_day) - getMonthIndex(project.start_day) + 1) / 12) * 100}%`,
              }">
              <span class="truncate block">{{ project.name }}</span>
            </div>
            <!-- Espaciado -->
            <div class="h-10"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import { useRouter } from "vue-router";
import { clients } from '@/projects';
import { useProjectsStore } from "@/stores/projectsStore";
const projectStore = useProjectsStore();
const router = useRouter();
const selectedClient = ref(null);
const selectedProject = ref(null);

// Get available projects based on selected client
const allProjects = computed(() => {
  if (!selectedClient.value) {
    return clients.flatMap(client => client.projects);
  }
  return selectedClient.value.projects || [];
});

// Filter clients based on selected client or project
const filteredClients = computed(() => {
  return clients
    .map(client => {
      // If a client is selected, show only that client
      if (selectedClient.value && client.id !== selectedClient.value.id) {
        return null;
      }

      // Filter projects based on selected project
      const filteredProjects = client.projects.filter(project =>
        !selectedProject.value || project.id === selectedProject.value.id
      );

      return filteredProjects.length ? { ...client, projects: filteredProjects } : null;
    })
    .filter(Boolean);
});

// Watch for changes in selectedClient to reset selectedProject
watch(selectedClient, (newClient) => {
  if (!newClient) {
    selectedProject.value = null; // Reset project selection
  }
});
const navigateToTasks = (id) => {
  projectStore.setSelectedProject(id); 
  router.push(`/roadmapTask/${id}`);
};
// Function to convert dates to month indices
const getMonthIndex = (dateString) => {
  if (!dateString) return null;
  const parts = dateString.split("-");
  return parseInt(parts[1], 10) - 1;
};

// List of months
const months = ref([
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
]);
</script>


<!-- tooltip para truncate
<button type="button" v-tippy:top class="btn btn-info">Tooltip on top</button>
<tippy target="top" placement="top">Popover on top</tippy> -->