<template>
	<div
		class="inputs grid"
		:class="className"
	>
		<div
			v-for="(_, index) in inputsCount"
			:key="index"
			class="input-wrapper"
		>
			<input
				ref="inputsRefs"
				:type="type || 'text'"
				maxlength="1"
				placeholder="&#8226;"
				@input="(e)=>inputHandler(e, index)"
				@focus="focusHandler"
				@paste="handlePaste"
			>
			<div class="bottom-wrapper" />
		</div>
	</div>
	<slot name="button" />
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	type TProps = {
		className?: string;
		inputsCount: number;
		type?: "text";
	}

	const props = defineProps<TProps>();
	const emit = defineEmits(["onFiled"]);

	const inputsRefs = ref<Array<HTMLInputElement | null>>([]);

	const doSubmit = ()=>{
		const generateString = inputsRefs.value.map(input => input?.value).join("");
		emit("onFiled", generateString);
	};

	const inputHandler = (event:Event, index:number)=>{
		if(index < props.inputsCount){
			inputsRefs.value[index + 1]?.focus();
		}

		if(index === props.inputsCount - 1){
			doSubmit();
		}
	};

	const focusHandler = (e:FocusEvent) => {
		if(e.target){
			(e.target as HTMLInputElement).select();
		}
	};

	const handlePaste = (e:ClipboardEvent) => {
		e.preventDefault();
		const pasteText = e.clipboardData?.getData("text");
		if(pasteText && pasteText.length === props.inputsCount) {
			inputsRefs.value[props.inputsCount - 1]?.focus();

			inputsRefs.value.forEach((input, index)=>{
				if(input){
					input.value = pasteText[index];
				}
			});
			doSubmit();
		}

	};

</script>

<style scoped>
	.inputs {
		grid-template-columns: repeat(auto-fill, 38px);
		grid-gap: 24px;
	}

	.inputs .input-wrapper {
		position: relative;
		height: 58px;
	}

	.inputs input {
		width: 100%;
		border: none;
		text-align: center;
		font-size: 36px;
		font-weight: bold;
		outline: none;

		/* caret-color:  var(--color-transparent); */
	}

	.inputs .input-wrapper .bottom-wrapper {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 5px;
		background-color: var(--color-secondary-300);
		border-radius: 3px;
		transition: background-color 0.3s ease-in-out;
	}

	.inputs input:focus ~ .bottom-wrapper {
		background-color: var(--color-primary);
	}

	.inputs input::placeholder {
		font-size: 55px;
		color: var(--color-secondary-300);
		opacity: 1;
		transform: scale(1);
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	}

	.inputs input:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}

</style>
