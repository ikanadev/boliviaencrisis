<script lang="ts">
	import { CardCont } from "$lib/components";
	import { onMount } from "svelte";

	const features = [
		{ x: "40%", y: "40%" },
		{ x: "20%", y: "40%" },
		{ x: "86%", y: "40%" },
		{ x: "52%", y: "52%" },
		{ x: "35%", y: "78%" },
	];

	onMount(() => {
		console.log("Dollar mounted");
	});
</script>

<main>
	<h1>Medidas de seguridad Dólar</h1>

	<div class="bill">
		<img
			class="bill__img"
			src="/img/security/100hundred.webp"
			alt="Superficie de alto relieve"
		/>
		{#each features as feature, i}
			<div class="bill__feature" style="top: {feature.y}; left: {feature.x};">
				{i + 1}
			</div>
		{/each}
	</div>
	<div class="container">
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
					<div class="security__feature">1</div>
					<img
						class="security__img"
						src="/img/security/100SusSurface.webp"
						alt="Superficie de alto relieve"
					/>
				</div>
				<div class="security__text-cont">
					<h3 class="security__title">Silueta de alto relieve</h3>
					<p class="security__text">
						Al pasar los dedos sobre la silueta de Benjamin Franklin, se puede
						sentir una textura ligeramente rugosa (con relieve).
					</p>
				</div>
			</div>
		</CardCont>
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
					<div class="security__feature">2</div>
					<img
						class="security__img"
						src="/img/security/100SusThread.webp"
						alt="Superficie de alto relieve"
					/>
				</div>
				<div class="security__text-cont">
					<h3 class="security__title">Hilo de seguridad</h3>
					<p class="security__text">
						Banda vertical cerca del lado izquierdo del billete. Al observarlo
						bajo luz ultravioleta, el hilo emite un brillo rosado, y a simple
						vista, muestra el texto <strong>"USA 100"</strong> repetidamente.
					</p>
				</div>
			</div>
		</CardCont>
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
					<div class="security__feature">3</div>
					<img
						class="security__img"
						src="/img/security/100watermark.webp"
						alt="Superficie de alto relieve"
					/>
				</div>
				<div class="security__text-cont">
					<h3 class="security__title">Marca de agua</h3>
					<p class="security__text">
						La silueta de Benjamin Franklin en el espacio vacío. La imagen es
						visible a contraluz por ambos lados del billete.
					</p>
				</div>
			</div>
		</CardCont>
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
					<div class="security__feature">4</div>
					<img
						class="security__img"
						src="/img/security/100Ribbon.webp"
						alt="Superficie de alto relieve"
					/>
				</div>
				<div class="security__text-cont">
					<h3 class="security__title">Banda de seguridad 3D</h3>
					<p class="security__text">
						Se puede apreciar una banda de seguridad azul con el texto "100"
						repetidamente. El texto se mueve horizontalmente cuando se rota el
						billete verticalmente. Si se rota horizontalmente el texto se mueve
						verticalmente.
					</p>
				</div>
			</div>
		</CardCont>
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
					<div class="security__feature">5</div>
					<img
						class="security__img"
						src="/img/security/100micro.webp"
						alt="Superficie de alto relieve"
					/>
				</div>
				<div class="security__text-cont">
					<h3 class="security__title">Microimpresiones</h3>
					<p class="security__text">
						El texto <strong>"THE UNITED STATES OF AMERICA"</strong> entre los
						pliegues de la silueta de Benjamin Franklin y el texto
						<strong>"USA"</strong> en el border inferior de la silueta de Benjamin
						Franklin.
					</p>
				</div>
			</div>
		</CardCont>
	</div>
</main>

<style lang="scss">
	@mixin feature_item {
		position: absolute;
		border-radius: 50%;
		line-height: 1;
		display: grid;
		place-items: center;
		background-color: var(--primary);
		color: rgba(255, 255, 255, 0.8);
		font-weight: 700;
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
	}
	main {
		@include content-container;
	}
	.bill {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		&__img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
		&__feature {
			@include feature_item();
			width: 1.5rem;
			height: 1.5rem;
			font-size: 1rem;
		}
	}
	.container {
		display: grid;
		margin-top: $size-8;
		grid-template-columns: repeat(1, 1fr);
		gap: $size-4;
		margin-top: $size-10;
		margin-bottom: $size-10;
	}
	.security {
		&__img-cont {
			height: 250px;
			width: 100%;
			position: relative;
		}
		&__feature {
			@include feature_item();
			top: $size-3;
			left: $size-3;
			width: 2.5rem;
			height: 2.5rem;
			font-size: 1.5rem;
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__text-cont {
			padding: $size-3 $size-3;
		}
		&__title {
			font-weight: 700;
			font-size: $font-size-lg;
			margin-bottom: $size-2;
		}
		&__text {
			color: var(--text-2);
			font-size: $font-size-md;
		}
	}
	@media (width >= $sm-breakpoint) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
		.bill {
			&__feature {
				width: 2rem;
				height: 2rem;
				font-size: 1.5rem;
			}
		}
	}
	@media (width >= $md-breakpoint) {
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
		.bill {
			&__feature {
				width: 2.5rem;
				height: 2.5rem;
				font-size: 1.5rem;
			}
		}
	}
</style>
