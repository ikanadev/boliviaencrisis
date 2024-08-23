<script lang="ts">
  import { APP_CONTEXT_KEY, type AppContext } from "$lib/types.js";
  import { getContext } from "svelte";

  export let data;

  const { isDarkTheme } = getContext<AppContext>(APP_CONTEXT_KEY);
</script>

<svelte:head>
  <title>Bolivia en crisis</title>
</svelte:head>
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
      <h2 class="grid-item__title">
        Tomando el pulso a la economía boliviana.
      </h2>
    </div>
    <div class="grid-item usdt">
      <h2 class="grid-item__title">Dólar paralelo</h2>
      {#await data.prices}
        <p class="usdt__price usdt__price--loading">00.00 Bs.</p>
      {:then prices}
        <p class="usdt__price">
          {(prices[0].price / 100).toFixed(2)} Bs.
        </p>
      {:catch}
        <p class="usdt__price" style="color: red;">Error</p>
      {/await}
      <p class="usdt__text">Dólar oficial: 6.96 Bs.</p>
    </div>
    <div class="grid-item security">
      <h2 class="grid-item__title">Medidas de seguridad</h2>
      <p>Aprende a identificar billetes autenticos.</p>
      <div class="security__img-cont">
        <img
          class="security__img"
          src="/img/100NewLeft.webp"
          alt="100 Dólares"
        />
      </div>
    </div>
    <div class="grid-item chart">
      <h2 class="grid-item__title">Precio dolar ultima semana</h2>
    </div>
    <div class="grid-item help">
      <h2 class="grid-item__title">Ayuda a esta pagina</h2>
    </div>
    <div class="grid-item banks">
      <h2 class="grid-item__title">Restricciones bancos</h2>
    </div>
    <div class="grid-item prices">
      <h2 class="grid-item__title">Precios productos basicos</h2>
    </div>
    <div class="grid-item views">
      <h2 class="grid-item__title">Views</h2>
    </div>
  </section>
</main>

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

  .grid {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 3fr;
    gap: $size-2;
    grid-template-areas:
      "intro usdt  usdt   security"
      "chart chart chart  security"
      "chart chart chart  help"
      "banks banks prices prices"
      "banks banks prices prices"
      "views views prices prices";
  }

  .grid-item {
    background: var(--surface-2);
    color: var(--text-2);
    border-radius: $size-2;
    padding: $size-3 $size-5;
    overflow: hidden;
    &__title {
      font-weight: 700;
      font-size: $font-size-lg;
      margin-bottom: $size-2;
    }
  }
  .intro {
    grid-area: intro;
    display: grid;
    place-items: center;
    padding-left: $size-7;
    padding-right: $size-7;
    h2 {
      text-align: center;
    }
  }
  .usdt {
    grid-area: usdt;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__price {
      color: var(--green);
      font-size: $font-size-3xl;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
      &--loading {
        color: var(--text-3);
        animation: 1s ease-in-out 0s infinite alternate pulse;
      }
    }
    &__text {
      font-size: $font-size-md;
      color: var(--text-3);
      align-self: flex-start;
    }
  }
  .security {
    grid-area: security;
    &__img-cont {
      position: relative;
    }
    &__img {
      position: absolute;
      top: 50px;
      left: 50px;
      transition: all 300ms ease;
      &:hover {
        top: 30px;
        left: 30px;
      }
    }
  }
  .chart {
    grid-area: chart;
    height: 240px;
  }
  .help {
    grid-area: help;
  }
  .banks {
    grid-area: banks;
    height: 300px;
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
