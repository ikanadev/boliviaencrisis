<script lang="ts">
	import { CardCont } from "$lib/components";
</script>

<main>
	<h1>Medidas de seguridad Dólar</h1>

	<div class="container">
		<CardCont>
			<div class="security">
				<div class="security__img-cont">
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
	main {
		@include content-container;
	}
	.container {
		display: grid;
		margin-top: $size-8;
		grid-template-columns: repeat(3, 1fr);
		gap: $size-4;
		justify-content: center;
	}
	.security {
		&__img-cont {
			height: 250px;
			width: 100%;
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
</style>
