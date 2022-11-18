<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const shazam = ref();
const games = () => {
  console.log(shazam);
  const payload = {
    params: { term: "kiss the rain", locale: "en-US", offset: "0", limit: "5" },
    headers: {
      "X-RapidAPI-Key": "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  const url = `https://shazam.p.rapidapi.com/search`;

  axios
    .get(url, payload)
    .then((response) => {
      shazam.value = response.data.tracks.hits;
      //   console.log(shazam.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  games();
});
</script>

<template>
  <div class="mx-auto w-1/2 p-5">
    <!-- <button v-on:click="games">Api call</button>
    <div v-for="(tracks, index) in shazam" :key="index">
      <div>{{ tracks.snippet }}</div>
    </div> -->
    <br />
    <form @submit.prevent="">
      <div class="text-sm mb-2 text-black-500 font-medium text-center">
        Create User
      </div>
      <div class="mb-2">
        <label
          for="full_names"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Full Name</label
        >
        <input
          name="full_names"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="full name "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="phone_number"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Phone Number</label
        >
        <input
          name="phone-number"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="phone number "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="enter-password"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Enter password</label
        >
        <input
          name="new password"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" new password"
          required
        />
      </div>
      <div class="block mb-3">
        <label for="" class="block text-sm font-medium text-black-900 mb-2"
          >Confirm password</label
        >
        <input
          name="confirm password"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="confirm password "
          required
        />
      </div>
      <div class="block px-4 py-2 text-gray-600 text-sm rounded-md"></div>
      <div class="block">
        <button
          type="submit"
          class="block w-full text-center rounded-md bg-[#2C7075] px-3 py-2 text-white"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>
