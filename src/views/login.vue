<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
//const net = ref("");
const odds = ref("");
const next = () => {
  const payload = {
    params: { apiKey: "abcdefg1234567890", all: "true" },
    headers: {
      "X-RapidAPI-Key": "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };
  const url = `https://odds.p.rapidapi.com/v1/sports`;
  axios
    .get(url, payload)
    .then((response) => {
      console.log(response.data);
       odds.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(net);
};
onMounted(() => {
  next();
});
</script>
<template>
   
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <!-- <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> -->
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
  <div class="p-6 max-w-sm mx-auto" v-on:click="next">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      net
    </button>
  </div>

  <div class="p-6 max-w-sm mx-auto">
    <h1></h1>
  </div>
  <div class="relative p-4">
    <table table class="w-full border rounded-md overflow-hidden">
      <thead>
        <tr class="text-sm bg-gray-100 text-left divide-x">
          <th class="py-2 px-3">Details</th>
          <th class="py-2 px-3">Group</th>
          <th class="py-2 px-3">Title</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr
          class="text-sm divide-x"
          v-for="(odd, index) in odds"
          :key="index"
        >
          <td class="py-2 px-3" v-text="odd.details"></td>
          <td class="py-2 px-3" v-text="odd.group"></td>
          <td class="py-2 px-3" v-text="odd.title"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div class="col-6 row-auto text-left">
    <button
      class="bg-green-800 text-white active:bg-green-800 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      <router-link :to="{ name: 'register' }" class="button primary"
        >Ticket Types</router-link
      >
    </button>
  </div>
    <!-- <router-link :to=""></router-link> -->
  </div>
</template>
