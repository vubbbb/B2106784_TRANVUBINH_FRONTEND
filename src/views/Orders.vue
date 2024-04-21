<template>
  <div class="q-pa-md">
    <q-table title="Orders" :rows="rows" :columns="columns" row-key="name" :filter="filter" grid hide-header>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <q-card bordered flat>
            <q-card-section>
              <q-btn label="Approve" color="primary" @click="approveOrder(props.row._id)" />
              <q-btn label="Reject" color="negative" @click="rejectOrder(props.row._id)" class="q-ml-md" />
              <h6>{{ props.row.userName }}</h6>
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
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
    name: 'userId',
    label: 'User ID',
    field: 'userId'
  },
  {
    name: 'userName',
    label: 'User Name',
    field: 'userName'
  },
  {
    name: 'bookName',
    label: 'Book Name',
    field: 'bookName'
  },
  {
    name: 'address',
    label: 'Address',
    field: 'address'
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status'
  },
  {
    name: 'quantity',
    label: 'Quantity',
    field: 'quantity'
  },
  {
    name: 'startDate',
    label: 'Start Date',
    field: 'startDate'
  },
  {
    name: 'endDate',
    label: 'End Date',
    field: 'endDate'
  },
  {
    name: 'actions',
    label: 'Actions',
    field: 'actions'
  }
]

export default {

  setup() {
    const rows = ref([]);
    onMounted(async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3333/api/order', {
          headers: {
            token: `Bearer ${token}`
          }
        });
        rows.value = response.data.map((order, index) => ({
          ...order,
          index: index + 1
        }))
      } catch (error) {
        console.error(error)
      }
    })

    return {
      filter: ref(''),
      columns,
      rows
    }
  },
  methods: {
    async approveOrder(orderId) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put('http://localhost:3333/api/order/update', {
          orderId: orderId,
          status: 'approved'
        }, {
          headers: {
            token: `Bearer ${token}`
          }
        });
        location.reload();
      } catch (error) {
        console.error(error);
      }
    },
    async rejectOrder(orderId) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.put('http://localhost:3333/api/order/update', {
          orderId: orderId,
          status: 'rejected'
        }, {
          headers: {
            token: `Bearer ${token}`
          }
        });
        location.reload();
      } catch (error) {
        console.error(error);
      }
    },
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
