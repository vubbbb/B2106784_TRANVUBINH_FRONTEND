<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    Sportbook 2VB Admin Site
                </q-toolbar-title>
                <q-space />

                <q-space />
                <q-item class="GNL__drawer-item" v-ripple clickable @click="logout">
                    <q-item-section avatar>
                        <q-icon name="logout" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Đăng xuất</q-item-label>
                    </q-item-section>
                </q-item>
            </q-toolbar>
            <q-tabs align="left">

                <q-route-tab color="primary" label="Quản lý sách">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/inventory/books" label="Danh mục đầu sách" />
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/inventory/addbook" label="Thêm sách mới" />
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-route-tab>
                <q-route-tab color="primary" label="Quản lý NXB">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/publishers" label="Danh sách NXB" />
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-route-tab to="/publishers/addform" label="Thêm NXB mới" />
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-route-tab>
                <q-route-tab to="/customers" label="Đọc giả" />
                <q-route-tab to="/requests" label="Yêu cầu mượn sách" />
                <q-route-tab to="/orders" label="Đơn mượn" />

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

        function logout() {
            localStorage.removeItem('token');
            location.reload();
        }

        return {
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value
            },
            text: ref(''),
            logout
        }
    }
}
</script>