<template>
    <div>
        <div class="pt-5">
            <div class="flex items-center justify-between mb-5">
                <h5 class="font-semibold text-lg dark:text-white-light">Agregar cliente</h5>
            </div>
            <TabGroup>
                <TabList class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                    <Tab as="template" v-slot="{ selected }">
                        <a
                            href="javascript:;"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                            :class="{ '!border-primary text-primary': selected }"
                        >
                            <icon-home />
                            Datos personales
                        </a>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <a
                            href="javascript:;"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                            :class="{ '!border-primary text-primary': selected }"
                        >
                            <icon-dollar-sign-circle />
                            Proyectos
                        </a>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <a
                            href="javascript:;"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                            :class="{ '!border-primary text-primary': selected }"
                        >
                            <icon-user class="w-5 h-5" />
                            Documentos
                        </a>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div>
                            <form class="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-[#0e1726]">
                                <div class="mb-5">
                                        <h5 class="font-semibold text-lg mb-4">Datos personales</h5>
                                    </div>
                                <div class="flex flex-col sm:flex-row">
                                    <div class="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                        <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                                    </div>
                                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label for="name">Nombre y apellidos</label>
                                            <input id="name" type="text" placeholder="Jimmy Turner" class="form-input" />
                                        </div>
                                        <div>
                                            <label for="address">Dirección</label>
                                            <input id="address" type="text" placeholder="New York" class="form-input" />
                                        </div>
                                        <div>
                                            <label for="phone">Teléfono</label>
                                            <input id="phone" type="text" placeholder="+1 (530) 555-12121" class="form-input" />
                                        </div>
                                        <div>
                                            <label for="email">Correo electrónico</label>
                                            <input id="email" type="email" placeholder="Jimmy@gmail.com" class="form-input" />
                                        </div>
                                        <div class="sm:col-span-2 mt-3 mb-3">
                                            <button type="button" class="btn btn-primary">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div class="grid grid-cols-1 gap-5 w-ful">
                                <div class="panel">
                                    <div class="mb-5">
                                        <h5 class="font-semibold text-lg mb-4">Proyecto</h5>
                                    </div>
                                    <div class="mb-5">
                                        <form>
                                            <div class="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label for="billingName">Nombre del proyecto</label>
                                                    <input id="billingName" type="text" placeholder="Enter Name" class="form-input" />
                                                </div>
                                                <div>
                                                    <label for="billingEmail">Website</label>
                                                    <input id="billingEmail" type="email" placeholder="Enter Email" class="form-input" />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                                <div class="md:col-span-2">
                                                    <label for="billingCity">Estado</label>
                                                    <input id="billingCity" type="text" placeholder="Enter City" class="form-input" />
                                                </div>
                                              
                                                <div class="md:col-span-2">
                                                    <label for="billingCity">Seo asignado</label>
                                                    <input id="billingCity" type="text" placeholder="Enter City" class="form-input" />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                                <div class="md:col-span-2">
                                                    <label for="billingCity">Prioridad</label>
                                                    <input id="billingCity" type="text" placeholder="Enter City" class="form-input" />
                                                </div>
                                            </div>
                                            <div class="flex gap-4">
                                                <button type="button" class="btn btn-primary">Guardar</button>
                                            <button type="button" class="btn btn-primary">Agregar más proyectos</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                         <h5 class="font-semibold text-lg mb-4">Proyecto</h5>
                            <multiselect
                            v-model="input1"
                            :options="options"
                            class="custom-multiselect"
                            :searchable="false"
                            :preselect-first="true"
                            :allow-empty="false"
                            selected-label=""
                            select-label=""
                            deselect-label=""
                            ></multiselect>
                      
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useAppStore } from '@/stores/index';
    import { useMeta } from '@/composables/use-meta';
    import IconHome from '@/components/icon/icon-home.vue';
    import IconDollarSignCircle from '@/components/icon/icon-dollar-sign-circle.vue';
    import IconUser from '@/components/icon/icon-user.vue';
    import IconPhone from '@/components/icon/icon-phone.vue';
    import IconLinkedin from '@/components/icon/icon-linkedin.vue';
    import IconTwitter from '@/components/icon/icon-twitter.vue';
    import IconFacebook from '@/components/icon/icon-facebook.vue';
    import IconGithub from '@/components/icon/icon-github.vue';
   
                            import { ref } from 'vue';
                            import Multiselect from '@suadelabs/vue3-multiselect';
                            import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

                            const options = ref(['Orange', 'White', 'Purple']);
                            const input1 = ref('Orange');

    useMeta({ title: 'Account Setting' });
    const store = useAppStore();
</script>

<!--<template>
    <form class="space-y-5" @submit.prevent="submitForm4()">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
                :class="{ 'has-error': $v4.form4.firstName.$error, 'has-success': isSubmitForm4 && !$v4.form4.firstName.$error }">
                <label for="customFname">Nombre</label>
                <input id="customFname" type="text" placeholder="Ingrese su nombre" class="form-input"
                    v-model="form4.firstName" />

                <template v-if="isSubmitForm4 && $v4.form4.firstName.$error">
                    <p class="text-danger mt-1">Por favor ingrese su nombre</p>
                </template>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
                :class="{ 'has-error': $v4.form4.lastName.$error, 'has-success': isSubmitForm4 && !$v4.form4.lastName.$error }">
                <label for="customLname">Apellidos</label>
                <input id="customLname" type="text" placeholder="Ingrese sus apellidos" class="form-input"
                    v-model="form4.lastName" />

                <template v-if="isSubmitForm4 && $v4.form4.lastName.$error">
                    <p class="text-danger mt-1">Por favor ingrese sus apellidos</p>
                </template>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
                :class="{ 'has-error': $v4.form4.email.$error, 'has-success': isSubmitForm4 && !$v4.form4.email.$error }">
                <label for="hrDefaultinput">Email</label>
                <input id="hrDefaultinput" type="email" placeholder="Ingrese su correo electrónico" class="form-input"
                    v-model="form4.email" />
                <template v-if="isSubmitForm4 && $v4.form4.email.$error">
                    <p class="text-danger mt-1">Por favor ingrese su email</p>
                </template>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
                :class="{ 'has-error': $v4.form4.phone.$error, 'has-success': isSubmitForm4 && !$v4.form4.phone.$error }">
                <label for="hrDefaultinput">Teléfono</label>
                <input id="hrDefaultinput" type="phone" placeholder="666-11-77-77" class="form-input"
                    v-model="form4.phone" />
                <template v-if="isSubmitForm4 && $v4.form4.phone.$error">
                    <p class="text-danger mt-1">Por favor ingrese su teléfono</p>
                </template>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
                :class="{ 'has-error': $v4.form4.city.$error, 'has-success': isSubmitForm4 && !$v4.form4.city.$error }">
                <label for="customeCity">Dirección</label>
                <input id="customeCity" type="text" placeholder="Ingrese su dirección" class="form-input"
                    v-model="form4.city" />
                <template v-if="isSubmitForm4 && $v4.form4.city.$error">
                    <p class="text-danger mt-1">Por favor ingrese una dirección válida</p>
                </template>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div
        :class="{ 'has-error': $v4.form4.description?.$error, 'has-success': isSubmitForm4 && !$v4.form4.description?.$error }">
        <label for="ctnTextarea">Descripción</label>
        <textarea id="ctnTextarea" rows="3" class="form-input" placeholder="Agrega una descripción" v-model="form4.description"></textarea>
      
    </div>
</div>

        <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';

const form4 = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    description: '',
});
const isSubmitForm4 = ref(false);
const rules4 = {
    form4: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        phone: { required },
        city: { required },
    },
};
const $v4 = useVuelidate(rules4, { form4 });
const submitForm4 = () => {
    isSubmitForm4.value = true;
    $v4.value.form4.$touch();
    if ($v4.value.form4.$invalid) {
        return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
};

</script>
-->