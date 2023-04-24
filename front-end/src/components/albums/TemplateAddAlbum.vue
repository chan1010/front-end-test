<script>
import feather from "feather-icons";
export default {
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 relative"
    aria-label="Single Project"
  >
    <button
      class="rounded-t-xl border-none w-full h-1/2 flex items-center justify-center text-white bg-gray-200"
      @click="$emit('update:isOpen', true)">
      <i
        data-feather="plus-circle"
        width="6rem"
        height="6rem"
      ></i>
    </button>
    <div class="px-4 py-6 text-left h-36">
      <p
        class="line-clamp-2 font-general-semibold text-xl font-semibold mb-2"
        style="
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        "
      >
        Create New Album
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
