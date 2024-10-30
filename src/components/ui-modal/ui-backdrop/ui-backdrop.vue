<template>
	<div>
		<div
			class="backdrop-color fixed inset-0 z-0 backdrop-blur-min transition-all"
		/>

		<slot />
	</div>
</template>

<style lang="css" scoped>
	.backdrop-color {
		background-color: rgb(0 0 0 / 50%);
	}
</style>
