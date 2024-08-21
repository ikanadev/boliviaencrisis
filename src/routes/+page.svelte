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
    <span class="alert__text"
      >Este sitio esta en construcción {$isDarkTheme}</span
    >
  </div>
</header>
<section>
  <div class="container bento">
    <div class="ustd">
      <h2 class="ustd__title">Precio dólar paralelo</h2>
      {#await data.prices}
        <p class="ustd__price ustd__price--loading">00.00 Bs.</p>
      {:then prices}
        <p class="ustd__price">
          {prices[0].price / 100} Bs.
        </p>
      {:catch}
        <p class="ustd__price" style="color: red;">Error</p>
      {/await}
      <p class="ustd__text">Precio dólar oficial: 6.96 Bs.</p>
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
    color: var(--text-2);
    border-radius: $size-3;
    padding: $size-3 $size-5;
    width: $size-14;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-weight: 700;
      font-size: $font-size-md;
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
    }
    &__text {
      font-size: $font-size-sm;
      color: var(--text-3);
      align-self: flex-start;
    }
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
