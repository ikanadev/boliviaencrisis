<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import type { BankLimitItem } from "$lib/types";

	export const bankLimits: BankLimitItem[] = [
		{ name: "BCP", url: "/img/banks/bcp.svg", limit: 30, period: "Semanal" },
		{ name: "Bisa", url: "/img/banks/bisa.png", limit: 100, period: "Mensual" },
		{ name: "BNB", url: "/img/banks/bnb.png", limit: 50, period: "Semanal" },
		{
			name: "Banco Económico",
			url: "/img/banks/eco.svg",
			limit: 35,
			period: "Mensual",
		},
		{
			name: "Banco Fie",
			url: "/img/banks/fie.svg",
			limit: 50,
			period: "Mensual",
		},
		{
			name: "Banco Ganadero",
			url: "/img/banks/ganadero.webp",
			limit: 75,
			period: "Mensual",
		},
		{
			name: "Banco Mercantil Santa Cruz",
			url: "/img/banks/msc.svg",
			limit: 125,
			period: "Mensual",
		},
		{
			name: "Banco Sol",
			url: "/img/banks/sol.png",
			limit: 100,
			period: "Mensual",
		},
		{
			name: "Banco Unión",
			url: "/img/banks/union.png",
			limit: 50,
			period: "Quincenal",
		},
	];

	function handleSendSuggestion() {
		// TODO
	}
</script>

<div class="banks">
	<div class="banks__grid">
		<h3 class="banks__title">Banco</h3>
		<h3 class="banks__title">Límite</h3>
		{#each bankLimits as bankLimit}
			<img src={bankLimit.url} alt={bankLimit.name} class="banks__img" />
			<div>
				<p class="banks__amount">{bankLimit.limit} $us</p>
				<p class="banks__period">{bankLimit.period}</p>
			</div>
		{/each}
	</div>
	<Button onClick={handleSendSuggestion} --bg="var(--surface-3)" size="small">
		Sugerir cambio
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5rem"
			height="1.5rem"
			viewBox="0 0 36 36"
		>
			<path
				fill="currentColor"
				d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26v-4.85A5.18 5.18 0 0 1 8.79 26Zm0-11.15V10h4.79A5.18 5.18 0 0 1 4 14.85m14 10.3c-3.47 0-6.3-3.21-6.3-7.15s2.83-7.15 6.3-7.15s6.3 3.21 6.3 7.15s-2.83 7.15-6.3 7.15M32 26h-4.75A5.18 5.18 0 0 1 32 21.15Zm0-11.15A5.18 5.18 0 0 1 27.25 10H32Z"
			/>
			<ellipse
				cx="18"
				cy="18"
				fill="currentColor"
				class="clr-i-solid clr-i-solid-path-2"
				rx="4"
				ry="4.72"
			/>
			<path fill="none" d="M0 0h36v36H0z" />
		</svg>
	</Button>
</div>

<style lang="scss">
	.banks {
		display: flex;
		flex-direction: column;
		margin-top: $size-5;
		gap: $size-5;
		&__grid {
			display: grid;
			grid-template-columns: 4fr 3fr;
			gap: $size-2 $size-3;
			align-items: center;
			justify-items: center;
			font-size: $font-size-md;
		}
		&__title {
			font-weight: 600;
			font-size: $font-size-md;
			line-height: 1;
		}
		&__img {
			width: auto;
			height: 40px;
			object-fit: contain;
		}
		&__period {
			font-weight: 300;
			line-height: 1.2;
			font-size: $font-size-sm;
			text-align: center;
		}
		&__amount {
			font-weight: 700;
			color: var(--green);
			line-height: 1.2;
			text-align: center;
		}
	}
</style>
