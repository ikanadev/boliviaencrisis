import type { Readable } from "svelte/store";

export enum Theme {
	Dark = 'dark',
	Light = 'light',
}

export type AppState = {
	theme: Theme;
	userId: string;
}

export const APP_CONTEXT_KEY = 'appContext';
export type AppContext = {
	appState: Readable<AppState>,
	isDarkTheme: Readable<boolean>;
	toggleTheme: VoidFunction,
}

export type BankLimitItem = {
	name: string;
	url: string;
	limit: number;
	period: string;
}

export type UsdtItem = {
	id: string;
	price: number;
	createdAt: string;
	updatedAt: string;
	archivedAt: string | null;
	deletedAt: string | null;
}

export type EcoNew = {
	id: string;
	title: string;
	url: string;
	date: string;
	image: string;
	summary: string;
	company: string;
	tags: string[];
	sentiment: number;
	createdAt: string;
	deletedAt: string | null;
}

export type IndexData = {
	usdtPrice: number;
	usdtPriceLastWeek: number;
	usdtPriceLastMonth: number;
	lastUsdtRecords: UsdtItem[];
	ecoNews: EcoNew[];
}
