<template>
    <q-card class="my-card q-ma-sm my-box cursor-pointer q-hoverable" v-ripple style="width: 400px; height: 250px;">
        <div class="row justify-center full-height full-width text-center">
            <img :src="image" class="q-mt-sm" fit="contain" style="max-width: 170px; height: 200px;">
            <q-card-section>
                <div class="text-h6">{{ name }}</div>
                <div class="text-subtitle-2">Tác giả: {{ author }}</div>
                <div class="text-subtitle-2">Giá: {{ cost }}đ</div>
                <div class="text-subtitle-2">Số Lượng: {{ quantity }}</div>
                <div class="text-subtitle-2">YoP: {{ yearOfPublication }}</div>
                <div class="row justify-center q-mt-md">
                    <q-btn label="Edit" color="primary" @click="updateBook" />
                    <q-btn label="Delete" color="negative" @click="deleteBook" class="q-ml-md" />
                </div>
            </q-card-section>
        </div>
    </q-card>
</template>

<script>
import axios from 'axios';
import router from '../router';
export default {
    props: {
        _id: String,
        name: String,
        author: String,
        cost: Number,
        quantity: Number,
        yearOfPublication: Number,
        // Add image prop
        image: String
    },
    methods: {
        updateBook() {
            router.push('/inventory/updatebook/' + this._id + '?name=' + this.name + '&author=' + this.author + '&cost=' + this.cost + '&quantity=' + this.quantity + '&yearOfPublication=' + this.yearOfPublication + '&image=' + this.image);
            
        },
        deleteBook() {
            axios.delete('http://localhost:3333/api/book/' + this._id)
                .then(response => {
                    location.reload();
                    this.$emit('book-deleted', this._id);
                })
                .catch(error => {
                    // Handle error
                    console.error(error);
                });
        }
    }
};
</script>