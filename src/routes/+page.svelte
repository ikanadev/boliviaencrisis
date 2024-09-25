<script lang="ts">
	import USDTChart from "./USDTChart.svelte";
	import type { BankLimitItem } from "$lib/types";
	import { APP_CONTEXT_KEY, type AppContext } from "$lib/types.js";
	import { getContext } from "svelte";

	export let data;

	const { isDarkTheme } = getContext<AppContext>(APP_CONTEXT_KEY);

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
</script>

<svelte:head>
	<title>Bolivia en crisis</title>
</svelte:head>
<header class="header container"></header>

<!-- Sections:
 Intro,
 precio dolar blue,
 medidas de seguridad,
 grafico ult. semana dolar blue
 boton de colaboracion,
 restricciones de bancos,
 precio productos basicos,
 noticias
 visitas
 sueldo minimo? -->
<main>
	<section class="container grid">
		<div class="grid-item intro">
			<div class="grid-item__container intro__container">
				<div class="intro__img-cont">
					<img class="intro__img" src="/img/bolivia.svg" alt="Bolivia" />
				</div>
				<h2 class="grid-item__title">
					Tomando el pulso<br />a la economía<br />boliviana.
				</h2>
			</div>
		</div>
		<div class="grid-item usdt">
			<div class="grid-item__container usdt__container">
				<h2 class="grid-item__title">Dólar paralelo</h2>
				{#await data.indexData}
					<p class="usdt__price usdt__price--loading">00.00 Bs.</p>
				{:then indexData}
					<p class="usdt__price">
						{(indexData.usdtPrice / 100).toFixed(2)} Bs.
					</p>
				{:catch}
					<p class="usdt__price usdt__price--error">Error cargando precio</p>
				{/await}
				<p class="usdt__text">Dólar oficial: 6.96 Bs.</p>
			</div>
		</div>
		<a href="/billetes-falsos" class="grid-item security">
			<div class="grid-item__container security__container">
				<h2 class="grid-item__title">Medidas de seguridad</h2>
				<p>Aprende a identificar billetes auténticos.</p>
				<div class="security__img-cont">
					<img
						class="security__img"
						src="/img/100NewLeft.webp"
						alt="100 Dólares"
					/>
				</div>
			</div>
		</a>
		<div class="grid-item chart">
			<div class="grid-item__container chart__container">
				<h2 class="grid-item__title">Precio dólar, últimos registros</h2>
				{#await data.indexData}
					<svg viewBox="0 0 1000 500">
						<rect
							x="0"
							y="0"
							width="1000"
							height="500"
							rx="20"
							fill="var(--surface-1)"
						/>
					</svg>
				{:then indexData}
					<USDTChart items={indexData.lastUsdtRecords} />
				{:catch}
					<p class="error">Error cargando precio</p>
				{/await}
			</div>
		</div>
		<div class="grid-item help">
			<div class="grid-item__container help__container">
				<h2 class="grid-item__title">Ayuda a esta pagina</h2>
			</div>
		</div>
		<div class="grid-item banks">
			<div class="grid-item__container banks__container">
				<h2 class="grid-item__title">Compras por Internet</h2>
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
			</div>
		</div>
		<div class="grid-item prices">
			<div class="grid-item__container prices__container">
				<h2 class="grid-item__title">Precios productos basicos</h2>
			</div>
		</div>
		<div class="grid-item views">
			<h2 class="grid-item__title">Views</h2>
		</div>
	</section>
	<div class="cover">
		<div role="alert" class="alert">
			<svg
				class="alert__icon"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 28 28"
			>
				<path
					fill="currentColor"
					d="M16.408 4.172c-1.045-1.896-3.77-1.896-4.815 0L2.35 20.92c-1.011 1.833.314 4.078 2.408 4.078H23.24c2.093 0 3.42-2.245 2.408-4.078zM15 20a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.75-3.25v-6.5a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-1.5 0"
				/>
			</svg>
			<span class="alert__text">Este sitio esta en construcción</span>
		</div>
	</div>
</main>

<style lang="scss">
	.container {
		@include content-container;
	}
	.header {
		color: var(--text-2);
	}
	.error {
		color: red;
		font-size: $font-size-lg;
	}

	.cover {
		position: fixed;
		inset: 0;
		display: grid;
		display: none;
		place-items: center;
		backdrop-filter: blur(4px);
		background: rgba(0, 0, 0, 0.4);
	}
	.alert {
		background: var(--surface-3);
		border-radius: $size-2;
		padding: $size-3 $size-4;
		display: flex;
		align-items: center;
		gap: $size-2;
		font-size: $font-size-lg;
		&__icon {
			width: $size-6;
			height: auto;
			color: #ffbf00;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: $size-5;
		font-size: $font-size-lg;
		font-weight: 300;
		grid-template-areas:
			"intro"
			"usdt"
			"security"
			"chart"
			"help"
			"banks"
			"prices"
			"views";
	}
	@media (width >= $sm-breakpoint) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				"intro intro"
				"usdt security"
				"chart chart"
				"help help"
				"banks banks"
				"prices prices"
				"views views";
		}
	}
	@media (width >= $md-breakpoint) {
		.grid {
			grid-template-columns: 4fr 5fr;
			grid-template-areas:
				"intro usdt"
				"intro security"
				"help security"
				"banks chart"
				"banks views"
				"prices prices";
		}
	}
	@media (width >= $lg-breakpoint) {
		.grid {
			grid-template-columns: 7fr 3fr 6fr 3fr 7fr;
			grid-template-areas:
				"intro intro usdt usdt   security"
				"intro intro .     .     security"
				"banks chart chart chart security"
				"banks chart chart chart help"
				"banks . . prices prices"
				". . . prices prices"
				". views views prices prices";
		}
	}

	.grid-item {
		color: var(--text-2);
		border-radius: $size-2;
		padding: 1px;
		overflow: hidden;
		background-image: linear-gradient(var(--surface-4), var(--surface-1) 25%);
		&__container {
			background: var(--surface-2);
			border-radius: $size-2;
			padding: $size-3 $size-5;
			height: 100%;
		}
		&__title {
			font-weight: 600;
			font-size: $font-size-md;
			margin-bottom: $size-2;
		}
	}
	.intro {
		grid-area: intro;
		&__container {
			display: grid;
			grid-template-columns: 4fr 7fr;
		}
		h2 {
			font-size: $font-size-xl;
			font-weight: 400;
			text-align: right;
		}
		&__img-cont {
			position: relative;
			min-height: 180px;
		}
		&__img {
			position: absolute;
			max-width: fit-content;
			right: -100px;
			top: 0px;
			width: auto;
			height: 110%;
		}
	}
	.usdt {
		grid-area: usdt;
		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&__price {
			color: var(--green);
			font-size: $font-size-3xl;
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			&--loading {
				color: var(--text-3);
				animation: 1s ease-in-out 0s infinite alternate pulse;
			}
			&--error {
				color: red;
				font-size: $font-size-lg;
			}
		}
		&__text {
			font-size: $font-size-md;
			color: var(--text-3);
			margin-top: $size-4;
		}
	}
	.security {
		text-decoration: none;
		grid-area: security;
		&__img-cont {
			position: relative;
			min-height: 120px;
		}
		&__img {
			position: absolute;
			top: 40px;
			left: 80px;
			transform: rotate(8deg);
			transition: all 300ms ease;
		}
		&:hover &__img {
			top: 20px;
			left: 40px;
			transform: rotate(0deg);
		}
	}
	.chart {
		grid-area: chart;
	}
	.help {
		grid-area: help;
		min-height: 200px;
	}
	.banks {
		grid-area: banks;
		&__grid {
			display: grid;
			grid-template-columns: 4fr 4fr;
			gap: $size-2 $size-3;
			margin-top: $size-3;
			align-items: center;
			font-size: $font-size-md;
		}
		&__title {
			font-weight: 600;
			font-size: $font-size-md;
			line-height: 1;
		}
		&__img {
			width: auto;
			height: 45px;
			object-fit: contain;
			justify-self: center;
		}
		&__period {
			font-weight: 300;
			line-height: 1.2;
		}
		&__amount {
			font-weight: 700;
			color: var(--green);
			line-height: 1.2;
		}
	}
	.prices {
		grid-area: prices;
	}
	.views {
		grid-area: views;
	}
	@keyframes pulse {
		0% {
			opacity: 0.9;
		}
		100% {
			opacity: 0.5;
		}
	}
</style>
