import type { Readable } from "svelte/store";

export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export type AppState = {
    theme: Theme;
}

export const APP_CONTEXT_KEY = 'appContext';
export type AppContext = {
    appState: Readable<AppState>,
    isDarkTheme: Readable<boolean>;
    toggleTheme: VoidFunction,
}