<template>
    <div class="p-6">
        <!-- Nombre del poryecto seleccionado-->
        <h1 class="text-2xl font-semibold mb-6">
      {{ selectedProject ? selectedProject.name : "Selecciona un proyecto" }}
    </h1>
    
      <!-- Contenedor de Roadmap -->
      <div class="w-full">
        <!-- Cabecera de dìas -->
        <div class="flex bg-gray-100 font-bold p-2 rounded">
          <div v-for="day in days" :key="day" class="flex-1 text-center p-2 border-l">
            {{ day }}
          </div>
        </div>
  
        <!-- Lista de Clientes y Proyectos -->
        <div v-if="selectedProject && selectedProject.tasks.length" class="client-row flex border-b">
  <!-- Lista de Tareas -->
  <div class="flex-1 flex flex-col">
    <div v-for="task in selectedProject.tasks" :key="task.id" class="relative my-1 group">
      <!-- Tarea con color del proyecto -->
      <div
        class="absolute text-white font-semibold rounded-md p-2 overflow-hidden whitespace-nowrap cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg"
        :style="{
          backgroundColor: selectedProject.color, // Use the selected project's color
        }">
        <span class="truncate block">{{ task.name }}</span>
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
const selectedProject = computed(() => projectStore.selectedProject);
  const router = useRouter();
  const selectedClient = ref(null);

  
  // Get available projects based on selected client
  const allProjects = computed(() => {
    if (!selectedClient.value) {
      return clients.flatMap(client => client.projects);
    }
    return selectedClient.value.projects || [];
  });
  // List of days
  const days = ref([
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado",
"Domingo"
  ]);
  </script>
  