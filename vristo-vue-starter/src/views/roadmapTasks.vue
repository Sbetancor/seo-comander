<template>
  <div class="p-6">
    <div class="flex justify-between items-center">
      <!-- Nombre del proyecto seleccionado -->
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        {{ selectedProject ? selectedProject.name : "Selecciona un proyecto" }}
      </h1>
      <router-link to="/roadmap">
        <button type="button" class="btn btn-secondary" @click="prevStep">Ir a proyectos</button>
      </router-link>
    </div>
       <!-- Filtros -->
    
    <!-- Card Wrapper for Roadmap -->
    <div class="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <!-- Cabecera de días -->
      <div class="flex bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-bold p-1 rounded">
        <div v-for="day in days" :key="day" class="flex-1 text-center p-2 border-l dark:border-gray-600">
          {{ day }}
        </div>
      </div>

      <!-- Lista de Tareas -->
      <div v-if="selectedProject && selectedProject.tasks.length" class="client-row flex border-b dark:border-gray-600">
        <div class="flex-1 flex flex-col">
          <div v-for="task in selectedProject.tasks" :key="task.id" class="relative my-1 group">
            <div
              class="absolute text-white font-semibold rounded-md p-2 overflow-hidden whitespace-nowrap cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg"
              :style="{
                backgroundColor: selectedProject.color,
              }">
              <span class="truncate block">{{ task.name }}</span>
            </div>
            <div class="h-10"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { useRouter } from "vue-router";
import { clients } from '@/projects';

const projectStore = useProjectsStore();
const selectedProject = computed(() => projectStore.selectedProject);
const router = useRouter();
const selectedClient = ref(null);

const allProjects = computed(() => {
  if (!selectedClient.value) {
    return clients.flatMap(client => client.projects);
  }
  return selectedClient.value.projects || [];
});

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
