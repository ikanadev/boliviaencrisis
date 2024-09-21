<script lang="ts">
	import type { UsdtItem } from "$lib/types";
	import { scaleBand, scaleLinear } from "d3-scale";
	import { line } from "d3-shape";

	export let items: UsdtItem[] = [];

	items = items.reverse();
	const width = 1000;
	const height = 500;

	const margin = { top: 5, right: 5, bottom: 50, left: 80 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	$: xDomain = items.map((i) => i.createdAt);
	$: yDomain = items.map((i) => i.price);

	$: xScale = scaleBand().domain(xDomain).range([0, innerWidth]).padding(0.1);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yDomain) + 100])
		.range([innerHeight, 0]);
	$: linePath = line<UsdtItem>()
		.x((d) => xScale(d.createdAt)!)
		.y((d) => yScale(d.price));
</script>

<svg {width} {height} viewBox="0 0 {width} {height}">
	<rect
		x={margin.left}
		y={margin.top}
		width={innerWidth}
		height={innerHeight}
		fill="var(--surface-1)"
		rx="20"
	/>
	<g transform="translate({margin.left}, {margin.top})">
		{#each items as item}
			<circle
				cx={(xScale(item.createdAt) ?? 0) + xScale.bandwidth() / 2}
				cy={yScale(item.price)}
				r={8}
				fill="steelblue"
			/>
		{/each}
		{#each yScale.ticks() as tick}
			<g transform="translate(0, {yScale(tick)})">
				<text text-anchor="end">{tick / 100} Bs.</text>
			</g>
		{/each}
		<path fill="none" stroke="steelblue" stroke-width="5" d={linePath(items)} />
	</g>
</svg>

<style lang="scss">
	svg {
		width: 100%;
		height: auto;
		text {
			fill: var(--text-1);
			font-family: monospace;
		}
	}
</style>
