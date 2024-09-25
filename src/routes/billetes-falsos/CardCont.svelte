<script lang="ts">
  export let as = "div";
</script>

<svelte:element this={as} class="container" {...$$restProps}>
  <div class="container__content">
    <slot />
  </div>
</svelte:element>

<style lang="scss">
  .container {
    border-radius: $size-2;
    padding: 1px;
    overflow: hidden;
    background-image: linear-gradient(var(--surface-4), var(--surface-1) 25%);
    &__content {
      background: var(--surface-2);
      border-radius: $size-2;
      overflow: hidden;
      height: 100%;
    }
  }
</style>
