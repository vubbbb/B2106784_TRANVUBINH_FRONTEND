<template>
    <q-form class="column q-pa-md shadow-2" @submit.prevent="submitForm">
        <q-input outlined name="name" placeholder="Book Title" v-model="book.name"/>
        <q-input outlined name="author" placeholder="Book Author" v-model="book.author"/>
        <q-input outlined name="cost" placeholder="Book Price" v-model="book.cost"/>
        <q-input outlined name="quantity" placeholder="Book Quantity" v-model="book.quantity"/>
        <q-input outlined name="yearOfPublication" placeholder="Book Publication Year" v-model="book.yearOfPublication"/>
        <q-input outlined name="image" placeholder="Book Cover" v-model="book.image"/>
        <q-btn type="submit" label="Update Book" color="primary" class="q-mt-md"/>
    </q-form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            book: {
                name: '',
                author: '',
                cost: 0,
                quantity: 0,
                yearOfPublication: '',
                image: ''
            }
        };
    },
    mounted() {
        // Extract parameters from the URL and set them as initial values for book object
        const params = this.$route.query;
        this.book.name = params.name || '';
        this.book.author = params.author || '';
        this.book.cost = params.cost || 0;
        this.book.quantity = params.quantity || 0;
        this.book.yearOfPublication = params.yearOfPublication || '';
        this.book.image = params.image || '';
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.put('http://localhost:3333/api/book/' + this.$route.params.id, this.book);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
