<template>
	<label
		class="ui-radio grid cursor-pointer"
		:class="[
			slots.default && 'items-center gap-xs',
			(!justify || justify === EJustify.START) && 'justify-start',
			justify === EJustify.END && 'justify-end',
			justify === EJustify.AROUND && 'justify-around',
			justify === EJustify.BETWEEN && 'justify-between',
			justify === EJustify.EVENLY && 'justify-evenly',
			justify === EJustify.CENTER && 'justify-center',
			className
		]"
	>
		<input
			:id="value"
			v-model="localValue"
			type="radio"
			:name="name"
			:value="value"
			class="appearance-none absolute"
			@input="$emit('update:modelValue', $event.target.value)"
		>
		<span
			class="ui-radio_custom block w-md h-md border border-2 border-primary rounded-full relative"
			:class="invertOrder && 'order-last'"
		>
			<span class="ui-radio__dot absolute w-xs h-xs block bg-primary rounded-full" />
		</span>
		<slot />
	</label>
</template>

<script lang="ts" setup>
	import { ref, useSlots, watch } from "vue";
	import { EJustify } from "../../_types/align";
	const slots = useSlots();
	const props = defineProps<{
		modelValue: string;
		className?: string;
		name: string;
		value: string;
		justify?: EJustify;
		invertOrder?: boolean;
	}>();

	defineEmits(["update:modelValue"]);

	const localValue = ref(props.modelValue);

	watch(()=>props.modelValue, (newValue)=>{
		if(newValue !== localValue.value){
			localValue.value = newValue;
		}
	});
</script>

<style>
	.ui-radio {
		grid-template-columns: auto auto;
	}

	.ui-radio__dot {
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0) scale(0);
		transition: transform 0.2s ease-in-out;
	}

	input:checked + .ui-radio_custom .ui-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(1);
	}
</style>
