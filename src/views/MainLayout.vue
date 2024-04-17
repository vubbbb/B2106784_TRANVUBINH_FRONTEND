<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Sportbook 2VB Admin Site
                </q-toolbar-title>
            </q-toolbar>
            <q-tabs align="left">
                <q-route-tab color="primary" label="Inventory">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/inventory/books" label="Books" />
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/inventory/addbook" label="Add New Book" />
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-route-tab>
                <q-route-tab to="/customers" label="Customers" />
                <q-route-tab to="/orders" label="Orders" />
                <q-route-tab to="/page3" label="Report" />
            </q-tabs>
        </q-header>
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const rightDrawerOpen = ref(false)

        return {
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value
            },
            text: ref('')
        }
    }
}
</script>