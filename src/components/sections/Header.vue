
<script setup>
import NavLink from '../common/NavLink.vue' 
import store from '../../settings/store'
</script>
<template>
    <header>
        <nav class="border-b navbar-expand-lg bg-white relative flex items-center w-full">
            <div class="container w-full flex justify-between items-stretch">
                <a class="border-l border-r p-2" href="">Search</a>
                <ul class="flex font-bold border-l">
                    <li class=""><a class="p-2 inline-block" href="#">Learn</a></li>
                    <li><a class="p-2 bg-brand-red text-white inline-block" href="#">Donate</a></li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
            <div class="container w-full flex flex-wrap items-center justify-between">
                <div class="navbar-collapse grow items-center flex justify-between" id="navbarSupportedContentY">
                    <router-link to="/"><img src="/src/assets/logo.png" class="w-52" /></router-link>
                    <ul class="navbar-nav flex flex-row">
                        <NavLink 
                            v-for="item in store.state.menuItems" 
                            :text="item.text" 
                            :url="item.url" 
                        />           
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>