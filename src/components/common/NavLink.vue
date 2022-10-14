<script setup>
defineProps(['text','url'])
</script>

<template>    
    <li class="nav-item mb-0">
        <router-link tag="a" class="nav-link block px-2 pb-2 pt-3 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
            :to="url">{{text}}</router-link>
    </li>
</template>