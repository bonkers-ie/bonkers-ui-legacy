<template>
	<div
		ref="tiBtn"
		class="ui-ripple"
		:class="className"
		@click="animateRipple"
	>
		<slot />

		<transition-group>
			<svg
				v-for="val in ripples"
				:ref="inputsRefs"
				:key="val.id"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				class="ripple"
				:style="{'top': val.y + 'px', 'left': val.x + 'px'}"
				fill="currentColor"
				@animationend="rippleEnd(val.id)"
			>
				<circle
					cx="50"
					cy="50"
					r="50"
				/>
			</svg>
		</transition-group>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { v4 as uuidv4 } from "uuid";

	const ripples = ref<{x:number, y:number, id:string}[]>([]);
	const tiBtn = ref<HTMLDivElement>();
	const inputsRefs = ref<Array<HTMLSpanElement | null>>([]);

	defineProps<{
		className?: string;
	}>();

	const animateRipple = (e:MouseEvent)=> {
		if(tiBtn.value){
			const pos = tiBtn.value.getBoundingClientRect();

			ripples.value.push({
				x: e.clientX - pos.left,
				y: e.clientY - pos.top,
				id: uuidv4(),
			});
		}
	};
	const rippleEnd = (i: string)=> {
		ripples.value = ripples.value.filter(val=>val.id !== i);
	};
</script>

<style>
	.ui-ripple {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.ripple {
		position: absolute;
		will-change: transform, opacity;
		transform: translate3d(-50%, -50%, 0) scale(0);
		mix-blend-mode: screen;
		animation: ripple 1s ease-out forwards, fade 1s ease-out forwards;
		z-index: 1;
	}

	@keyframes ripple {
		0% { transform: translate3d(-50%, -50%, 0) scale(0); }
		80% { transform: translate3d(-50%, -50%, 0) scale(10); }
		100% { transform: translate3d(-50%, -50%, 0) scale(10); }
	}

	@keyframes fade {
		0% { opacity: 1; }
		100% { opacity: 0; }
	}
</style>
