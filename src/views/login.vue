<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
//const net = ref("");
const searchValue = ref("");

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
      //   console.log(response.data);
      odds.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(net);
};
const filteredTickets = () => {
  if (odds.value === 0) return;
  odds.value = odds.value.filter((odd) =>
    odd.home_team.toLowerCase().includes(searchValue.value.toLowerCase())
  );
};
onMounted(() => {
  next();
});
</script>
<template>
  <div class="col-6 row-auto flex justify-center">
    <!-- <div>showing Predictions fro Teams</div> -->
    <div><h2>Showing Games Predictions</h2></div>

    <button
      class="bg-green-800 text-white active:bg-green-800 font-bold lowercasetext-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      <router-link :to="{ name: 'register' }" class="button primary"
        >Odds</router-link
      >
    </button>
  </div>
  <div class="relative-4 p-4 w-1/2 columns-md-6 border-b bg-gray-50">
    <input
      class="rounded-md px-4 py-3 flex justify-center w-full border-2 border-gray-300 mb-1"
      placeholder="Search by name  "
      v-model="searchValue"
      @keydown="filteredTickets"
    />

    <div class="text-xs text-gray-400 mt-1 italic">Press Enter to search</div>
  </div>

  <div class="p-6 max-w-sm mx-auto">
    <h1></h1>
  </div>
  <div class="relative p-4">
    <table table class="w-full border rounded-md overflow-hidden">
      <thead>
        <tr class="text-sm bg-green-400 text-left divide-x">
          <th class="py-2 px-3">Details</th>
          <th class="py-2 px-3">Group</th>
          <th class="py-2 px-3">Title</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="text-sm divide-x" v-for="(odd, index) in odds" :key="index">
          <td class="py-2 px-3" v-text="odd.details"></td>
          <td class="py-2 px-3" v-text="odd.group"></td>
          <td class="py-2 px-3" v-text="odd.title"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
