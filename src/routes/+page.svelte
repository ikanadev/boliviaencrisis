<script lang="ts">
	export let data;
</script>

<header class="container mx-auto px-4 pt-8">
	<div role="alert" class="alert alert-warning">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/>
		</svg>
		<span>Este sitio esta en construcción</span>
	</div>
	<h1 class="text-center text-[2rem] font-title font-semibold mt-4">
		La info que necesitas para sobrellevar la crisis
	</h1>
</header>
<section>
	<div class="container mx-auto my-10">
		<div class="flex flex-col justify-center items-center gap-2">
			<h3 class="text-lg font-medium">Precio dólar:</h3>
			{#await data.prices}
				<h5 class="font-title text-green-600 text-6xl font-black animate-pulse">0.00 Bs.</h5>
			{:then prices}
				<h5 class="font-title text-green-600 text-6xl font-black">
					{prices[0].price / 100} Bs.
				</h5>
			{/await}
		</div>
	</div>
</section>

<style>
</style>
