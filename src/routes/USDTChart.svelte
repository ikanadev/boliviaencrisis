<script lang="ts">
	import type { UsdtItem } from "$lib/types";
	import { format } from "$lib/utils/dateUtils";
	import { scaleLinear, scalePoint } from "d3-scale";
	import { extent } from "d3-array";
	import { line } from "d3-shape";

	export let items: UsdtItem[] = [];

	const width = 1000;
	const height = 500;
	const margin = { top: 20, right: 30, bottom: 75, left: 130 };

	let tooltipData: UsdtItem | null = null;
	let tooltipX = 0;
	let tooltipY = 0;

	$: xDomain = items.map((i) => i.createdAt);
	$: yDomain = items.map((i) => i.price);

	$: xScale = scalePoint()
		.domain(xDomain)
		.range([margin.left, width - margin.right])
		.padding(0.15);
	$: yRange = extent(yDomain);
	$: yScale = scaleLinear()
		.domain([(yRange[0] ?? 0) - 20, (yRange[1] ?? 0) + 20])
		.range([height - margin.bottom, margin.top]);
	$: linePath = line<UsdtItem>()
		.x((d) => xScale(d.createdAt)!)
		.y((d) => yScale(d.price));
</script>

{#if tooltipData}
	<div class="price_tooltip" style="left: {tooltipX}px; top: {tooltipY}px;">
		<p>{(tooltipData.price / 100).toFixed(2)} Bs.</p>
		<p>{format(new Date(tooltipData.createdAt), "dd-MMM HH:mm")}</p>
	</div>
{/if}
<svg {width} {height} viewBox="0 0 {width} {height}">
	<defs>
		<clipPath id="chart_area">
			<rect
				x={margin.left}
				y={margin.top}
				width={width - margin.left - margin.right}
				height={height - margin.top - margin.bottom}
				rx="20"
			/>
		</clipPath>
	</defs>
	<rect
		x={margin.left}
		y={margin.top}
		width={width - margin.left - margin.right}
		height={height - margin.top - margin.bottom}
		fill="var(--surface-1)"
		rx="20"
	/>
	<g clip-path="url(#chart_area)">
		{#each yScale.ticks(6) as tick}
			<line
				x1={margin.left}
				x2={width - margin.right}
				y1={yScale(tick)}
				y2={yScale(tick)}
				stroke="var(--text-3)"
				opacity="0.95"
				stroke-width="0.75"
				stroke-dasharray="10, 15"
			/>
		{/each}
		{#each xDomain as xData}
			<line
				x1={xScale(xData)}
				x2={xScale(xData)}
				y1={margin.top}
				y2={height - margin.bottom}
				stroke="var(--text-3)"
				opacity="0.85"
				stroke-width="0.5"
				stroke-dasharray="10, 15"
			/>
		{/each}
		<path
			fill="none"
			stroke="var(--primary)"
			stroke-width="2.5"
			d={linePath(items)}
		/>
		{#each items as item}
			<circle
				cx={xScale(item.createdAt)}
				cy={yScale(item.price)}
				r="7"
				fill="var(--primary)"
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<circle
				on:click={(e) => {
					const circleRect = e.currentTarget.getBoundingClientRect();
					tooltipX = circleRect.left + circleRect.width / 2 + 5;
					tooltipY = circleRect.top - circleRect.height / 2 + 5;
					tooltipData = Boolean(tooltipData) ? null : item;
				}}
				on:mouseenter={(e) => {
					const circleRect = e.currentTarget.getBoundingClientRect();
					tooltipX = circleRect.left + circleRect.width / 2 + 5;
					tooltipY = circleRect.top - circleRect.height / 2 - 5;
					tooltipData = item;
				}}
				on:mouseleave={() => (tooltipData = null)}
				cx={xScale(item.createdAt)}
				cy={yScale(item.price)}
				r="50"
				fill="steelblue"
				opacity="0"
			/>
		{/each}
	</g>
	{#each yScale.ticks(6) as tick}
		<text
			text-anchor="end"
			x={margin.left - 8}
			y={yScale(tick)}
			dominant-baseline="middle"
		>
			{(tick / 100).toFixed(2)} Bs.
		</text>
	{/each}
	{#each xDomain as xData}
		<text
			x={xScale(xData)}
			y={height - margin.bottom + 10}
			text-anchor="middle"
			dominant-baseline="hanging"
		>
			{format(new Date(xData), "dd MMM")}
		</text>
		<text
			x={xScale(xData)}
			y={height - margin.bottom + 45}
			text-anchor="middle"
			dominant-baseline="hanging"
		>
			{format(new Date(xData), "HH:mm")}
		</text>
	{/each}
</svg>

<style lang="scss">
	svg {
		width: 100%;
		height: auto;
		text {
			fill: var(--text-1);
			font-size: 1.75rem;
		}
	}
	.price_tooltip {
		position: fixed;
		border: 0.5px solid var(--text-3);
		font-size: $font-size-sm;
		pointer-events: none;
		padding: $size-1 $size-2;
		border-radius: $size-1;
		background: var(--surface-1);
		opacity: 0.85;
		line-height: 1.3;
	}
</style>
