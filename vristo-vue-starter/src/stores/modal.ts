import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

interface ModalState {
  [key: string]: boolean;
}

export const useModalStore = defineStore('modal', () => {
  const modals = reactive<ModalState>({});

  const openModal = (modalName: string) => {
    modals[modalName] = true;
  };

  const closeModal = (modalName: string) => {
    modals[modalName] = false;
  };

  const isModalOpen = (modalName: string): boolean => {
    return !!modals[modalName];
  };

  return { modals, openModal, closeModal, isModalOpen };
});
