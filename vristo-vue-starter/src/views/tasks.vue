<template>
    <div>
        <div class="flex  justify-between items-center mb-2">
            <h5 class="font-semibold text-lg dark:text-white-light mb-5 ">Tareas</h5>
            <div class="flex gap-4">
                <router-link to="/scrumboard" class="btn btn-secondary">
                    Ver en Kanban
                </router-link>
                <button @click="modalStore.openModal('createTaskModal')" type="button" class="btn btn-primary">Crear
                    tarea</button>
            </div>
        </div>
        <div class="flex items-center gap-4">
        <multiselect
          v-model="input2"
          :options="optionsSelect2"
          class="custom-multiselect"
          :searchable="false"
          :preselect-first="true"
          :allow-empty="false"
          selected-label=""
          select-label=""
          deselect-label=""
        ></multiselect>
   
        <multiselect
          v-model="input4"
          :options="optionsSelect4"
          class="custom-multiselect"
          :searchable="false"
          :preselect-first="true"
          :allow-empty="false"
          selected-label=""
          select-label=""
          deselect-label=""
        ></multiselect>
        <multiselect
          v-model="input"
          :options="optionsSelect"
          class="custom-multiselect"
          :searchable="false"
          :preselect-first="true"
          :allow-empty="false"
          selected-label=""
          select-label=""
          deselect-label=""
        ></multiselect>
        <multiselect
          v-model="input3"
          :options="optionsSelect3"
          class="custom-multiselect"
          :searchable="false"
          :preselect-first="true"
          :allow-empty="false"
          selected-label=""
          select-label=""
          deselect-label=""
        ></multiselect>
    
    </div>
        <createTaskModal />
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
                    <template #firstName="data">
                        <div class="flex items-center gap-2">
                            <img :src="`/assets/images/profile-${getRandomNumber(1, 34)}.jpeg`"
                                class="w-9 h-9 rounded-full max-w-none" alt="user-profile" />
                            <div class="font-semibold">{{ data.value.firstName + ' ' + data.value.lastName }}</div>
                        </div>
                    </template>
                    <template #nombre="data">
                        <a :href="`mailto:${data.value.nombre}`" class="text-primary hover:underline">{{ data.value.nombre
                            }}</a>
                    </template>
                  
                    <template #age="data">
                        <div
                            class="w-4/5 min-w-[100px] h-3.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex items-center relative">
                            <div class="h-3.5 rounded-full text-center text-white text-xs flex items-center justify-center"
                                :class="`bg-${randomStatusColor()}`" :style="`width:${getRandomNumber(15, 100)}%`">
                                <span class="absolute w-full text-center text-xs font-bold">{{ getRandomNumber(15, 100)
                                    }}%</span>
                            </div>
                        </div>
                    </template>
                    <template #status>
                        <span class="badge" :class="`badge-outline-${randomStatusColor()}`">{{ randomStatus() }}</span>
                    </template>
                </vue3-datatable>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import apexchart from 'vue3-apexcharts';
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/stores/index';
import { useMeta } from '@/composables/use-meta';
import createTaskModal from '@/components/modals/createTaskModal.vue';
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();
const optionsSelect = ref(['Prioridad', 'Alta', 'Media' , 'Baja']);
const input = ref('Prioridad');
const optionsSelect2 = ref(['Proyecto']);
const input2 = ref('Proyecto');
const optionsSelect3 = ref(['Estado','En progreso', 'Completado', 'Pendiente']);
const input3 = ref('Estado');
const optionsSelect4 = ref(['Tipo','SEO Técnico', 'SEO de Contenido', 'SEO Linkbuilding']);
const input4 = ref('Tipo');

const store = useAppStore();
// multi language
const i18n = reactive(useI18n());
const cols = ref([
    { field: 'id', title: 'ID', isUnique: true },
    { field: 'firstName', title: 'Proyecto' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'age', title: 'Progress', sort: false },
    { field: 'tipo', title: 'Tipo', sort: false },   
    { field: 'status', title: 'Status', sort: false },
]);
const rows = ref([
    {
        id: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        nombre: 'Nombre de la Tarea',
        dob: '2004-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        tipo: 'SEO Técnico',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        nombre: 'Nombre de la Tarea',
        dob: '1989-11-19',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        tipo: 'SEO Técnico',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 3,
        firstName: 'Tillman',
        lastName: 'Forbes',
        nombre: 'Nombre de la Tarea',
        dob: '2016-09-05',
        address: {
            street: '240 Vandalia Avenue',
            city: 'Thynedale',
            zipcode: 8994,
            geo: {
                lat: -34.949388,
                lng: -82.958111,
            },
        },
        tipo: 'SEO Técnico',
        isActive: false,
        age: 26,
        company: 'APPLIDECK',
    },
    {
        id: 4,
        firstName: 'Daisy',
        lastName: 'Whitley',
        nombre: 'Nombre de la Tarea',
        dob: '1987-03-23',
        address: {
            street: '350 Pleasant Place',
            city: 'Idledale',
            zipcode: 9369,
            geo: {
                lat: -54.458809,
                lng: -127.476556,
            },
        },
        tipo: 'SEO Técnico',
        isActive: true,
        age: 21,
        company: 'VOLAX',
    },
    {
        id: 5,
        firstName: 'Weber',
        lastName: 'Bowman',
        nombre: 'Nombre de la Tarea',
        dob: '1983-02-24',
        address: {
            street: '154 Conway Street',
            city: 'Broadlands',
            zipcode: 8131,
            geo: {
                lat: 54.501351,
                lng: -167.47138,
            },
        },
        tipo: 'SEO Técnico',
        isActive: false,
        age: 26,
        company: 'ORBAXTER',
    },
    {
        id: 6,
        firstName: 'Buckley',
        lastName: 'Townsend',
        nombre: 'Nombre de la Tareacom',
        dob: '2011-05-29',
        address: {
            street: '131 Guernsey Street',
            city: 'Vallonia',
            zipcode: 6779,
            geo: {
                lat: -2.681655,
                lng: 3.528942,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 40,
        company: 'OPPORTECH',
    },
    {
        id: 7,
        firstName: 'Latoya',
        lastName: 'Bradshaw',
        nombre: 'Nombre de la Tareacom',
        dob: '2010-11-23',
        address: {
            street: '668 Lenox Road',
            city: 'Lowgap',
            zipcode: 992,
            geo: {
                lat: 36.026423,
                lng: 130.412198,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 24,
        company: 'GORGANIC',
    },
    {
        id: 8,
        firstName: 'Kate',
        lastName: 'Lindsay',
        nombre: 'Nombre de la Tarea',
        dob: '1987-07-02',
        address: {
            street: '773 Harrison Avenue',
            city: 'Carlton',
            zipcode: 5909,
            geo: {
                lat: 42.464724,
                lng: -12.948403,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 24,
        company: 'AVIT',
    },
    {
        id: 9,
        firstName: 'Marva',
        lastName: 'Sandoval',
        nombre: 'Nombre de la Tarea',       
         dob: '2010-11-02',
        address: {
            street: '200 Malta Street',
            city: 'Tuskahoma',
            zipcode: 1292,
            geo: {
                lat: -52.206169,
                lng: 74.19452,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: false,
        age: 28,
        company: 'QUILCH',
    },
    {
        id: 10,
        firstName: 'Decker',
        lastName: 'Russell',
        nombre: 'Nombre de la Tarea',
        dob: '1994-04-21',
        address: {
            street: '708 Bath Avenue',
            city: 'Coultervillle',
            zipcode: 1268,
            geo: {
                lat: -41.550295,
                lng: -146.598075,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: false,
        age: 27,
        company: 'MEMORA',
    },
    {
        id: 11,
        firstName: 'Odom',
        lastName: 'Mills',
        nombre: 'Nombre de la Tarea',
              dob: '2010-01-24',
        address: {
            street: '907 Blake Avenue',
            city: 'Churchill',
            zipcode: 4400,
            geo: {
                lat: -56.061694,
                lng: -130.238523,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 34,
        company: 'ZORROMOP',
    },
    {
        id: 12,
        firstName: 'Sellers',
        lastName: 'Walters',
        nombre: 'Nombre de la Tareaom',
        dob: '1975-11-12',
        address: {
            street: '978 Oakland Place',
            city: 'Gloucester',
            zipcode: 3802,
            geo: {
                lat: 11.732587,
                lng: 96.118099,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 28,
        company: 'ORBOID',
    },
    {
        id: 13,
        firstName: 'Wendi',
        lastName: 'Powers',
        nombre: 'Nombre de la Tarea',
                dob: '1979-06-02',
        address: {
            street: '376 Greenpoint Avenue',
            city: 'Elliott',
            zipcode: 9149,
            geo: {
                lat: -78.159578,
                lng: -9.835103,
            },
        },
        tipo: 'SEO de Contenido',
        isActive: true,
        age: 31,
        company: 'SNORUS',
    },
    {
        id: 14,
        firstName: 'Sophie',
        lastName: 'Horn',
        nombre: 'Nombre de la Tarea',
             dob: '2018-09-20',
        address: {
            street: '343 Doughty Street',
            city: 'Homestead',
            zipcode: 330,
            geo: {
                lat: 65.484087,
                lng: 137.413998,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 22,
        company: 'XTH',
    },
    {
        id: 15,
        firstName: 'Levine',
        lastName: 'Rodriquez',
        nombre: 'Nombre de la Tarea',
               dob: '1973-02-08',
        address: {
            street: '643 Allen Avenue',
            city: 'Weedville',
            zipcode: 8931,
            geo: {
                lat: -63.185586,
                lng: 117.327808,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 27,
        company: 'COMTRACT',
    },
    {
        id: 16,
        firstName: 'Little',
        lastName: 'Hatfield',
        nombre: 'Nombre de la Tarea',
        dob: '2012-01-03',
        address: {
            street: '194 Anthony Street',
            city: 'Williston',
            zipcode: 7456,
            geo: {
                lat: 47.480837,
                lng: 6.085909,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 33,
        company: 'ZIDANT',
    },
    {
        id: 17,
        firstName: 'Larson',
        lastName: 'Kelly',
        nombre: 'Nombre de la Tarea',
                dob: '2010-06-14',
        address: {
            street: '978 Indiana Place',
            city: 'Innsbrook',
            zipcode: 639,
            geo: {
                lat: -71.766732,
                lng: 150.854345,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 20,
        company: 'SUREPLEX',
    },
    {
        id: 18,
        firstName: 'Kendra',
        lastName: 'Molina',
        nombre: 'Nombre de la Tarea',
        dob: '2002-07-19',
        address: {
            street: '567 Charles Place',
            city: 'Kimmell',
            zipcode: 1966,
            geo: {
                lat: 50.765816,
                lng: -117.106499,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 31,
        company: 'DANJA',
    },
    {
        id: 19,
        firstName: 'Ebony',
        lastName: 'Livingston',
        nombre: 'Nombre de la Tarea',
        dob: '1994-10-18',
        address: {
            street: '284 Cass Place',
            city: 'Navarre',
            zipcode: 948,
            geo: {
                lat: 65.271256,
                lng: -83.064729,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 33,
        company: 'EURON',
    },
    {
        id: 20,
        firstName: 'Kaufman',
        lastName: 'Rush',
        nombre: 'Nombre de la Tarea',
               dob: '2011-07-10',
        address: {
            street: '408 Kingsland Avenue',
            city: 'Beaulieu',
            zipcode: 7911,
            geo: {
                lat: 41.513153,
                lng: 54.821641,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 39,
        company: 'ILLUMITY',
    },
    {
        id: 21,
        firstName: 'Frank',
        lastName: 'Hays',
        nombre: 'Nombre de la Tarea',
                dob: '2005-06-15',
        address: {
            street: '973 Caton Place',
            city: 'Dargan',
            zipcode: 4104,
            geo: {
                lat: 63.314988,
                lng: -138.771323,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 31,
        company: 'SYBIXTEX',
    },
    {
        id: 22,
        firstName: 'Carmella',
        lastName: 'Mccarty',
        nombre: 'Nombre de la Tareacom',
        dob: '1980-03-06',
        address: {
            street: '919 Judge Street',
            city: 'Canby',
            zipcode: 8283,
            geo: {
                lat: 9.198597,
                lng: -138.809971,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 21,
        company: 'ZEDALIS',
    },
    {
        id: 23,
        firstName: 'Massey',
        lastName: 'Owen',
        nombre: 'Nombre de la Tarea',
                dob: '2012-03-01',
        address: {
            street: '108 Seaview Avenue',
            city: 'Slovan',
            zipcode: 3599,
            geo: {
                lat: -74.648318,
                lng: 99.620699,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: false,
        age: 40,
        company: 'DYNO',
    },
    {
        id: 24,
        firstName: 'Lottie',
        lastName: 'Lowery',
        nombre: 'Nombre de la Tarea',
               dob: '1982-10-10',
        address: {
            street: '557 Meserole Avenue',
            city: 'Fowlerville',
            zipcode: 4991,
            geo: {
                lat: 54.811546,
                lng: -20.996515,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 36,
        company: 'MULTIFLEX',
    },
    {
        id: 25,
        firstName: 'Addie',
        lastName: 'Luna',
        nombre: 'Nombre de la Tarea',

        dob: '1988-05-01',
        address: {
            street: '688 Bulwer Place',
            city: 'Harmon',
            zipcode: 7664,
            geo: {
                lat: -12.762766,
                lng: -39.924497,
            },
        },
        tipo: 'SEO Linkbuilding',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
]);

const countryList = [
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AT', name: 'Austria' },
    { code: 'AU', name: 'Australia' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BY', name: 'Belarus' },
    { code: 'CA', name: 'Canada' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DE', name: 'Germany' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'ES', name: 'Spain' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'GR', name: 'Greece' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HR', name: 'Croatia' },
    { code: 'HU', name: 'Hungary' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IN', name: 'India' },
    { code: 'IT', name: 'Italy' },
    { code: 'JO', name: 'Jordan' },
    { code: 'JP', name: 'Japan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'KR', name: 'South Korea' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'MO', name: 'Macau' },
    { code: 'MX', name: 'Mexico' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NO', name: 'Norway' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RS', name: 'Serbia' },
    { code: 'RU', name: 'Russia' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SE', name: 'Sweden' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'UK', name: 'Ukraine' },
    { code: 'UG', name: 'Uganda' },
    { code: 'US', name: 'United States' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'EE', name: 'Estonia' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'LV', name: 'Latvia' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'PA', name: 'Panama' },
];

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

const randomStatusColor = () => {
    const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
};

const randomStatus = () => {
    const status = ['COMPLETADO', 'PENDIENTE', 'EN PROGRESO'];
    const random = Math.floor(Math.random() * status.length);
    return status[random];
};
const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCountry = () => {
    const random = Math.floor(Math.random() * countryList.length);
    return countryList[random];
};
</script>
