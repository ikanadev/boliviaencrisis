<script lang="ts">
	export let onClick: VoidFunction;
	export let type: "button" | "submit" | "reset" = "button";
	export let size: "small" | "medium" | "large" = "medium";
</script>

<button
	on:click={onClick}
	{type}
	class="button"
	class:button--small={size === "small"}
	class:button--medium={size === "medium"}
	class:button--large={size === "large"}
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
		font-size: $font-size-sm;
		border-radius: $size-1;
		padding: $size-1 $size-2;
		transition: background 0.2s ease-in-out;
		opacity: 0.9;
		font-weight: 600;
		&:hover {
			opacity: 1;
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
			padding: $size-1 $size-4;
			font-size: $font-size-lg;
		}
	}
</style>
