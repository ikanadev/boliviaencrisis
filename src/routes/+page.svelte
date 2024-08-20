<script lang="ts">
  export let data;
</script>

<header class="header container">
  <div role="alert" class="alert">
    <svg class="alert__icon" fill="none" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <span class="alert__text">Este sitio esta en construcción</span>
  </div>
</header>
<section>
  <div class="container bento">
    <div class="ustd">
      <h3 class="ustd__title">Precio dólar</h3>
      {#await data.prices}
        <h5 class="ustd__price ustd__price--loading">
          0.00 Bs.
        </h5>
      {:then prices}
        <h5 class="ustd__price">
          {prices[0].price / 100} Bs.
        </h5>
      {/await}
    </div>
  </div>
</section>

<style lang="scss">
	.container {
		max-width: $content-width;
		padding: $content-padding;
		margin: auto;
	}
	.header {
		color: var(--text-2);
	}
	.alert {
		background: var(--surface-3);
		border-radius: $size-1;
		padding: $size-2 $size-3;
		display: flex;
		align-items: center;
		gap: $size-2;
		&__icon {
			width: $size-6;
			height: auto;
			fill: var(--text-2);
		}
	}
	.bento {
		display: flex;
		justify-content: center;
	}
	.ustd {
		background: var(--surface-2);
		border-radius: $size-3;
		padding: $size-3 $size-5;
		&__title {
			font-size: $font-size-md;
			text-align: center;
		}
		&__price {
			color: rgb(140, 250, 140);
			font-size: $font-size-3xl;
			&--loading {
				animation: 0.6s linear 0s infinite alternate pulse;
			}
		}
	}
	@keyframes pulse {
		0% {
			opacity: 0.8;
		}
		100% {
			opacity: 0.4;
		}
	}
</style>
