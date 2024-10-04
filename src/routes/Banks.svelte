<script lang="ts">
	import { createDialog, createLabel, melt } from "@melt-ui/svelte";
	import Button from "$lib/components/Button.svelte";
	import IconButton from "$lib/components/IconButton.svelte";
	import type { BankLimitItem, AppContext } from "$lib/types";
	import { APP_CONTEXT_KEY } from "$lib/types";
	import { enhance, applyAction } from "$app/forms";
	import { fade, fly } from "svelte/transition";
	import { getContext } from "svelte";

	let textArea: HTMLTextAreaElement;
	let isBankSuggestionLoading = false;

	const { appState } = getContext<AppContext>(APP_CONTEXT_KEY);

	const {
		elements: {
			trigger,
			portalled,
			overlay,
			content,
			title,
			description,
			close,
		},
		states: { open },
	} = createDialog({ defaultOpen: true, openFocus: () => textArea });
	const {
		elements: { root },
	} = createLabel();

	const bankLimits: BankLimitItem[] = [
		{ name: "BCP", url: "/img/banks/bcp.svg", limit: 30, period: "Semanal" },
		{ name: "Bisa", url: "/img/banks/bisa.png", limit: 100, period: "Mensual" },
		{ name: "BNB", url: "/img/banks/bnb.png", limit: 50, period: "Semanal" },
		{
			name: "Banco Económico",
			url: "/img/banks/eco.svg",
			limit: 35,
			period: "Mensual",
		},
		{
			name: "Banco Fie",
			url: "/img/banks/fie.svg",
			limit: 50,
			period: "Mensual",
		},
		{
			name: "Banco Ganadero",
			url: "/img/banks/ganadero.webp",
			limit: 75,
			period: "Mensual",
		},
		{
			name: "Banco Mercantil Santa Cruz",
			url: "/img/banks/msc.svg",
			limit: 125,
			period: "Mensual",
		},
		{
			name: "Banco Sol",
			url: "/img/banks/sol.png",
			limit: 100,
			period: "Mensual",
		},
		{
			name: "Banco Unión",
			url: "/img/banks/union.png",
			limit: 50,
			period: "Quincenal",
		},
	];
</script>

{#if $open}
	<div use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="modal__overlay"
			transition:fade={{ duration: 200 }}
		>
			<div
				use:melt={$content}
				class="modal__content"
				transition:fly={{ y: 200, duration: 200 }}
			>
				<span class="modal__close">
					<IconButton element={close} size="sm" --bg="var(--surface-2)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.5em"
							height="1.5em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4z"
							/>
						</svg>
					</IconButton>
				</span>
				<h3 use:melt={$title}>¿Algo no te cuadra?</h3>
				<p use:melt={$description} class="modal__description">
					Ayúdanos a crear una lista completa y confiable de los límites de
					compra.
				</p>
				<form
					class="modal__form"
					method="POST"
					action="?/bank_limit"
					use:enhance={({ cancel }) => {
						if (isBankSuggestionLoading) return cancel();
						isBankSuggestionLoading = true;
						return async ({ result }) => {
							isBankSuggestionLoading = false;
							$open = false;
							await applyAction(result);
						};
					}}
				>
					<input type="hidden" name="user_id" value={$appState.userId} />
					<label for="suggestion_text" class="modal__label" use:melt={$root}>
						Nuevo límite
					</label>
					<textarea
						id="suggestion_text"
						name="suggestion_text"
						placeholder="Ej. Banco Bisa nuevo límite de 50$us por mes."
						class="modal__textarea"
						required
						bind:this={textArea}
					/>
					<Button --bg="var(--primary)" --color="var(--text-1)" type="submit">
						Enviar
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.4em"
							height="1.4em"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
							/></svg
						>
					</Button>
				</form>
			</div>
		</div>
	</div>
{/if}

<div class="banks">
	<div class="banks__grid">
		<h3 class="banks__title">Banco</h3>
		<h3 class="banks__title">Límite</h3>
		{#each bankLimits as bankLimit}
			<img src={bankLimit.url} alt={bankLimit.name} class="banks__img" />
			<div>
				<p class="banks__amount">{bankLimit.limit} $us</p>
				<p class="banks__period">{bankLimit.period}</p>
			</div>
		{/each}
	</div>
	<Button
		--bg="var(--surface-3)"
		--color="var(--text-2)"
		size="sm"
		element={trigger}
	>
		Sugerir cambio
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5em"
			height="1.5em"
			viewBox="0 0 36 36"
		>
			<path
				fill="currentColor"
				d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26v-4.85A5.18 5.18 0 0 1 8.79 26Zm0-11.15V10h4.79A5.18 5.18 0 0 1 4 14.85m14 10.3c-3.47 0-6.3-3.21-6.3-7.15s2.83-7.15 6.3-7.15s6.3 3.21 6.3 7.15s-2.83 7.15-6.3 7.15M32 26h-4.75A5.18 5.18 0 0 1 32 21.15Zm0-11.15A5.18 5.18 0 0 1 27.25 10H32Z"
			/>
			<ellipse
				cx="18"
				cy="18"
				fill="currentColor"
				class="clr-i-solid clr-i-solid-path-2"
				rx="4"
				ry="4.72"
			/>
			<path fill="none" d="M0 0h36v36H0z" />
		</svg>
	</Button>
</div>

<style lang="scss">
	.modal {
		&__overlay {
			position: fixed;
			inset: 0;
			background: rgba(25, 25, 25, 0.4);
			backdrop-filter: blur(6px);
			z-index: 100;
		}
		&__content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 95%;
			max-width: 400px;
			background: var(--surface-1);
			margin: auto;
			border-radius: $size-2;
			padding: $size-6;
			display: flex;
			flex-direction: column;
		}
		&__close {
			align-self: end;
		}
		&__form {
			display: flex;
			flex-direction: column;
			margin-top: $size-4;
		}
		&__label {
			font-size: $font-size-sm;
		}
		&__textarea {
			width: 100%;
			height: 100px;
			border: none;
			border-radius: $size-2;
			resize: none;
			padding: $size-3;
			font-size: $font-size-md;
			color: var(--text-2);
			background: var(--surface-2);
			margin-bottom: $size-5;
		}
	}

	.banks {
		display: flex;
		flex-direction: column;
		margin-top: $size-5;
		gap: $size-5;
		&__grid {
			display: grid;
			grid-template-columns: 4fr 3fr;
			gap: $size-2 $size-3;
			align-items: center;
			justify-items: center;
			font-size: $font-size-md;
		}
		&__title {
			font-weight: 600;
			font-size: $font-size-md;
			line-height: 1;
		}
		&__img {
			width: auto;
			height: 40px;
			object-fit: contain;
		}
		&__period {
			font-weight: 300;
			line-height: 1.2;
			font-size: $font-size-sm;
			text-align: center;
		}
		&__amount {
			font-weight: 700;
			color: var(--green);
			line-height: 1.2;
			text-align: center;
		}
	}
</style>
