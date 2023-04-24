<script>
import feather from "feather-icons";
import { mapActions,mapGetters } from "vuex";
export default {
  props: ["media"],
  mounted() {
    feather.replace();
  },
  computed:{
    ...mapGetters(["isLoading"])
  },
  methods: {
    ...mapActions(["updateHeartMediaInAlbum"]),
  },
};
</script>

<template>
  <div
    class="rounded-xl relative shadow-3xl hover:shadow-xl cursor-pointer mb-10 sm:mb-0 relative"
    aria-label="Single Project"
  >
    <div @click="$emit('update:isOpen', true)" :class="{'bg-slate-200 h-full':!isLoading}">
      <img
        :src="media.thumnail"
        :alt="media.title"
        class="rounded-xl border-none"
      />
    </div>
    <div class="flex p-4 justify-between w-full absolute bottom-0 left-0 rounded-b-xl bg-black/[0.3]">
      <button class="cursor-pointer duration-500 text-gray-300 flex" @click="updateHeartMediaInAlbum(media.id)">
        <svg v-if="media.isHeart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart fill-rose-500 text-rose-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      <button class="cursor-pointer duration-500 text-gray-300">
        <i data-feather="star" :class="{ 'fill-yellow-500 text-yellow-500': media.isMark}"></i>
      </button>
    </div>
</div>
</template>

