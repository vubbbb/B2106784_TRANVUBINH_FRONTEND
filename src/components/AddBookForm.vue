<template>
  <div class="add-book-form q-pa-md q-gutter-md">
    <div class="q-gutter-md row justify-center">
      <b>Add New Book</b>
      <q-form class="column shadow-2" @submit.prevent="submitForm">
        <q-input outlined name="name" placeholder="Book Title" v-model="book.name"/>
        <q-input outlined name="author" placeholder="Book Author" v-model="book.author"/>
        <q-input outlined name="cost" placeholder="Book Price" v-model="book.cost"/>
        <q-input outlined name="quantity" placeholder="Book Quantity" v-model="book.quantity"/>
        <q-input outlined name="yearOfPublication" placeholder="Book Publication Year" v-model="book.yearOfPublication"/>
        <q-input outlined name="image" placeholder="Book Cover" v-model="book.image"/>
        <!-- Dropdown or list of publishers -->
        <q-select outlined name="publisher" placeholder="Select Publisher" v-model="book.publisher" :options="publishers" />
        <q-btn type="submit" label="Add Book" color="primary" class="q-mt-md"/>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: {
        name: '',
        author: '',
        cost: '',
        quantity: '',
        yearOfPublication: '',
        image: '',
        publisher: '' // Add publisher field
      },
      publishers: [] // Array to hold publishers options
    };
  },
  created() {
    // Fetch publishers data from API
    this.fetchPublishers();
  },
  methods: {
    async fetchPublishers() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3333/api/publisher', {
          headers: {
            token: `Bearer ${token}`
          }
        });
        // Set publishers options
        this.publishers = response.data.map(publisher => ({
          label: publisher.name,
          value: publisher._id
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3333/api/book/', this.book,{
          headers: {
            token: `Bearer ${token}`
          }
        }).then(() => {
          this.$router.push({ name: 'books' });
        })
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.add-book-form {
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
  .add-book-form {
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
  }
}
</style>
