<template>
    <q-toolbar show-if-above class="navbar bg-grey-3">
        <q-toolbar-title>Sportbook 2VB ADMIN SITE</q-toolbar-title>
        <q-input borderless v-model="text" input-class="text-left" class="q-ml-md" label="Search ..">
            <template v-slot:prepend>
                <q-icon name="search"></q-icon>
            </template>
        </q-input>
        <q-space></q-space>
        <q-separator vertical />
        <q-btn dense round flat icon="far fa-bell" class="q-mx-lg">
            <q-badge color="green" floating transparent>4</q-badge>
        </q-btn>
        <q-separator vertical />
        <q-avatar class="q-ml-lg">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
    </q-toolbar>
</template>

<style>


</style>