<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <router-link to="/clients" class="text-primary hover:underline">Clientes</router-link>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Profile</span>
            </li>
        </ul>
        <div class="pt-5">
            <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                <div class="panel h-[485px]">
                    <div class="flex items-center justify-between mb-5">
                        <h5 class="font-semibold text-lg dark:text-white-light">Perfil</h5>
                        <router-link to="/clientSettings"
                            class="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                            <icon-pencil-paper />
                        </router-link>
                    </div>
                    <div class="mb-5">
                        <div class="flex flex-col justify-center items-center">
                            <img src="/assets/images/profile-34.jpeg" alt=""
                                class="w-24 h-24 rounded-full object-cover mb-5" />
                            <p class="font-semibold text-primary text-xl">Cliente</p>
                        </div>
                        <ul class="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                            <li class="flex items-center gap-2">
                                <icon-coffee class="shrink-0" />
                                Web Developer
                            </li>
                            <li class="flex items-center gap-2">
                                <icon-calendar class="shrink-0" />
                                Jan 20, 1989
                            </li>
                            <li class="flex items-center gap-2">
                                <icon-map-pin class="shrink-0" />
                                New York, USA
                            </li>
                            <li>
                                <a href="javascript:;" class="flex items-center gap-2">
                                    <icon-mail class="w-5 h-5 shrink-0" />
                                    <span class="text-primary truncate">jimmy@gmail.com</span></a>
                            </li>
                            <li class="flex items-center gap-2">
                                <icon-phone />
                                <span class="whitespace-nowrap" dir="ltr">+1 (530) 555-12121</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="panel lg:col-span-2 xl:col-span-3  h-[485px] overflow-hidden ">
                    <div class="mb-5 flex justify-between">
                        <h5 class="font-semibold text-lg dark:text-white-light">Proyectos</h5>
                    </div>
                    <div class="mb-5 h-full">
                        <div
                            class="table-responsive text-[#515365] dark:text-white-light font-semibold h-full overflow-y-auto">
                            <table class="whitespace-nowrap w-full">
                                <thead>
                                    <tr>
                                        <th>Proyectos</th>
                                        <th>Progreso</th>
                                        <th>Realizado</th>
                                        <th class="text-center">Horas estimadas</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white-dark">
                                    <tr>
                                        <td>Figma Design</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-danger rounded-full w-[29.56%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">29.56%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>Vue Migration</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-info rounded-full w-1/2"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">50%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>Flutter App</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-warning rounded-full w-[39%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">39%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>API Integration</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-success rounded-full w-[78.03%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">78.03%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>

                                    <tr>
                                        <td>Blog Update</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-secondary rounded-full w-full"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">100%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>
                                    <tr>
                                        <td>Landing Page</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-danger rounded-full w-[19.15%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">19.15%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>
                                    <tr>
                                        <td>Figma Design</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-danger rounded-full w-[29.56%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">29.56%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>Vue Migration</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-info rounded-full w-1/2"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">50%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>Flutter App</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-warning rounded-full w-[39%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">39%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>
                                    <tr>
                                        <td>API Integration</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-success rounded-full w-[78.03%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">78.03%</td>
                                        <td class="text-center"> 60 horas </td>
                                    </tr>

                                    <tr>
                                        <td>Blog Update</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-secondary rounded-full w-full"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">100%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>
                                    <tr>
                                        <td>Landing Page</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-danger rounded-full w-[19.15%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-danger">19.15%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>
                                    <tr>
                                        <td>Shopify Dev</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-primary rounded-full w-[60.55%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">60.55%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>
                                    <tr>
                                        <td>Shopify Dev</td>
                                        <td>
                                            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                <div class="bg-primary rounded-full w-[60.55%]"></div>
                                            </div>
                                        </td>
                                        <td class="text-success">60.55%</td>
                                        <td class="text-center">80 horas</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="panel h-[200px] sm:col-span-2 overflow-hidden flex flex-col">
    <!-- Header -->
    <div class="mb-5 flex justify-between">
        <h5 class="font-semibold text-lg dark:text-white-light">Contactos</h5>
    </div>

    <!-- Scrollable Table -->
    <div class="table-responsive flex-1 overflow-y-auto ">
        <table class="w-full">
            <tbody>
                <template v-for="data in tableData" :key="data.id">
                    <tr>
                        <td class="whitespace-nowrap">
                            <span class="flex justify-center items-center w-8 h-8 text-center rounded-full object-cover bg-info text-sm text-white">
                                AG
                            </span>
                        </td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.email }}</td>
                        <td class="text-center whitespace-nowrap">
                            {{ data.phone }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>

                <div class="panel h-[320px]">
                    <div class="mb-5 flex justify-between">
                        <h5 class="font-semibold text-lg dark:text-white-light">Facturas</h5>
                    </div>
                    <div class="space-y-4">
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light shrink-0">
                                    <icon-shopping-bag />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Income <span
                                            class="block text-base text-[#515365] dark:text-white-light">$92,600</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-secondary">90%</p>
                                </div>
                            </div>
                        </div>
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light shrink-0">
                                    <icon-tag />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Profit <span
                                            class="block text-base text-[#515365] dark:text-white-light">$37,515</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-info">65%</p>
                                </div>
                            </div>
                        </div>
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light shrink-0">
                                    <icon-credit-card />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Expenses <span
                                            class="block text-base text-[#515365] dark:text-white-light">$55,085</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-warning">80%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="mb-5 flex justify-between">
                        <h5 class="font-semibold text-lg dark:text-white-light">Informes</h5>
                     
                    </div>
                    <div class="space-y-4">
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light shrink-0">
                                    <icon-shopping-bag />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Income <span
                                            class="block text-base text-[#515365] dark:text-white-light">$92,600</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-secondary">90%</p>
                                </div>
                            </div>
                        </div>
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light shrink-0">
                                    <icon-tag />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Profit <span
                                            class="block text-base text-[#515365] dark:text-white-light">$37,515</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-info">65%</p>
                                </div>
                            </div>
                        </div>
                        <div class="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                            <div class="flex items-center justify-between p-4 py-2">
                                <div
                                    class="grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light shrink-0">
                                    <icon-credit-card />
                                </div>
                                <div class="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                    <h6 class="text-white-dark text-[13px] dark:text-white-dark">
                                        Expenses <span
                                            class="block text-base text-[#515365] dark:text-white-light">$55,085</span>
                                    </h6>
                                    <p class="ltr:ml-auto rtl:mr-auto text-warning">80%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel h-[320px]  overflow-hidden ">
                    <div class="flex items-center justify-between mb-5">
                        <h5 class="font-semibold text-lg dark:text-white-light">Historial de pagos</h5>
                    </div>
                    <div class="p-5 h-full overflow-y-auto">
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    March<span class="block text-white-dark dark:text-white-light">Pro Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-danger">PENDIENTE</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    February <span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-success">PAGADO</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    January<span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-danger">PENDIENTE</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    January<span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-success">PAGADO</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    January<span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-success">PAGADO</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    January<span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-success">PAGADO</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div class="flex items-center justify-between py-2">
                                <h6 class="text-[#515365] font-semibold dark:text-white-dark">
                                    January<span class="block text-white-dark dark:text-white-light">Pro
                                        Membership</span>
                                </h6>
                                <div class="flex items-center justify-between ltr:ml-auto rtl:mr-auto">
                                    <span class="badge badge-outline-success">PAGADO</span>
                                    <div class="dropdown ltr:ml-4 rtl:mr-4">
                                        <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'"
                                            offsetDistance="0" class="align-middle">
                                            <a href="javascript:;">
                                                <icon-horizontal-dots class="opacity-80 hover:opacity-100" />
                                            </a>
                                            <template #content="{ close }">
                                                <ul @click="close()" class="whitespace-nowrap">
                                                    <li>
                                                        <a href="javascript:;">View Invoice</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">Download Invoice</a>
                                                    </li>
                                                </ul>
                                            </template>
                                        </Popper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="flex items-center justify-between mb-10">
                        <h5 class="font-semibold text-lg dark:text-white-light">Tarifa del cliente</h5>
                    </div>
                    <div class="group">
                        <ul class="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                            <li>10,000 Monthly Visitors</li>
                            <li>Unlimited Reports</li>
                            <li>2 Years Data Storage</li>
                        </ul>
                        <div class="flex items-center justify-between mb-4 font-semibold">
                            <p
                                class="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                                <icon-clock class="w-3 h-3 ltr:mr-1 rtl:ml-1" />
                                5 Days Left
                            </p>
                            <p class="text-info">$25 / month</p>
                        </div>
                        <div class="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                            <div class="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative"
                                style="width: 65%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
import IconPlus from '@/components/icon/icon-plus.vue';
import IconPencilPaper from '@/components/icon/icon-pencil-paper.vue';
import IconCoffee from '@/components/icon/icon-coffee.vue';
import IconCalendar from '@/components/icon/icon-calendar.vue';
import IconMapPin from '@/components/icon/icon-map-pin.vue';
import IconMail from '@/components/icon/icon-mail.vue';
import IconPhone from '@/components/icon/icon-phone.vue';
import IconTwitter from '@/components/icon/icon-twitter.vue';
import IconDribbble from '@/components/icon/icon-dribbble.vue';
import IconGithub from '@/components/icon/icon-github.vue';
import IconShoppingBag from '@/components/icon/icon-shopping-bag.vue';
import IconTag from '@/components/icon/icon-tag.vue';
import IconCreditCard from '@/components/icon/icon-credit-card.vue';
import IconClock from '@/components/icon/icon-clock.vue';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots.vue';
import { ref } from 'vue';
const store = useAppStore();
const tableData = ref([
    {
        id: 1,
        name: 'John Doe',
        date: '10/08/2020',
        email: 'johndoe@yahoo.com',
        phone: '+34 6540430344',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'John Doe',
        date: '10/08/2020',
        email: 'johndoe@yahoo.com',
        phone: '+34 654770344',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 3,
        name: 'John Doe',
        date: '10/08/2020',
        email: 'johndoe@yahoo.com',
        phone: '+34 654770344',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 4,
        name: 'John Doe',
        date: '10/08/2020',
        email: 'johndoe@yahoo.com',
        phone: '+34 654770344',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
]);
</script>
