<template>
    <div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <ul class="flex space-x-2 rtl:space-x-reverse mb-4">
            <li>
                <router-link to="/clients" class="text-primary hover:underline">Clientes</router-link>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Registro</span>
            </li>
        </ul>
        
        <div class="mb-6">
            <h5 class="font-semibold text-xl text-gray-800 dark:text-white">Registrar Cliente</h5>
        </div>

        <form @submit.prevent="submitForm">
            <div v-if="currentStep === 1">
                <h6 class="text-lg font-bold mb-4">Datos de la Empresa</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="businessName">Nombre de la Empresa</label>
                        <input id="businessName" type="text" class="form-input" v-model="form.businessName" />
                        <p v-if="isSubmitted && validationObj.businessName.$error" class="text-danger">Este campo es obligatorio.</p>
                    </div>
                    <div>
                        <label for="businessAddress">Dirección</label>
                        <input id="businessAddress" type="text" class="form-input" v-model="form.businessAddress" />
                        <p v-if="isSubmitted && validationObj.businessAddress.$error" class="text-danger">Este campo es obligatorio.</p>
                    </div>
                    <div>
                        <label for="businessEmail">Correo Electrónico</label>
                        <input id="businessEmail" type="email" class="form-input" v-model="form.businessEmail" />
                        <p v-if="isSubmitted && validationObj.businessEmail.$error" class="text-danger">Ingrese un correo válido.</p>
                    </div>
                    <div>
                        <label for="businessPhone">Teléfono</label>
                        <input id="businessPhone" type="text" class="form-input" v-model="form.businessPhone" />
                        <p v-if="isSubmitted && validationObj.businessPhone.$error" class="text-danger">Este campo es obligatorio.</p>
                    </div>
                </div>
            </div>

            <div v-if="currentStep === 2">
                <h6 class="text-lg font-bold mb-4">Contacto</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="contactName">Nombre del Contacto</label>
                        <input id="contactName" type="text" class="form-input" v-model="form.contactName" />
                        <p v-if="isSubmitted && validationObj.contactName.$error" class="text-danger">Este campo es obligatorio.</p>
                    </div>
                    <div>
                        <label for="contactEmail">Correo Electrónico</label>
                        <input id="contactEmail" type="email" class="form-input" v-model="form.contactEmail" />
                        <p v-if="isSubmitted && validationObj.contactEmail.$error" class="text-danger">Ingrese un correo válido.</p>
                    </div>
                    <div>
                        <label for="contactPhone">Teléfono</label>
                        <input id="contactPhone" type="text" class="form-input" v-model="form.contactPhone" />
                        <p v-if="isSubmitted && validationObj.contactPhone.$error" class="text-danger">Este campo es obligatorio.</p>
                    </div>
                </div>
            </div>

            <div v-if="currentStep === 3">
                <h6 class="text-lg font-bold mb-4">Información del Proyecto</h6>
                <div>
                    <label for="projectName">Nombre del Proyecto</label>
                    <input id="projectName" type="text" class="form-input" v-model="form.projectName" />
                    <p v-if="isSubmitted && validationObj.projectName.$error" class="text-danger">Este campo es obligatorio.</p>
                </div>
            </div>

            <div class="flex justify-between mt-6">
                <button v-if="currentStep > 1" type="button" class="btn btn-secondary" @click="prevStep">Atrás</button>
                <button v-if="currentStep < 3" type="button" class="btn btn-primary" @click="nextStep">Siguiente</button>
                <button v-if="currentStep === 3" type="submit" class="btn btn-success">Guardar Cliente</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
    setup() {
        const currentStep = ref(1);
        const isSubmitted = ref(false);
        
        const form = ref({
            businessName: '',
            businessAddress: '',
            businessEmail: '',
            businessPhone: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            projectName: ''
        });

        const rules = {
            businessName: { required },
            businessAddress: { required },
            businessEmail: { email },
            businessPhone: { required },
            contactName: { required },
            contactEmail: { email },
            contactPhone: { required },
            projectName: { required }
        };

        // Apply validation directly to the form object
        const validationObj = useVuelidate(rules, form);

        const validateStep = (step) => {
            if (step === 1) {
                validationObj.value.businessName.$touch();
                validationObj.value.businessAddress.$touch();
                validationObj.value.businessEmail.$touch();
                validationObj.value.businessPhone.$touch();
                
                return !validationObj.value.businessName.$error &&
                       !validationObj.value.businessAddress.$error &&
                       !validationObj.value.businessEmail.$error &&
                       !validationObj.value.businessPhone.$error;
            } 
            else if (step === 2) {
                validationObj.value.contactName.$touch();
                validationObj.value.contactEmail.$touch();
                validationObj.value.contactPhone.$touch();
                
                return !validationObj.value.contactName.$error &&
                       !validationObj.value.contactEmail.$error &&
                       !validationObj.value.contactPhone.$error;
            }
            else if (step === 3) {
                validationObj.value.projectName.$touch();
                return !validationObj.value.projectName.$error;
            }
            
            return true;
        };

        const nextStep = () => {
            isSubmitted.value = true;
            
            if (!validateStep(currentStep.value)) {
                return;
            }
            
            currentStep.value++;
            isSubmitted.value = false;
        };

        const prevStep = () => {
            currentStep.value--;
        };

        const submitForm = () => {
            isSubmitted.value = true;
            
            if (!validateStep(currentStep.value)) {
                return;
            }
            
            // Form submission logic would go here
            alert('Cliente registrado exitosamente');
        };

        return { 
            currentStep, 
            isSubmitted, 
            form, 
            validationObj, 
            nextStep, 
            prevStep, 
            submitForm 
        };
    }
};
</script>

<style>
.text-danger {
    color: red;
    font-size: 0.875rem;
}
</style>