<script>
import feather from "feather-icons";
import { mapActions,mapGetters } from "vuex";
export default {
  props: ["album"],
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
  computed:{
    ...mapGetters(["isLoading"])
  },
  methods: {
    ...mapActions(["updateMark"]),
  },
};
</script>

<template>
  <a class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 relative" aria-label="Single Project">
    <router-link :to="{
      name: 'AlbumDetail',
      params: { id: album.id },
      query: { title: album.slug },
    }">
      <div :class="{'bg-slate-200 h-10':!isLoading}">
        <img :src="album.thumnail" :alt="album.title" class="rounded-t-xl border-none object-cover h-full w-full" />
      </div>
      <div class="px-4 py-6 text-left h-36">
        <p class="line-clamp-2 font-general-semibold text-xl font-semibold mb-2" style="
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        ">
          {{ album.title }}
        </p>
        <span class="font-general-medium text-base text-gray-400">{{ album.numberVideos }} photos, {{ album.numberPhotos
        }} videos</span>
      </div>
    </router-link>
    <div class="flex py-4 mx-4 justify-between border-t border-solid border-gray-100">
      <button class="cursor-pointer duration-500 text-gray-300 flex">
        <i data-feather="heart" :class="{ 'fill-rose-500 text-rose-500': album.numberheart > 0 }"></i> <span
          class="text-gray-300 ml-1">{{ album.numberheart }}</span>
      </button>
      <button class="cursor-pointer duration-500 text-gray-300" @click="updateMark(album.id)">
        <svg v-if="!album.isMark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-yellow-500 text-yellow-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
    </div>
  </a>
</template>

<style lang="scss" scoped></style>
