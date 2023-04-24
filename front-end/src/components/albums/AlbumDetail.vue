<script>
import feather from "feather-icons";

export default {
    props: {
        album: {
            type: Object,
            default: () => ({ content: '' }),
        },
    },
    data() {
        return {
            isSeeMore: false,
        };
    },
    computed: {
        contentWordsCount() {
            if (this.album && this.album.content) {
                const words = this.album.content.split(' ');
                return words.length;
            }
            return 0;
        }
    },
    methods: {
        formatDate(dateString) {
            const dateObj = new Date(dateString);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return dateObj.toLocaleDateString('en-GB', options);
        }
    },
    watch: {
        contentWordsCount(newCount) {
            this.isSeeMore = newCount > 20;
        },
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <div class="w-full p-4 rounded-xl relative shadow-3xl flex justify-between">
        <div class="text-left max-w-xl pr-6">
            <h2 class="font-bold text-black lg:text-4xl mb-3 sm:text-lg">{{ album.title }}</h2>
            <span class="text-gray-400">{{ formatDate(album.registeredAt) }}</span>
            <div class="content-text">
                <p v-html="album.content" class="mt-3" :class="{ 'line-clamp-none': !isSeeMore,'line-clamp-2': isSeeMore  }"></p>
                <button v-if="isSeeMore" @click="isSeeMore = false"
                    class="text-primary-light font-bold">See
                    more</button>
                <button v-if="!isSeeMore" @click="isSeeMore = true"
                    class="text-primary-light font-bold">Less
                    more</button>
            </div>
        </div>
        <div class="flex flex-col items-end pl-8">
            <div class="flex">
                <div class="flex flex-col items-center">
                    <button class="cursor-pointer duration-500 text-gray-400">
                        <i data-feather="star" class="text-gray-400"
                            :class="{ 'fill-yellow-500 text-yellow-500': album.numberStar > 0 }"></i>
                    </button>
                    <span class="mt-4 text-gray-500" > {{ album.numberStar }} star Album</span>
                </div>
                <div class="mx-4"><i data-feather="more-vertical" class="text-gray-400"></i></div>
            </div>
            <div class="grid mt-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-4 text-gray-500">
                <span
                    class="relative after:content-[''] xl:after:h-1/2 xl:after:w-px xl:after:bg-gray-400 xl:after:absolute after:bottom-[6px] xl:after:right-[-10px]">{{
                        album.numberMedias }} Medias</span>
                <span
                    class="relative after:content-[''] xl:after:h-1/2 xl:after:w-px xl:after:bg-gray-400 xl:after:absolute after:bottom-[6px] xl:after:right-[-10px]">{{
                        album.numberVideos }} Videos</span>
                <span>{{ album.numberPhotos }} Photos</span>
            </div>
        </div>
    </div>
</template>
<style>
.line-clamp-none{
    overflow: visible;
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-line-clamp: none;
}

.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>