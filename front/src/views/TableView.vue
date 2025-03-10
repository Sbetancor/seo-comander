<script setup>
import { ref, computed } from "vue";
import { clients } from "../../../vristo-vue-starter/src/projects"; // Import clients

// Selected Filters
const selectedClient = ref(""); // Selected client ID
const selectedProject = ref(""); // Selected project ID

// Convert date format "DD-MM-YYYY" to month index (0 = Jan, 11 = Dec)
const getMonthIndex = (dateString) => {
  if (!dateString) return null;
  const parts = dateString.split("-"); // Split "DD-MM-YYYY"
  return parseInt(parts[1], 10) - 1; // Convert MM to month index (0-based)
};

// Computed: Get projects based on selected client
const allProjects = computed(() => {
  let projects = clients.flatMap(client => client.projects);

  // If a client is selected, show only its projects
  if (selectedClient.value) {
    const client = clients.find(client => client.id === selectedClient.value);
    projects = client ? client.projects : [];
  }

  return projects;
});

// Computed: Filter clients based on selected client or project
const filteredClients = computed(() => {
  return clients
    .map(client => {
      // If a client is selected, show only that client
      if (selectedClient.value && client.id !== selectedClient.value) {
        return null;
      }

      // If a project is selected, show only that project inside its client
      const filteredProjects = client.projects.filter(project =>
        !selectedProject.value || project.id === selectedProject.value
      );

      return filteredProjects.length ? { ...client, projects: filteredProjects } : null;
    })
    .filter(Boolean);
});

// Months for display
const months = ref([
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
]);
</script>

<template>
    <div class="p-6">
        <!-- Filters -->
        <div class="flex gap-4 mb-6 justify-end">
            <!-- Client Filter -->
            <select v-model="selectedClient" class="p-2 border rounded">
                <option value="">Ver todos los Clientes</option>
                <option v-for="client in clients" :key="client.id" :value="client.id">
                    {{ client.name }}
                </option>
            </select>

            <!-- Project Filter -->
            <select v-model="selectedProject" class="p-2 border rounded">
                <option value="">Ver todos los Proyectos</option>
                <option v-for="project in allProjects" :key="project.id" :value="project.id">
                    {{ project.name }}
                </option>
            </select>
        </div>

        <!-- Roadmap Container -->
        <div class="w-full">
            <!-- Months Header -->
            <div class="flex bg-gray-100 font-bold p-2 rounded">
                <div class="w-48 p-2 flex justify-center">Clientes</div>
                <div v-for="month in months" :key="month" class="flex-1 text-center p-2 border-l">
                    {{ month }}
                </div>
            </div>

            <!-- Clients & Projects -->
            <div v-for="client in filteredClients" :key="client.id" class="client-row flex border-b">
                <!-- Client Name -->
                <div class="w-48 flex flex-col justify-center m-1 text-white font-semibold text-center rounded"
                    :style="{ backgroundColor: client.projects[0]?.color }">
                    {{ client.name }}
                </div>

                <!-- Projects -->
                <div class="flex-1 flex flex-col">
                    <div v-for="project in client.projects" :key="project.id" class="relative my-1">
                        <!-- Project Block -->
                        <div class="absolute text-white font-semibold rounded-md p-2 overflow-hidden whitespace-nowrap cursor-pointer"
                            :style="{
                                backgroundColor: project.color,
                                left: `${(getMonthIndex(project.start_day) / 12) * 100}%`,
                                width: `${((getMonthIndex(project.end_day) - getMonthIndex(project.start_day) + 1) / 12) * 100}%`,
                            }">
                            <span class="truncate block">{{ project.name }}</span>
                        </div>

                        <div class="h-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
