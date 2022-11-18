<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";
const odds = ref("");
const digits = ref("");
const searchValue = ref("");
const show = () => {
  const payload = {
    params: {
      region: "us",
      sport: "upcoming",
      oddsFormat: "decimal",
      market: "h2h",
      dateFormat: "iso",
    },
    headers: {
      "X-RapidAPI-Key": "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };
  const url = `https://odds.p.rapidapi.com/v1/odds`;
  axios
    .get(url, payload)
    .then((response) => {
    //   console.log(response.data.data);
      odds.value = response.data.data;
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

const generateOtp = (limit) => {
  console.log(limit);
  digits.value = "0123456789";
  let OTP = "";
  for (let i = 0; i < limit; i++) {}
  return OTP;
  // console.log(OTP);
};
// console.log();

const games = ()=>{
    const payload={

    }
    const url =``
    

}
onMounted(() => {
  show();
  generateOtp();
});
</script>
<template>
  <div class="col-6 row-auto text-center">
    <button
      class="bg-green-800 text-white active:bg-green-800 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      <router-link :to="{ name: 'forgot_password' }" class="button primary">
        Register</router-link
      >
    </button>
  </div>
  <div class="relative p-4 w-1/2 columns-md-6 border-b bg-gray-50">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      class="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
    </svg>
    <svg width="32" height="32">
      <g fill="currentColor">
        <path
          d="M4.273 9.228c-.735-2.284.039-4.883 2.033-6.294 1.994-1.411 4.588-1.178 6.32.396.542.497.484 1.4-.106 1.817l-6.601 4.66c-.6.416-1.414.132-1.646-.579ZM16 11a1 1 0 0 1 1 1v4.465l2.555 1.703a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.445-.849V12a1 1 0 0 1 1-1Z"
        />
        <path
          d="M23.207 24.58A10.478 10.478 0 0 0 27 16.5C27 10.701 22.299 6 16.5 6S6 10.701 6 16.5a10.47 10.47 0 0 0 3.297 7.64l-2.586 2.237C5.317 27.588 6.11 30 7.905 30H24.09c1.796 0 2.599-2.412 1.194-3.623l-2.077-1.798ZM16.5 24a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM26.694 2.934c1.994 1.41 2.768 4.01 2.033 6.294-.232.71-1.046.995-1.646.579l-6.6-4.66c-.591-.416-.65-1.32-.107-1.817 1.732-1.574 4.326-1.807 6.32-.396Z"
        />
      </g>
    </svg>
    <input
      class="rounded-md px-4 py-3 flex justify-center w-full border-2 border-gray-300 mb-1"
      placeholder="Search by name  "
      v-model="searchValue"
      @keydown="filteredTickets"
    />

    <div class="text-xs text-gray-400 mt-1 italic">Press Enter to search</div>
  </div>
  <div class="col-6 row-auto text-center">
    <button
      class="bg-green-800 text-white active:bg-green-800 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      Teams
    </button>
  </div>
  <div class="relative p-2">
    <div class="col-6 shadow-md rounded-md py-1 px-2 bg-white-700 text-black">
      <div class="text-sm font-medium font-gotham">Home Teams</div>
      <div class="text-2xl" v-for="(odd, index) in odds" :key="index">
        <h1>{{ odd.sport_nice }}</h1>
      </div>
    </div>
  </div>

  <div class="relative p-4">
    <table table class="w-full border rounded-md overflow-hidden">
      <thead>
        <tr class="text-sm bg-gray-100 text-left divide-x">
          <th class="py-2 px-3">Home Team</th>
          <th class="py-2 px-3">Time</th>
          <th class="py-2 px-3">Title</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="text-sm divide-x" v-for="(odd, index) in odds" :key="index">
          <td class="py-2 px-3" v-text="odd.home_team"></td>
          <td class="py-2 px-3" v-text="odd.commence_time"></td>
          <td class="py-2 px-3" v-text="odd.id"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div></div>
</template>
