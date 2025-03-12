<template>
    <div>
    <div class="flex justify-end">
        <router-link to="/newClient"> <button type="button" class="btn btn-primary">Agregar cliente</button>
        </router-link>
    </div>

        <div class="panel pb-0 mt-6">
            <div class="datatable">
                <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :sortable="true"
                    skin="whitespace-nowrap bh-table-hover"
                    firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                    lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
                    previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                    nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'>
                    <template #id="data">
                        <strong class="text-info">#{{ data.value.id }}</strong>
                    </template>
                    <template #name="data">
                        <div class="flex items-center gap-2">
                            <img :src="`/assets/images/profile-${getRandomNumber(1, 34)}.jpeg`"
                                class="w-9 h-9 rounded-full max-w-none" alt="user-profile" />
                            <div class="font-semibold">{{ data.value.name }}</div>
                        </div>
                    </template>

                    <template #email="data">
                        <a :href="`mailto:${data.value.email}`" class="text-primary hover:underline">{{ data.value.email
                        }}</a>
                    </template>
                    <template #series="data">
                        <div
                            class="group cursor-pointer flex items-center justify-center p-2 rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-700">
                            <div
                                class="transition-transform transform group-hover:scale-110 text-gray-500 group-hover:text-blue-500 dark:text-white ">
                                <router-link :to="'/projects'">
                                <icon-eye />
                                </router-link>
                            </div>
                        </div>
                    </template>

                </vue3-datatable>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/stores/index';
import { useMeta } from '@/composables/use-meta';
import { clients } from '@/projects'; // Ensure correct path
import IconEye from '@/components/icon/icon-eye.vue';
useMeta({ title: 'Advanced Table' });
const store = useAppStore();
const i18n = reactive(useI18n());
const cols = ref([
    { field: 'id', title: 'ID', isUnique: true },
    { field: 'name', title: 'Cliente' },
    { field: 'email', title: 'Email' },
    { field: 'phone', title: 'Phone' },
    { field: 'series', title: 'Proyectos', sort: false },

]);

const rows = ref(clients.map(client => ({
    id: client.id,
    name: client.name,
    email: client.email,
    phone: client.phone,
})));

const chart_options = computed(() => {
    let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        markers: { size: [4, 7], strokeWidth: 0 },
        colors: [randomColor()],
        grid: { padding: { top: 5, bottom: 5 } },
        tooltip: {
            x: { show: false },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
    };
    return option;
});

const randomColor = () => {
    const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
};


const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
</script>
