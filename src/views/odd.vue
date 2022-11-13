<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";
const odds = ref("");
const digits = ref("");
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
      console.log(response.data.data);
      odds.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const generateOtp = (limit) =>{
    console.log(limit);
     digits.value = '0123456789';
    let OTP = '';
    for (let i =0;i<limit;i++){

    }
    return OTP;
    // console.log(OTP);
}
// console.log();

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
      Odds
    </button>
  </div>
   <div class="relative p-2">
   <div class="col-6 shadow-md rounded-md py-1 px-2 bg-gray-700 text-white">
        <div class="text-sm font-medium font-gotham">odds</div>
        <div class="text-2xl" v-for="(odd, index) in odds" :key="index">
            <h1>{{odd.sport_nice}}</h1>

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
