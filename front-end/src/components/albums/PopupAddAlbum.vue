<script>
import feather from "feather-icons";
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            media: '',
            title: '',
        };
    },
    computed: { ...mapGetters(["detailAlbum"]) },
    methods: {
        ...mapActions(["addAlbum"]),
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.media = URL.createObjectURL(file)
        },
        addNewAlbum() {
            this.addAlbum({
                id: Math.random(),
                title: this.title,
                thumnail: this.media,
                numberVideos: 0,
                numberPhotos: 0,
                numberheart: 0,
                numberStar: 0,
                isMark: false
            })
            this.$emit('update:isOpen', false)
            this.media=''
            this.title=''
        }
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <div :class="isOpen ? 'block' : 'hidden'"
        class="fixed top-0 left-0 h-screen w-screen bg-black/[0.4] flex justify-center items-center">
        <div class="container mx-auto text-center boxshadow-3xl">
            <div class="bg-white relative rounded-md p-4">
                <div class="relative">
                    <label class="mt-4 text-left block text-lg text-black font-bold text-sm mb-2">Title</label>
                    <input type="text" v-modal="title"
                        class="px-4 py-2 rounded-full w-full focus:ring-0 border-gray-300 focus:border-gray-400">
                </div>
                <div>
                    <label class="mt-4 text-left block text-lg text-black font-bold text-sm mb-2">Media</label>
                    <label for="add-media" v-if="!media"
                        class="rounded-xl border-none w-full h-full flex items-center justify-center text-white bg-gray-200 p-4 cursor-pointer">
                        <i data-feather="plus-circle" width="6rem" height="6rem"></i>
                        <input @change="handleFileUpload" type="file" class="hidden" id="add-media" accept="image/*"
                            name="add-media">
                    </label>
                    <div class="w-full flex justify-center items-center" v-else>
                        <img :src="media" alt="">
                    </div>
                </div>
                <div class="grid grid-cols-2 justify-between gap-4 px-6 mt-6">
                    <button class="rounded-full border border-gray-300 text-gray-400 w-full text-center h-9"
                        @click="$emit('update:isOpen', false)">
                        Cancel
                    </button>
                    <button @click="addNewAlbum()"
                        class="rounded-full border border-primary-button text-white w-full text-center bg-primary-button h-9">
                        Save
                    </button>
                </div>
                <button class="absolute top-4 right-4 text-gray-400" @click="$emit('update:isOpen', false)">
                    <i data-feather="x"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.v-calendar {
    position: relative;
    width: 100%;
}

.v-calendar .input-field input {
    border-radius: 40px;
    height: 42px;
    padding-left: 1rem;
}

.v-calendar .input-field svg.datepicker {
    width: 0;
}
</style>
