import type { Theme } from '$lib/types.js';

export async function load({ cookies }) {
    let theme = (cookies.get('theme') || 'dark') as Theme;
    return { theme };
}