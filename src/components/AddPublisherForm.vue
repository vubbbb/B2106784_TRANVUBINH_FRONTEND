<template>
    <div class="add-publisher-form q-pa-md q-gutter-md">
      <div class="q-gutter-md row justify-center">
        <b>Thêm mới nhà xuất bản</b>
        <q-form class="column shadow-2" @submit.prevent="submitForm">
          <q-input outlined name="name" placeholder="Tên nhà xuất bản" v-model="publisher.name"/>
          <q-input outlined name="address" placeholder="Địa chỉ" v-model="publisher.address"/>
          <q-input outlined name="image" placeholder="Ảnh bìa" v-model="publisher.image"/>
          <q-btn type="submit" label="Thêm nhà xuất bản" color="primary" class="q-mt-md"/>
        </q-form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        publisher: {
          name: '',
          address: '',
          image: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:3333/api/publisher/', this.publisher,{
            headers: {
              token: `Bearer ${token}`
            }
          }).then(() => {
            this.$router.push({ name: 'publishers' });
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-publisher-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .row {
    display: flex;
    width: 500px;
  }
  
  .column {
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    .add-publisher-form {
      padding-top: 10%;
      padding-left: 5%;
      padding-right: 5%;
      width: 100%;
    }
  }
  </style>
  