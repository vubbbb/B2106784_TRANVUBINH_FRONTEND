<template>
    <div class="publisher-list">
        <div class="row">
            <div class="publisher-card" v-for="publisher in publishers" :key="publisher.id">
                <PublisherCard v-bind="publisher" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PublisherCard from '@/components/PublisherCard.vue';

export default {
    components: {
        PublisherCard
    },
    data() {
        return {
            publishers: [],
            search: ''
        };
    },
    async created() {
        await this.fetchPublishers();
    },
    methods: {
        async fetchPublishers() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3333/api/publisher/', {
                    headers: {
                        token: `Bearer ${token}`
                    }
                });
                this.publishers = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>
/* .publisher-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}



.publisher-card {
    flex: 1 0 200px;
    margin: 10px;
    max-width: 300px;
} */
</style>