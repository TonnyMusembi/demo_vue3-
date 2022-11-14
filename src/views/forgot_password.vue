<template>
  <div class="absolute top-0 bottom-0 left-0 right-0 bg-white overflow-auto">
    <div class="grid grid-cols-4 h-full">
      <div class="h-full items-center p-8 pt-48">
        <div class="w-full">
          
          <div class="block">
            <div class="block text-lg font-medium text-gray-500 mt-10 mb-2">
              New Password
            </div>
            <div class="block mb-3">
              <label for="" class="block text-xs font-medium text-gray-500 mb-2"
                >Enter new password</label
              >
              <input
                class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-blue-300"
                placeholder=""
                v-model="password"
              />
            </div>
            <div class="block mb-3">
              <label for="" class="block text-xs font-medium text-gray-500 mb-2"
                >Confirm new password</label
              >
              <input
                class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-blue-300"
                placeholder=""
                v-model="password"
              />
            </div>

            <div class="block">
              <button
                type="submit"
                class="block text-center rounded-md bg-red-500 x-3 py-2 text-white w-full"
                v-on:click="confirmReset"
              >
                <span>Reset</span>
              </button>
              <!-- <router-link :to="{name: ''}" class="block w-full text-center rounded-md bg-gray-600 px-3 py-2 text-white w-full">Reset password</router-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 h-full bg-black">
        <div class="text-center">
          <img
            src="../assets/vue.svg"
            width="700"
            class="inline-block mb-2 rounded-full p-1 py-64"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user_name: "",
      password: "",
      check: 0,
    };
  },
  methods: {
    async confirmReset() {
  
      const payload = {
        user_name: localStorage.getItem("username"),
        password: this.password,
        check: this.check,
      };
      const url = ``;

      await axios
        .post(url, payload)
        .then((response) => {
          console.log(response);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
