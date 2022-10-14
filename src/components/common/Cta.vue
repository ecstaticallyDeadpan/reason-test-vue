<script setup>
defineProps(['title'])
</script>
<template>
    <div class="bg-white p-8 text-center text-black">
        <h3 class="text-xl leading-5 font-bold mb-4">{{title}}</h3>
        <p class="text-sm mb-4">Lorem ipsum</p>
        <router-link tag="button"
            to="/test"
            class="border-2 border-black text-brand-red inline-block text-sm px-6 py-2 font-bold rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            Read more
        </router-link>
    </div>
</template>