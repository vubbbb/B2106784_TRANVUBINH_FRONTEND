<template>
    <q-drawer show-if-above :width="100" class="colorDrawer">
        <div class="flex flex-center column q-mt-sm q-mb-md">
            <q-icon name="fab fa-viadeo" class="text-orange" style="font-size: 3rem;" />
        </div>
        <q-btn icon="fas fa-tachometer-alt" label="DASHBOARD" padding="13px xs" stack color="grey-6" flat class="full-width" to="/"></q-btn>
        <q-btn icon="far fa-credit-card" label="ORDERS" padding="13px xs" stack color="grey-6" flat class="full-width" to="/orders"></q-btn>
        <q-btn icon="fas fa-user" label="COSTOMERS" padding="13px xs" stack color="grey-6" flat class="full-width" to="/customers"></q-btn>
        <q-btn icon="fas fa-cube" label="INVENTORY" padding="13px xs" stack color="grey-6" flat class="full-width" to="/inventory/books"></q-btn>
        <q-btn icon="fas fa-file-alt" label="REPORTS" padding="13px xs" stack color="grey-6" flat class="full-width"></q-btn>
        <q-btn icon="fas fa-cog" label="SETTINGS" padding="13px xs" stack color="grey-6" flat class="full-width" to="/about"></q-btn>
    </q-drawer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .colorDrawer {
      background-color: #333C50;
  }
  </style>