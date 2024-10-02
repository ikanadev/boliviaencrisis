<script lang="ts">
	import { type AnyMeltElement, emptyMeltElement, melt } from "@melt-ui/svelte";

	export let onClick: VoidFunction = () => {};
	export let type: "button" | "submit" | "reset" = "button";
	export let size: "sm" | "md" | "lg" = "md";
	export let element: AnyMeltElement = emptyMeltElement as AnyMeltElement;
</script>

<button
	on:click={onClick}
	{type}
	use:melt={$element}
	class="button"
	class:button--small={size === "sm"}
	class:button--medium={size === "md"}
	class:button--large={size === "lg"}
>
	<slot />
</button>

<style lang="scss">
	.button {
		background: var(--bg, var(--surface-1));
		color: var(--color, var(--text-2));
		display: grid;
		place-items: center;
		border-radius: 50%;
		filter: brightness(98%);
		transition:
			filter 0.2s ease-in-out,
			transform 0.2s ease-in-out;
		font-weight: 600;
		&:hover {
			filter: brightness(102%);
		}
		&--small {
			padding: $size-2;
			font-size: $font-size-sm;
		}
		&--medium {
			padding: $size-3;
			font-size: $font-size-md;
		}
		&--large {
			padding: $size-3;
			font-size: $font-size-lg;
		}
	}
</style>
