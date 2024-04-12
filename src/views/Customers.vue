<template>
  <div class="q-pa-md">
    <q-table class="my-sticky-virtscroll-table" virtual-scroll flat bordered v-model:pagination="pagination"
      :rows-per-page-options="[0]" :virtual-scroll-sticky-size-start="48" row-key="index" title="CUSTOMERS" :rows="rows"
      :columns="columns" style="height: 550px;" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index'
  },
  {
    name: 'firstName',
    required: true,
    label: 'First Name',
    align: 'left',
    field: row => row.firstName,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'lastName', align: 'center', label: 'Last Name', field: 'lastName', sortable: true },
  { name: 'birthDay', label: 'Birthday', field: 'birthDay', sortable: true },
  { name: 'gender', label: 'Gender', field: 'gender' },
  { name: 'address', label: 'Address', field: 'address' },
  { name: 'email', label: 'Email', field: 'email' },
  { name: 'phoneNumber', label: 'Phone Number', field: 'phoneNumber', sortable: true},
  { name: 'created', label: 'Date of Creation', field: 'created', sortable: true }
]

export default {
  setup() {
    const rows = ref([])
    const pagination = ref({ rowsPerPage: 10 })

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/user/')
        rows.value = response.data  // Assuming the response is an array of data
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    })

    return {
      columns,
      rows,
      pagination
    }
  }
}
</script>


<style lang="sass">
.my-sticky-virtscroll-table

  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #00b4ff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>