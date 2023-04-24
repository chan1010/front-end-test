<script>
import feather from "feather-icons";
import FormInputCheckbox from "../reusable/FormInputCheckbox.vue";
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { mapGetters } from "vuex";
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: () => false,
        },
    },
    components: {
        FormInputCheckbox, Datepicker: VueDatepickerUi, Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            options: [
                {
                    id: 1,
                    label: '1'
                },
                {
                    id: 2,
                    label: '2'
                },
                {
                    id: 3,
                    label: '3'
                },
                {
                    id: 4,
                    label: '4'
                },
                {
                    id: 5,
                    label: '5'
                },
            ],
            selectedDate: new Date(),
            isTag: false,
            valueTag: ''
        };
    },
    computed: { ...mapGetters(["detailAlbum"]) },
    methods: {
        getValueTag(event) {
            this.valueTag = event.target.textContent
            this.isTag = false;
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
        <div class="container mx-auto grid text-center grid-cols-2-1 boxshadow-3xl">
            <div class=" bg-black/[0.8] rounded-l-md">
                <carousel>
                    <slide v-for="media in detailAlbum.photos" :key="media">
                        <div class="">
                            <img :src="media.thumnail" :alt="media.title">
                        </div>
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
            <div class="bg-white relative rounded-r-md p-4">
                <div>
                    <label class="text-left block text-lg text-black font-bold text-sm mb-2" for="textarea">Company</label>
                    <textarea
                        class="focus:border-gray-300 w-full px-5 focus:ring-offset-0 focus:ring-transparent py-2 border border-gray-300  border-opacity-50 text-gray-400 rounded-md shadow-sm text-md resize-none"
                        name="textarea" cols="14" rows="6"></textarea>
                </div>
                <div>
                    <label class="mt-4 text-left block text-lg text-black font-bold text-sm mb-2"
                        for="textareaIdentifier">Date</label>
                    <Datepicker inputClass="w-full rounded-full border-gray-300 focus:ring-0" circle lang="en"
                        v-model="selectedDate" />
                </div>
                <div class="relative">
                    <label class="mt-4 text-left block text-lg text-black font-bold text-sm mb-2"
                        for="textareaIdentifier">Tag</label>
                    <div type="text"
                        class=" flex justify-between focus:border-gray-300 h-[42px] text-left w-full text-gray-400 rounded-full border-gray-300 focus:ring-0"
                        @click="isTag = true"><span>{{ valueTag }}</span><i data-feather="chevron-down"></i></div>
                    <ul :class="isTag ? 'block' : 'hidden'" class="grid w-full absolute bg-white shadow-3xl rounded-lg">
                        <li class="flex items-center w-full p-4 rounded-t-lg cursor-pointer hover:bg-gray-100">
                            <div class="rounded-full bg-primary-button h-6 w-6 mr-4 "></div>
                            <span @click="getValueTag($event)">Lorem ipsum dolor</span>
                        </li>
                        <li class="flex items-center w-full p-4 rounded-b-lg cursor-pointer hover:bg-gray-100">
                            <div class="rounded-full bg-primary-button h-6 w-6 mr-4"></div>
                            <span @click="getValueTag($event)">Lorem ipsum dolor</span>
                        </li>
                    </ul>
                </div>
                <div class="mt-4">
                    <FormInputCheckbox v-for="option in options" :key="option.id" :label="option.label"
                        :inputIdentifier="option.id" :val="false" :inputType="checkbox" />
                </div>
                <div class="grid grid-cols-2 justify-between gap-4 px-6 mt-6">
                    <button class="rounded-full border border-gray-300 text-gray-400 w-full text-center h-9"
                        @click="$emit('update:isOpen', false)">Cancel</button>
                    <button
                        class="rounded-full border border-primary-button text-white w-full text-center bg-primary-button h-9">Save</button>
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
