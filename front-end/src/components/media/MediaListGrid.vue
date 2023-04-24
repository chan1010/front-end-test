<script>
import MediaSingle from './MediaSingle.vue';
import AddMedia from './AddMedia.vue';

export default {
	components: { MediaSingle,AddMedia },
	data: () => {
		return {
		};
	},
	props: {
		medias: {
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
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10">
			<AddMedia/>
			<MediaSingle v-for="media in medias" :key="media.id" :media="media" @update:isOpen="updateIsOpen" />
		</div>
	</section>
</template>
