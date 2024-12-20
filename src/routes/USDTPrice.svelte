<script lang="ts">
	import type { IndexData } from "$lib/types";
	export let indexData: Promise<IndexData>;
</script>

<div class="usdt">
	<h2 class="">Dólar paralelo</h2>
	{#await indexData}
		<p class="usdt__price usdt__price--loading">00.00 Bs.</p>
	{:then indexData}
		<p class="usdt__price">
			{(indexData.usdtPrice / 100).toFixed(2)} Bs.
		</p>
	{:catch}
		<p class="usdt__price usdt__price--error">Error cargando precio</p>
	{/await}
	<div class="usdt__past-prices-cont">
		<p class="usdt__text">Anterior semana</p>
		<p class="usdt__text">Anterior mes</p>
		{#await indexData}
			<p class="usdt__past-price usdt__past-price--loading">00.00 Bs.</p>
		{:then indexData}
			<p class="usdt__past-price">
				{(indexData.usdtPriceLastWeek / 100).toFixed(2)} Bs.
			</p>
		{:catch}
			<p class="usdt__price usdt__past-price--error">Error</p>
		{/await}
		{#await indexData}
			<p class="usdt__past-price usdt__past-price--loading">00.00 Bs.</p>
		{:then indexData}
			<p class="usdt__past-price">
				{(indexData.usdtPriceLastMonth / 100).toFixed(2)} Bs.
			</p>
		{:catch}
			<p class="usdt__price usdt__past-price--error">Error</p>
		{/await}
	</div>
	<p class="usdt__text">Dólar oficial: 6.96 Bs.</p>
</div>

<style lang="scss">
	.usdt {
		display: flex;
		flex-direction: column;
		align-items: center;
		&__price {
			color: var(--green);
			font-size: $font-size-3xl;
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			text-align: center;
			&--loading {
				color: var(--text-3);
				animation: 1s ease-in-out 0s infinite alternate pulse;
			}
			&--error {
				color: red;
				font-size: $font-size-lg;
			}
		}
		&__past-prices-cont {
			display: grid;
			gap: 0 $size-1;
			grid-template-columns: 1fr 1fr;
			justify-items: center;
		}
		&__past-price {
			color: var(--text-2);
			font-size: $font-size-xl;
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			text-align: center;
			&--loading {
				color: var(--text-3);
				animation: 1s ease-in-out 0s infinite alternate pulse;
			}
			&--error {
				color: red;
				font-size: $font-size-lg;
			}
		}
	}
</style>
