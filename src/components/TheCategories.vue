<template>
  <section
    class="fixed z-10 top-80px bg-white border-b-2 text-xs text-slate-600 w-full py-2 md lg:pl-40 bg-opacity-95"
  >
    <ul class="flex gap-4 items-center overflow-auto whitespace-nowrap px-2">
      <li>
        <button
          class="active min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 rounded-full hover:bg-blue-100 gap-1"
        >
          All
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Meditation music
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-2 00 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Chill-out music
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Melodramas
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Mysteries
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Deisel show
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Greatest hits
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          History
        </button>
      </li>
      <li>
        <button
          class="min-w-16 justify-center py-1 px-3 flex items-center border border-gray-200 bg-gray-100 rounded-full hover:bg-blue-100 gap-1"
        >
          Techno music
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
.active {
  color: white;
  background-color: red;
}
</style>
