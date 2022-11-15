<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";

onMounted(() => {
  const myChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Loans given",
        data: [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: "hsl(252, 82.9%, 67.8%)",

        borderColor: "hsl(252, 82.9%, 67.8%)",

        borderWidth: 1,
      },
    ],
  };
  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: myChart,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>
<template>
  <div class="relative p-6">
    <div class="block md:hidden text-sm text-gray-500 mb-3">Reports</div>
    <div class="grid grid-cols-4 gap-6">
      <div class="col shadow-md rounded-md py-1 px-2 bg-white-700 text-black">
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"
            />
          </svg>
        </div>
        <div class="text-sm font-medium">Registered Companies</div>
      </div>
      <div class="col shadow-md rounded-md py-2 px-2 bg-white-700 text-black">
        <div class="text-sm font-medium font-gotham">
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
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
        </div>
        <div class="text-sm">Amount Disbursed</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-2 px-2 bg-white-700 text-black"
      >
        <div class="text-sm font-medium font-gotham">
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
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z"
            />
          </svg>
        </div>
        <div class="text-sm">Failed Loans</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-2 px-2 bg-white-700 text-black"
      >
        <div class="text-sm font-small font-gotham"></div>
        <div>
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
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            />
          </svg>
        </div>
        <div class="text-sm">Total collections</div>
      </div>
    </div>

    <div
      class="grid grid-cols-3 mt-6 shadow-md border overflow-hidden bg-white"
    >
      <div class="col-span-2 bg-white rounded-md py-3 px-4">
        <div class="text-md text-gray-500 font-medium font-gotham">
          Purchases
        </div>
        <canvas id="myChart" width="500" height="250"></canvas>
      </div>
    </div>
    <div>
      <br />
      Percentage
    </div>
    <!-- <div class="w-1/4 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style="width: 45%"
      >
        45%
      </div>
    </div> -->
  </div>
</template>
