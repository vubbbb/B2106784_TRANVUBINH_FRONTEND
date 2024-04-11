<template>
    <div class="add-book-form q-pa-md">
        <q-form class="column q-pa-md shadow-2" action="http://localhost:9999/inventory/addbook" method="GET">
            <q-input outlined name="name" placeholder="Book Title" v-model="form.name"/>
            <q-input outlined name="cost" placeholder="Book Price" v-model="form.cost"/>
            <q-input outlined name="quantity" placeholder="Book Quantity" v-model="form.quantity"/>
            <q-input outlined name="yearOfPublication" placeholder="Book Publication Year" v-model="form.yearOfPublication"/>
            <q-input outlined name="image" placeholder="Book Cover" v-model="form.image"/>
            <q-btn type="submit" label="Add Book" color="primary" class="q-mt-md"/>
        </q-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                cost: '',
                quantity: '',
                yearOfPublication: '',
                image: ''
            }
        };
    }
};
</script>

<style>
.add-book-form {
    padding-top: 5%;
    padding-left: 25%;
    width: 50%;
}

</style>