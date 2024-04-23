<template>
  <div class="q-pa-md">
    <q-table title="Yêu cầu mượn sách từ đọc giả" :rows="filteredOrders" :columns="columns" row-key="name"
      :filter="filter" grid hide-header>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <q-card bordered flat>
            <q-card-section>
              <q-btn label="Chấp nhận" color="primary" @click="approveOrder(props.row._id)" />
              <q-btn label="Từ chối" color="negative" @click="rejectOrder(props.row._id)" class="q-ml-md" />
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
    label: 'Order ID',
    field: '_id'
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
    label: 'Bìa sách',
    field: 'bookName'
  },
  {
    name: 'address',
    label: 'Địa chỉ',
    field: 'address'
  },
  {
    name: 'status',
    label: 'Trạng thái đơn mượn',
    field: 'status'
  },
  {
    name: 'quantity',
    label: 'Số lượng',
    field: 'quantity'
  },
  {
    name: 'startDate',
    label: 'Ngày mượn',
    field: 'startDate'
  },
  {
    name: 'endDate',
    label: 'Yêu cầu trả sách trước ngày',
    field: 'endDate'
  },
]

export default {

  setup() {
    const rows = ref([]);
    const filteredOrders = ref([]);
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
        }));
        filteredOrders.value = rows.value.filter(order => order.status === 'pending');

        // Sắp xếp lại mảng theo index giảm dần
        filteredOrders.value.sort((a, b) => b.index - a.index);
      } catch (error) {
        console.error(error)
      }
    })

    return {
      filter: ref(''),
      columns,
      filteredOrders
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

</style>
