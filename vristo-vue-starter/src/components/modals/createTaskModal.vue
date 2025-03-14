<template>
    <div class="mb-5">
        <!-- Modal -->
        <TransitionRoot appear :show="isCreateTaskModalOpen" as="template">
            <Dialog as="div" @close="modalStore.closeModal('createTaskModal')" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>
                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-start justify-center px-4 py-8">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                <button type="button"
                                    class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    @click="modalStore.closeModal('createTaskModal')">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <div
                                    class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                    Nueva tarea
                                </div>
                                <div class="p-5">
                                    <form class="space-y-5">
                                        <div>
                                            <input type="email" placeholder="Nombre" class="form-input" />
                                        </div>
                                        <div>
                                            <input type="password" placeholder="Duración estimada" class="form-input" />
                                        </div>
                                        <multiselect v-model="input2" :options="optionsSelect2"
                                            class="custom-multiselect" :searchable="false" :preselect-first="true"
                                            :allow-empty="false" selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                        <multiselect v-model="input1" :options="optionsSelect1"
                                            class="custom-multiselect" :searchable="false" :preselect-first="true"
                                            :allow-empty="false" selected-label="" select-label="" deselect-label="">
                                        </multiselect>


                                    </form>
                                    <div class="flex justify-end items-center mt-8">
                                        <button type="button" @click="modalStore.closeModal('createTaskModal')"
                                            class="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup>
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import { ref } from 'vue';
import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { computed } from 'vue';
import { useModalStore } from '@/stores/modal';
const optionsSelect2 = ref(['Tipo', 'SEO Técnico', 'SEO de Contenido', 'SEO Linkbuilding']);
const input2 = ref('Tipo');
const optionsSelect1 = ref(['Asignar a', 'Raúl Díaz', 'John Doe', 'Adriel Perez']);
const input1 = ref('Asignar a');

const modalStore = useModalStore();
const isCreateTaskModalOpen = computed(() => modalStore.isModalOpen('createTaskModal'));
</script>
