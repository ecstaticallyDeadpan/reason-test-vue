<script setup>
import Cta from '../common/Cta.vue';
</script>
<template>
    <div class="bg-brand-teal text-white p-8">
        <div class="container">
            <h2 class="text-3xl font-bold mb-5">What do we do?</h2>
            <p class="mb-5">Let us know who you are and what you're looking for, and we'll get you to the right place.</p> 
            <div class="grid grid-cols-4 gap-x-7">
                <Cta title="Get online week" />
                <Cta title="Learn my way" />
                <Cta title="Make it click" />
                <Cta title="Digital you" />
            </div>
            <div class="mt-10 text-center">
                <router-link 
                    tag="button"
                    to="/test"
                    class="bg-white text-brand-red hover:text-white hover:bg-brand-red inline-block text-sm px-6 py-2 font-bold rounded-full transition duration-150 ease-in-out">
                    More about what we do
                </router-link>
            </div>
        </div>
    </div>
</template>