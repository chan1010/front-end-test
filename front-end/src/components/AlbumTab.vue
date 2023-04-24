<script>
export default {
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
	<div class="m-0 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 items-center shadow-lg sm:shadow-none xl:max-w-screen-xl border-b-2">
		<router-link to="/albums"
			class="font-general-medium block relative text-left text-xl font-semibold text-secondary-text hover:text-primary-text sm:py-2"
			aria-label="Album">Albums</router-link>
		<router-link to="/media"
			class="font-general-medium block relative text-left text-xl font-semibold text-secondary-text hover:text-primary-text  sm:mx-4 sm:py-2 border-t-2 pt-6 sm:pt-2 sm:border-t-0 border-primary-light"
			aria-label="Media">Media</router-link>
	</div>
</nav></template>

<style lang="scss" scoped></style>