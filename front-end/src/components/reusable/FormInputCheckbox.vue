<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		inputIdentifier: {
			type: String,
			default: '',
		},
		val: {
			type: [Boolean],
			default: false,
		},
	},
};
</script>

<template>
	<div class="flex items-center gap-4 mt-2">
		<input
			class="w-1 pr-5 pt-5 border border-gray-300 border-opacity-50 text-primary-dark bg-ternary-light focus:ring-offset-0 focus:ring-transparent rounded-md shadow-sm text-md"
			:id="inputIdentifier"
			:name="inputIdentifier"
			:aria-label="inputIdentifier"
			:value="val"
			type="checkbox"
			v-bind="$attrs"
			@input="$emit('update:val', $event.target.value)"
		/>
		<label
			class="block text-lg text-gray-400"
			:for="label"
			>{{ label }}</label
		>
	</div>
</template>
