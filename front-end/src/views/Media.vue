<script>
import MediaListGrid from '../components/media/MediaListGrid.vue';
import AlbumTab from '../components/AlbumTab';
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Albums',
    components: {
        MediaListGrid,
        AlbumTab
    },
    data() {
        return {
            product: {},
        };
    },
    computed: { ...mapGetters(["detailAlbum"]) },
    methods: {
        ...mapActions(["fetchDetailAlbums"])
    },
    async created() {
        await this.fetchDetailAlbums(this.$route.params.id||1)

    },
};
</script>

<template class="bg-gray-50">
    <AlbumTab />
    <div class="container mx-auto">
        <MediaListGrid :medias="detailAlbum.photos" />
    </div>
</template>

<style scoped></style>