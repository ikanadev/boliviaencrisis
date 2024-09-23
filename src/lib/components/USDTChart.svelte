<script lang="ts">
	import type { UsdtItem } from "$lib/types";
	import { scaleLinear, scalePoint } from "d3-scale";
	import { extent, nice } from "d3-array";
	import { line } from "d3-shape";

	export let items: UsdtItem[] = [];

	items = items.reverse();
	const width = 1000;
	const height = 400;

	const margin = { top: 20, right: 10, bottom: 50, left: 110 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	$: xDomain = items.map((i) => i.createdAt);
	$: yDomain = items.map((i) => i.price);

	$: xScale = scalePoint()
		.domain(xDomain)
		.range([margin.left, width - margin.right]);
	$: yRange = extent(yDomain);
	$: yScale = scaleLinear()
		.domain([(yRange[0] ?? 0) - 20, (yRange[1] ?? 0) + 20])
		.range([height - margin.bottom, margin.top]);
	$: linePath = line<UsdtItem>()
		.x((d) => xScale(d.createdAt)!)
		.y((d) => yScale(d.price));
</script>

<svg {width} {height} viewBox="0 0 {width} {height}">
	<defs>
		<clipPath id="chart_area">
			<rect
				x={margin.left}
				y={margin.top}
				width={innerWidth}
				height={innerHeight}
				rx="20"
			/>
		</clipPath>
	</defs>
	<rect
		x={margin.left}
		y={margin.top}
		width={innerWidth}
		height={innerHeight}
		fill="var(--surface-1)"
		rx="20"
	/>
	{#each yScale.ticks(6) as tick}
		<text text-anchor="end" x={margin.left} y={yScale(tick)}>
			{(tick / 100).toFixed(2)} Bs.
		</text>
		<line
			x1={margin.left}
			x2={width - margin.right}
			y1={yScale(tick)}
			y2={yScale(tick)}
			stroke="var(--text-3)"
			opacity="0.95"
			stroke-width="0.75"
			stroke-dasharray="30, 8"
		/>
	{/each}
	{#each xDomain as xData}
		<line
			x1={xScale(xData)}
			x2={xScale(xData)}
			y1={margin.top}
			y2={height - margin.bottom}
			stroke="var(--text-3)"
			opacity="0.95"
			stroke-width="0.75"
			stroke-dasharray="30, 8"
		/>
	{/each}
	<path fill="none" stroke="steelblue" stroke-width="5" d={linePath(items)} />
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
