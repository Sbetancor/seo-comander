<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import Sidebar from '../components/sidebar/Sidebar.vue'
import Header from '../components/header/Header.vue'

</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
  
      <Sidebar/>
      
    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Header -->

     <Header/>

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <RouterView />
      </main>

      <!-- Footer -->
      <footer class="bg-gray-200 text-center p-4">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>
