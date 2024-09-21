import { API_URL } from "$lib/constants";
import type { UsdtItem } from "$lib/types";

type IndexData = {
	usdtPrice: number
	lastUsdtRecords: UsdtItem[];
}

export async function load({ fetch }) {
	async function loadIndexData() {
		const resp = await fetch(`${API_URL}/crisis/main`);
		if (!resp.ok) {
			throw new Error(resp.statusText);
		}
		const prices = (await resp.json()) as IndexData;
		return prices;
	}
	return {
		indexData: loadIndexData(),
	};
}
