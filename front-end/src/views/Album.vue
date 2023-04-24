<script>
import AlbumListGrid from '../components/albums/AlbumListGrid.vue';
import PopupAddAlbum from '../components/albums/PopupAddAlbum.vue';
import { InfiniteScroll } from '../directives/InfiniteScroll'
import AlbumTab from '../components/AlbumTab';
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Albums',
    components: {
        AlbumListGrid,
        AlbumTab,
        PopupAddAlbum
    },
    directives: {
        InfiniteScroll
    },
    data() {
        return {
            albums: [],
            isOpen: false,
            page: 0
        };
    },
    computed: { ...mapGetters(["listAlbum"]) },
    watch: {
        listAlbum(newVal) {
            this.albums = newVal
        }
    },
    methods: {
        ...mapActions(["fetchAllAlbums","loadmoreAlbums"]),
        updateIsOpen(valueIsOpen) {
            this.isOpen = valueIsOpen
        },
    fetchMoreData() {
      this.loadmoreAlbums({ page: this.page, size: 12 })
      this.page = this.page ++
    }
    },
    async mounted() {
        await this.fetchAllAlbums({ page: this.page, size: 11 })
    }
};
</script>

<template class="bg-gray-50">
    <AlbumTab />
    <div class="container mx-auto">
        <AlbumListGrid :albums="this.albums" @update:isOpen="updateIsOpen" />
    </div>
    <PopupAddAlbum @update:isOpen="updateIsOpen" :isOpen="isOpen" />
    <div v-infinite-scroll="{callback: fetchMoreData}">
    </div>
</template>

<style scoped></style>