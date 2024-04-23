<template>
    <div class="add-book-form q-pa-md q-gutter-md">
        <div class="q-gutter-md row justify-center">
            <b>Cập nhật đầu sách</b>
            <q-form class="column shadow-2" @submit.prevent="submitForm">
                <q-input outlined name="name" placeholder="Tựa đề" v-model="book.name" />
                <q-input outlined name="author" placeholder="Tác giả" v-model="book.author" />
                <q-input outlined name="cost" placeholder="Giá thuê" v-model="book.cost" />
                <q-input outlined name="quantity" placeholder="Số lượng bản" v-model="book.quantity" />
                <q-input outlined name="yearOfPublication" placeholder="Năm xuất bản"
                    v-model="book.yearOfPublication" />
                <q-input outlined name="image" placeholder="Ảnh bìa" v-model="book.image" />

                <!-- Dropdown for selecting publisher -->
                <q-select outlined name="publisher" placeholder="Select Publisher" v-model="book.publisher"
                    :options="publishers" />

                <q-btn type="submit" label="Cập nhật" color="primary" class="q-mt-md" />
            </q-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
    setup() {
        const toast = useToast();
        return { toast }
    },
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
    mounted() {
        // Extract parameters from the URL and set them as initial values for book object
        const params = this.$route.query;
        this.book.name = params.name || '';
        this.book.author = params.author || '';
        this.book.cost = params.cost || 0;
        this.book.quantity = params.quantity || 0;
        this.book.yearOfPublication = params.yearOfPublication || '';
        this.book.image = params.image || '';
        this.book.publisher = '';
    },
    methods: {
        async fetchPublishers() {
            const token = localStorage.getItem('token');
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
                console.log(this.book);
                const response = await axios.put('http://localhost:3333/api/book/' + this.$route.params.id, this.book, {
                    headers: {
                        token: `Bearer ${token}`
                    }
                }).then(() => {
                    this.$router.push({ name: 'books' });
                })
                
                console.log(response.data);
            } catch (error) {
                console.error(error);
                toast.error('Error updating book!');
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