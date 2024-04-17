<template>
    <div class="booklist">
        <q-input class="search" v-model="search" filled type="search" input-class="text-right">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
        </q-input>
        <div class="row">
            <div class="bookcard" v-for="book in books" :key="book.id">
                <BookCard v-bind="book" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BookCard from '@/components/BookCard.vue';

export default {
    components: {
        BookCard
    },
    data() {
        return {
            books: []
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3333/api/book/');
            this.books = response.data;
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped>
.book-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.search {
    background-color: #bdc2c5;
}

.book-card {
    flex: 1 0 200px;
    margin: 10px;
    max-width: 300px;

}
</style>