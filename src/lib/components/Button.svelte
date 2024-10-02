<script lang="ts">
	import { type AnyMeltElement, emptyMeltElement, melt } from "@melt-ui/svelte";

	export let onClick: VoidFunction = () => {};
	export let type: "button" | "submit" | "reset" = "button";
	export let size: "xs" | "sm" | "md" | "lg" = "md";
	export let element: AnyMeltElement = emptyMeltElement as AnyMeltElement;
</script>

<button
	on:click={onClick}
	{type}
	use:melt={$element}
	class="button"
	class:button--xsmall={size === "xs"}
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
		filter: brightness(98%);
		transition: filter 0.3s ease-in-out;
		font-weight: 600;
		&:hover {
			filter: brightness(102%);
		}
		&--small {
			padding: $size-1 $size-2;
			font-size: $font-size-xs;
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
