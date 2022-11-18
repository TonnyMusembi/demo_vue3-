<script setup lang="ts">
</script>
<template>
  <div class="container mx-auto w-1/2 bg-gray-100 p-5">
    <div>Add Loan Product</div>
    <br />
    <form>
      <div class="mb-2">
        <label
          for="company"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Company</label
        >
        <input
          name="company"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="califam holdings limited "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Name</label
        >
        <input
          name="name"
          type="text"
          placeholder="name"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Percentage Interest"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Percentage Interest</label
        >
        <input
          name="Percentage Interest"
          type="text"
          placeholder="percentage Interest"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Duration days"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Duration days</label
        >
        <input
          name="Duration days"
          for="text"
          placeholder="Duration days"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Number of installments"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Number of installments
        </label>
        <input
          name="Number of installments"
          for="text"
          placeholder="Number of installments"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Max amount allowed"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Max amount allowed(leave empty or 0 for all amounts)
        </label>
        <input
          name="Max amount allowed"
          type="text"
          placeholder="max amount allowed"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Max percent allowed"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Max percent allowed(leave empty or 0 for all amounts)
        </label>
        <input
          name="Max percent allowed"
          type="text"
          placeholder="max percentage allowed"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Transaction cost"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Transaction cost
        </label>
        <input
          name="Transaction cost"
          for="Transaction cost"
          placeholder="transaction cost"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Loan Product
      </button>
    </form>
  </div>
</template>
