<template>
    <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
        height: 500px;
    ">
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div class="flex items-center h-full container">
                <div class="text-white ">
                    <h1 class="text-7xl font-medium mt-0 mb-6 bg-brand-teal p-5 inline-block">Get online week 2021</h1>
                    <h3 class="leading-7 max-w-xl text-2xl mb-8 bg-white p-5 text-brand-green">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat lorem, ornare eget fermentum ut, facilisis sit amet
                    dolor</h3>
                    <router-link 
                        tag="button"
                        to="/test"
                        class="inline-block text-sm px-6 py-2.5 font-bold text-brand-red hover:text-white rounded-full bg-white hover:bg-brand-red focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Get involved now
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>