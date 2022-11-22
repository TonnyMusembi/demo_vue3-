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
      console.log(response.data);
      odds.value = response.data.data;
      if (success === true) {
        return  redirect ('/');
        console.log(success);
      }
    })
    .catch((error) => {
      console.log(error);
    });
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
  <div>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-green-900"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="/" class="flex items-center">
          <img src="../assets/vue.svg" class="h-6 mr-3 sm:h-9" alt=" Logo" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Predictions</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="odd"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >About</a
              >
            </li>
            <li>
              <a
                href="barchart"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="col-6 row-auto flex justify-center">
    <h2>Showing Games Predictions</h2>
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
        <tr class="text-sm bg-gray-200 text-left divide-x">
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
