<script>
import AlbumSingle from './AlbumSingle.vue';
import TemplateAddAlbum from './TemplateAddAlbum.vue';

export default {
	components: { AlbumSingle,TemplateAddAlbum },
	data: () => {
		return {
		};
	},
	props: {
		albums: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		updateIsOpen(value){
			this.$emit('update:isOpen', value)
		}
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10">
			<TemplateAddAlbum @update:isOpen="updateIsOpen" />
			<AlbumSingle v-for="album in albums" :key="album.id" :album="album" />
		</div>
	</section>
</template>
