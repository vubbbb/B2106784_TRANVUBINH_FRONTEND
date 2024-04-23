<template>
    <q-form class="column q-pa-md shadow-2" @submit.prevent="submitForm">
        <q-input outlined name="name" placeholder="Publisher Name" v-model="publisher.name"/>
        <q-input outlined name="address" placeholder="Publisher Address" v-model="publisher.address"/>
        <q-input outlined name="image" placeholder="Publisher Logo" v-model="publisher.image"/>
        <q-btn type="submit" label="Update Publisher" color="primary" class="q-mt-md"/>
    </q-form>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
const toast = useToast();

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
    mounted() {
        // Extract parameters from the URL and set them as initial values for publisher object
        const params = this.$route.query;
        this.publisher.name = params.name || '';
        this.publisher.address = params.address || '';
        this.publisher.image = params.image || '';
    },
    methods: {
        async submitForm() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.put('http://localhost:3333/api/publisher/' + this.$route.params.id, this.publisher, {
                    headers: {
                        token: `Bearer ${token}`
                    }
                }).then(() => {
                    this.$router.push({ name: 'publishers' });
                })
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
