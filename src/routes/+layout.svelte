<script lang="ts">
  import "../styles/theme.scss";
  import "../styles/main.scss";
  import { writable } from "svelte/store";
  import { fly, fade } from "svelte/transition";
  import { type AppState, Theme } from "$lib";
  import { createTooltip, melt } from "@melt-ui/svelte";

  export let data;

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: { placement: "bottom-end" },
    openDelay: 350,
    closeDelay: 300,
  });
  const appState = writable<AppState>({ theme: data.theme });

  function toggleTheme() {
    appState.update((old) => {
      const newTheme = old.theme === Theme.Dark ? Theme.Light : Theme.Dark;
      const htmlEl = document.querySelector("html");
      document.cookie = `theme=${newTheme.toString()}`;
      if (htmlEl) {
        htmlEl.dataset.theme = newTheme.toString();
      }
      return {
        theme: newTheme,
      };
    });
  }
</script>

<nav class="nav">
  <p>Bolivia en crisis</p>
  <div class="nav__spacer" />
  {#if $open}
    <div class="tooltip" use:melt={$content} transition:fade>
      <div use:melt={$arrow} />
      <p>Cambiar tema</p>
    </div>
  {/if}
  <button
    type="button"
    use:melt={$trigger}
    on:click={toggleTheme}
    class="nav__theme-btn"
    aria-label="Cambiar tema"
  >
    {#if $appState.theme === Theme.Dark}
      <svg
        in:fly={{ x: -20 }}
        out:fly={{ x: 20 }}
        class="nav__theme-icon"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.1 103.1 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
        />
      </svg>
    {:else}
      <svg
        in:fly={{ x: -20 }}
        out:fly={{ x: 20 }}
        class="nav__theme-icon"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
        />
      </svg>
    {/if}
  </button>
</nav>
<slot />

<style lang="scss">
  .nav {
    @include content-container;
    display: flex;
    &__spacer {
      flex: 1;
    }
    &__theme-btn {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      color: var(--text-2);
    }
    &__theme-icon {
      grid-row: 1;
      grid-column: 1;
    }
  }

  .tooltip {
    background: var(--surface-3);
    padding: $size-1 $size-2;
    font-size: $font-size-sm;
    border-radius: $size-1;
  }
</style>
