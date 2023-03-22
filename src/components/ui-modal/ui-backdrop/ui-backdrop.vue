<template>
	<div>
		<div
			class="
				backdrop-color
				fixed
				backdrop-blur-sm
				transition-all
				inset-0
				z-0
				"
		/>

		<slot />
	</div>
</template>

<style lang="css" scoped>
	.backdrop-color {
		background-color: rgb(0 0 0 / 50%);
	}
</style>
