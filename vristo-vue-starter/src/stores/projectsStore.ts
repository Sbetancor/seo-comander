import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { clients } from "@/projects"; // Import the projects data

// Define types for the structure
interface Task {
  id: number;
  name: string;
  start_day: string;
  end_day: string;
  total_hours: number;
  priority: string;
  type: string;
  status: string;
}

interface Project {
  id: number;
  name: string;
  color: string;
  start_day: string;
  end_day: string;
  estimated_hours: number;
  total_hours: number;
  tasks: Task[];
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  projects: Project[];
}

// Pinia store using the setup API
export const useProjectsStore = defineStore("projectsStore", () => {
  // State
  const projects = ref<Project[]>(clients.flatMap((client: Client) => client.projects));
  const selectedProject = ref<Project | null>(null);

  // Actions
  const setSelectedProject = (id: number) => {
    selectedProject.value = projects.value.find((project) => project.id === id) || null;
  };

  // Getters
  const getSelectedProject = computed(() => selectedProject.value);

  return {
    projects,
    selectedProject,
    setSelectedProject,
    getSelectedProject,
  };
});
