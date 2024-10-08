<script lang="ts">
	import "../styles/theme.scss";
	import "../styles/main.scss";
	import { afterNavigate } from "$app/navigation";
	import { derived, readonly, writable } from "svelte/store";
	import { fly, fade } from "svelte/transition";
	import { type AppContext, type AppState, Theme, APP_CONTEXT_KEY } from "$lib";
	import IconButton from "$lib/components/IconButton.svelte";
	import { createTooltip, melt } from "@melt-ui/svelte";
	import { setContext } from "svelte";
	import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
	import { API_URL, APP_NAME } from "$lib/constants";

	export let data;

	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: { placement: "bottom-end" },
		openDelay: 350,
		closeDelay: 300,
	});
	const appState = writable<AppState>({ theme: data.theme, userId: "" });
	const isDarkTheme = derived(
		appState,
		($appState) => $appState.theme === Theme.Dark,
	);

	function toggleTheme() {
		appState.update((old) => {
			const newTheme = old.theme === Theme.Dark ? Theme.Light : Theme.Dark;
			const htmlEl = document.querySelector("html");
			document.cookie = `theme=${newTheme.toString()}`;
			if (htmlEl) {
				htmlEl.dataset.theme = newTheme.toString();
			}
			return {
				...old,
				theme: newTheme,
			};
		});
	}

	setContext<AppContext>(APP_CONTEXT_KEY, {
		appState: readonly(appState),
		toggleTheme,
		isDarkTheme,
	});

	async function trackNavigation(url: string) {
		if (!$appState.userId) {
			const id = await getCurrentBrowserFingerPrint();
			appState.update((old) => ({ ...old, userId: id.toString() }));
		}
		const payload = {
			userId: $appState.userId,
			url,
			app: APP_NAME,
		};
		fetch(`${API_URL}/common/page_view`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
	}

	afterNavigate(async (data) => {
		if (!data.to) return;
		trackNavigation(data.to.url.pathname);
	});
</script>

<nav class="nav">
	<a href="/">Bolivia en crisis</a>
	<div class="nav__spacer" />
	{#if $open}
		<div class="tooltip" use:melt={$content} transition:fade>
			<div use:melt={$arrow} />
			<p>Cambiar tema</p>
		</div>
	{/if}
	<IconButton
		element={trigger}
		onClick={toggleTheme}
		size="md"
		--bg="transparent"
	>
		<span class="nav__theme-btn">
			{#if $appState.theme === Theme.Dark}
				<svg
					in:fly={{ x: -20 }}
					out:fly={{ x: 20 }}
					class="nav__theme-icon"
					width="1.8em"
					height="1.8em"
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
					width="1.8em"
					height="1.8em"
					viewBox="0 0 256 256"
				>
					<path
						fill="currentColor"
						d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
					/>
				</svg>
			{/if}
		</span>
	</IconButton>
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
