<template>
    <div class="add-book-form q-pa-md">
        <q-form class="column q-pa-md shadow-2" @submit.prevent="submitForm">
            <q-input outlined name="name" placeholder="Book Title" v-model="book.name"/>
            <q-input outlined name="author" placeholder="Book Author" v-model="book.author"/>
            <q-input outlined name="cost" placeholder="Book Price" v-model="book.cost"/>
            <q-input outlined name="quantity" placeholder="Book Quantity" v-model="book.quantity"/>
            <q-input outlined name="yearOfPublication" placeholder="Book Publication Year" v-model="book.yearOfPublication"/>
            <q-input outlined name="image" placeholder="Book Cover" v-model="book.image"/>
            <q-btn type="submit" label="Add Book" color="primary" class="q-mt-md"/>
        </q-form>
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
        image: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3333/api/book/', this.book);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.add-book-form {
    padding-top: 5%;
    padding-left: 30%;
    width: 700px;
}

</style>