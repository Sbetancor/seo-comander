<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav
            class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-3">
                    <router-link to="/" class="main-logo flex items-center shrink-0">
                        <img class="w-8 ml-[5px] flex-none" :src="seoLogo" alt="SEO Commander Logo" />
                        <span
                            class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">SEO-Comander</span>
                    </router-link>
                    <a href="javascript:;"
                        class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
                        @click="store.toggleSidebar()">
                        <icon-carets-down class="m-auto rotate-90" />
                    </a>
                </div>

                <perfect-scrollbar :options="{
                    swipeEasing: true,
                    wheelPropagation: false,
                }" class="h-[calc(100vh-80px)] relative">
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0">
                        <li class="nav-item">
                            <ul>
                                <li class="nav-item">
                                    <router-link to="/" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-charts class="group-hover:!text-primary shrink-0" />

                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('stadistics')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/clients" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-users class="group-hover:!text-primary shrink-0" />

                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('clients')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/roadmap" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-calendar class="group-hover:!text-primary shrink-0" />

                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('roadmap')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/projects" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-components class="group-hover:!text-primary shrink-0" />

                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('projects')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/tasks" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-tables class="group-hover:!text-primary shrink-0" />

                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('tasks')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="menu nav-item">
                                    <button
                                        type="button"
                                        class="nav-link group w-full"
                                        :class="{ active: activeDropdown === 'invoice' }"
                                        @click="activeDropdown === 'invoice' ? (activeDropdown = null) : (activeDropdown = 'invoice')"
                                    >
                                        <div class="flex items-center">
                                            <icon-menu-invoice class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('invoices')
                                            }}</span>
                                        </div>
                                        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'invoice' }">
                                            <icon-caret-down />
                                        </div>
                                    </button>
                                    <vue-collapsible :isOpen="activeDropdown === 'invoice'">
                                        <ul class="sub-menu text-gray-500">
                                            <li>
                                                <router-link to="/invoice/list" @click="toggleMobileMenu">{{ $t('list') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/invoice/preview" @click="toggleMobileMenu">{{ $t('preview') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/invoice/add" @click="toggleMobileMenu">{{ $t('add') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/invoice/edit" @click="toggleMobileMenu">{{ $t('edit') }}</router-link>
                                            </li>
                                        </ul>
                                    </vue-collapsible>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/tickets" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-chat class="group-hover:!text-primary shrink-0" />
                                            <span
                                                class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                    $t('Tickets')
                                                }}</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';


import { useAppStore } from '@/stores/index';
import VueCollapsible from 'vue-height-collapsible/vue3';

import IconCaretsDown from '@/components/icon/icon-carets-down.vue';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard.vue';
import IconMinus from '@/components/icon/icon-minus.vue';
import IconMenuChat from '@/components/icon/menu/icon-menu-chat.vue';
import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox.vue';
import IconMenuTodo from '@/components/icon/menu/icon-menu-todo.vue';
import IconMenuNotes from '@/components/icon/menu/icon-menu-notes.vue';
import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard.vue';
import IconMenuContacts from '@/components/icon/menu/icon-menu-contacts.vue';
import IconMenuInvoice from '@/components/icon/menu/icon-menu-invoice.vue';
import IconCaretDown from '@/components/icon/icon-caret-down.vue';
import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar.vue';
import IconMenuComponents from '@/components/icon/menu/icon-menu-components.vue';
import IconMenuElements from '@/components/icon/menu/icon-menu-elements.vue';
import IconMenuCharts from '@/components/icon/menu/icon-menu-charts.vue';
import IconMenuWidgets from '@/components/icon/menu/icon-menu-widgets.vue';
import IconMenuFontIcons from '@/components/icon/menu/icon-menu-font-icons.vue';
import IconMenuDragAndDrop from '@/components/icon/menu/icon-menu-drag-and-drop.vue';
import IconMenuTables from '@/components/icon/menu/icon-menu-tables.vue';
import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables.vue';
import IconMenuForms from '@/components/icon/menu/icon-menu-forms.vue';
import IconMenuUsers from '@/components/icon/menu/icon-menu-users.vue';
import IconMenuPages from '@/components/icon/menu/icon-menu-pages.vue';
import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication.vue';
import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation.vue';
import seoLogo from '@/assets/css/seoLogo.png';
const store = useAppStore();
const activeDropdown: any = ref('');
const subActive: any = ref('');

onMounted(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
        selector.classList.add('active');
        const ul: any = selector.closest('ul.sub-menu');
        if (ul) {
            let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
            if (ele.length) {
                ele = ele[0];
                setTimeout(() => {
                    ele.click();
                });
            }
        }
    }
});

const toggleMobileMenu = () => {
    if (window.innerWidth < 1024) {
        store.toggleSidebar();
    }
};
</script>
