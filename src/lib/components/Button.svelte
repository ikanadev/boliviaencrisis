<script lang="ts">
	import { type AnyMeltElement, emptyMeltElement, melt } from "@melt-ui/svelte";

	export let onClick: VoidFunction;
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
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $size-1;
		border-radius: $size-1;
		filter: brightness(95%);
		transition:
			filter 0.2s ease-in-out,
			transform 0.2s ease-in-out;
		opacity: 0.95;
		font-weight: 600;
		&:hover {
			filter: brightness(110%);
		}
		&--small {
			padding: $size-1 $size-2;
			font-size: $font-size-sm;
		}
		&--medium {
			padding: $size-1 $size-3;
			font-size: $font-size-md;
		}
		&--large {
			padding: $size-2 $size-4;
			font-size: $font-size-lg;
		}
	}
</style>
