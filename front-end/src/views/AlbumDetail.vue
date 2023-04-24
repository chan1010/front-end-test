<script>
import MediaListGrid from '../components/media/MediaListGrid.vue';
import AlbumDetail from '../components/albums/AlbumDetail.vue';
import MediaDetail from '../components/media/MediaDetail.vue';
import { mapActions, mapGetters } from "vuex";
export default {
	name: 'About',
	components: {
		MediaListGrid,
		AlbumDetail,
		MediaDetail
	},
	data: () => {
		return {
			isOpen: false,
		};
	},
	computed: { ...mapGetters(["detailAlbum"])},
	methods: {
		...mapActions(["fetchDetailAlbums"]),
		updateIsOpen(valueIsOpen) {
			this.isOpen = valueIsOpen
		}
	},
	async mounted() {
		await this.fetchDetailAlbums(this.$route.params.id)
	},
};
</script>

<template>
	<div>
		<!-- About detail Album -->
		<div class="container mx-auto">
			<AlbumDetail :album="detailAlbum" />
		</div>
		<!-- List image in Album -->
		<div class="container mx-auto">
			<MediaListGrid @update:isOpen="updateIsOpen" :medias="detailAlbum.photos" />
		</div>
	</div>
	<MediaDetail @update:isOpen="updateIsOpen" :isOpen="isOpen" />
</template>

<style scoped></style>
