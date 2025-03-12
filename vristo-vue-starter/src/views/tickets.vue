<template>
    <div class="p-6 flex gap-6">
      <!-- Ticket Details Sidebar -->
      <div class="w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-200">Detalles del Ticket</h2>
        <div class="border-t border-gray-300 dark:border-gray-600 pt-4 space-y-2">
          <p><strong>Cliente:</strong> {{ ticket.client || 'Ninguno' }}</p>
          <p><strong>Proyecto:</strong> {{ ticket.project || 'Ninguno' }}</p>
          <p><strong>Referencia:</strong> {{ ticket.reference }}</p>
          <p><strong>Estado:</strong> {{ ticket.status }}</p>
          <p><strong>Técnico:</strong> {{ ticket.technician }}</p>
          <p><strong>Website:</strong> {{ ticket.website }}</p>
          <p><strong>Tipo:</strong> {{ ticket.type }}</p>
          <p><strong>Prioridad:</strong> {{ ticket.priority }}</p>
          <p><strong>Situación:</strong> {{ ticket.situation }}</p>
          <p><strong>Garantía hasta:</strong> {{ ticket.warranty }}</p>
        </div>
      </div>
  
      <!-- Chat and Actions -->
      <div class="w-2/3 flex flex-col">
        <!-- Action Buttons -->
        <div class="flex justify-between mb-4">
          <button class="btn btn-danger">Cerrar incidencia</button>
          <button class="btn btn-secondary">Enviar correo</button>
        </div>
  
        <!-- Notification Banner -->
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p class="text-yellow-700 text-sm">
            Se informa a los usuarios sobre los tiempos de respuesta estándares para clientes con el servicio de mantenimiento.
          </p>
        </div>
  
        <!-- Comments Section -->
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">Conversación</h3>
          <div v-for="comment in comments" :key="comment.id" class="border-b pb-4 mb-4">
            <p class="text-gray-700 dark:text-gray-300 font-semibold">{{ comment.user }} ({{ comment.email }}) comentó:</p>
            <p class="text-gray-600 dark:text-gray-400">{{ comment.message }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ comment.timestamp }}</p>
          </div>
        </div>
  
        <!-- New Message Input -->
        <div class="mt-4">
          <textarea class="form-input w-full" placeholder="Escribe tu mensaje..."></textarea>
          <button class="btn btn-primary mt-2">Enviar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const ticket = ref({
    client: 'Ninguno',
    project: 'Ninguno',
    reference: 'TCK3303 - Modificaciones Web',
    status: 'Abierto',
    technician: 'Eduardo Hernández Parra',
    website: 'cover-island.es',
    type: 'Web',
    priority: 'Media',
    situation: 'Solicitud de modificación',
    warranty: '06/02/2025',
  });
  
  const comments = ref([
    {
      id: 1,
      user: 'Eduardo Hernández Parra',
      email: 'eduardo@cocosolution.com',
      message: 'Buenas tardes Alejandro, podemos activar el proyecto.',
      timestamp: 'Hoy a las 13:27',
    },
    {
      id: 2,
      user: 'Eduardo Hernández Parra',
      email: 'eduardo@cocosolution.com',
      message: 'Aviso a administración para enviar proforma.',
      timestamp: 'Miércoles pasado a las 14:58',
    },
  ]);
  </script>
  