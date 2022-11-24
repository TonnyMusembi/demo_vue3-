<template>
  <div class="fixed w-64 left-0 top-0 bottom-0 border-r bg-black">
    <div class="text-center p-4">
      <img width="100" class="inline-block mb-2 rounded-full p-1" />
    </div>
    <ul class="mt-8 w-full text-sm font-gotham">
      <li
        class="text-white text-opacity-75 mb-2 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link
          :to="{ name: '' }"
          class="px-6 py-2 block"
        ></router-link>
      </li>
      <li
        class="text-white text-opacity-75 mb-2 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link :to="{ name: 'login' }" class="px-6 py-2 block">
          View </router-link
        >
      </li>
      <!-- <li class="text-white text-opacity-75 mb-2 border-l-4 border-red-500 border-opacity-0" :class="{'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium': $route.name == 'events'}"><router-link :to="{name: ''}" class="px-6 py-2 block">Events</router-link></li> -->
      <li
        class="text-white text-opacity-75 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link :to="{ name: '' }" class="px-6 py-2 block"
          >Profiles</router-link
        >
      </li>
      <div class="my-4 border-b border-neutral-700"></div>
      <li
        class="text-white text-opacity-75 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link :to="{ name: '' }" class="px-6 py-2 block"
          >Transactions</router-link
        >
      </li>

      <li
        class="text-white text-opacity-75 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link :to="{ name: '' }" class="px-6 py-2 block"
          >Tickets
        </router-link>
      </li>
      

      <div class="my-4 border-b border-neutral-700"></div>
      <li
        class="text-white text-opacity-75 mb-2 border-l-4 border-green-800 border-opacity-0"
        :class="{
          'bg-white bg-opacity-10 border-opacity-100 text-opacity-100 font-medium':
            $route.name == '',
        }"
      >
        <router-link :to="{ name: '' }" class="px-6 py-2 block"
          >Admin</router-link
        >
      </li>

      <li class="absolute bottom-6 text-white left-0">
        <router-link class="px-6 py-2 block" :to="{ name: '' }"
          >Logout</router-link
        >
      </li>
    </ul>
  </div>
</template>
