<template>
  <div class="col-6 row-auto text-center">
    <button
      class="bg-green-800 text-white active:bg-green-800 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      <router-link :to="{ name: 'odd' }" class="button primary"
        > View Odds</router-link
      >
    </button>
  </div>
   <div class="col-6 row-auto text-right">
    <button
      class="bg-green-400 text-white active:bg-green-400 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      <router-link :to="{ name: 'addproduct' }" class="button primary"
        > addproducts</router-link
      >
    </button>
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
        <tr class="text-sm divide-x" v-for="(odd, index) in odds" :key="index">
          <td class="py-2 px-3" v-text="odd.details"></td>
          <td class="py-2 px-3" v-text="odd.group"></td>
          <td class="py-2 px-3" v-text="odd.title"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      odds: [],
    };
  },
  methods: {
    games() {
      const payload = {
        params: { apiKey: "abcdefg1234567890", all: "true" },
        headers: {
          "X-RapidAPI-Key":
            "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
          "X-RapidAPI-Host": "odds.p.rapidapi.com",
        },
      };

      const url = `https://odds.p.rapidapi.com/v1/sports`;
      axios
        .get(url, payload)
        .then((response) => {
          console.log(response.data);
          this.odds = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.games();
  },
};
</script>
