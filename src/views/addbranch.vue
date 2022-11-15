<template>
  <div class="container mx-auto w-1/2 bg-gray-100 p-5">
    <div>Add Branch</div>
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
          id="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="califam holdings limited "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Name"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Name</label
        >
        <input
          name="name"
          type="text"
          id="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Physical Address"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Physical Address</label
        >
        <input
          name="Physical Address"
          type="text"
          id="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="physical Address "
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add branch
      </button>
    </form>
  </div>
</template>
