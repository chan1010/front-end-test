<script>
import feather from "feather-icons";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    ...mapActions(["addMediaDetailAlbum"]),
    handleFileUpload(event) {
      const file = event.target.files[0];
      const objectURL = URL.createObjectURL(file)
      this.addMediaDetailAlbum({
        id: Math.random(), thumnail: objectURL, 
        isHeart: false,
        isMark: false,
        numberheart: 0,
        numberStar: 0,
      })

    }
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 relative grid grid-rows-2-3.5"
    aria-label="Single Project">
    <label for="add-media"
      class="rounded-t-xl border-none w-full h-full flex items-center justify-center text-white bg-gray-200 p-4 cursor-pointer">
      <i data-feather="plus-circle" width="6rem" height="6rem"></i>
      <input @change="handleFileUpload" type="file" class="hidden" id="add-media" accept="image/*" name="add-media">
    </label>
    <p class="font-general-semibold text-xl font-semibold text-left pl-4 leading-[3.5rem]">
      Add Photos
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
