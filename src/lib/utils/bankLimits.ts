import type { BankLimitItem } from "$lib/types";

export const bankLimits: BankLimitItem[] = [
	{ name: 'BCP', url: '/img/banks/bcp.svg', limit: 30, period: 'Semanal' },
	{ name: 'Bisa', url: '/img/banks/bisa.png', limit: 100, period: 'Mensual' },
	{ name: 'BNB', url: '/img/banks/bnb.png', limit: 50, period: 'Semanal' },
	{ name: 'Banco Económico', url: '/img/banks/eco.svg', limit: 35, period: 'Mensual' },
	{ name: 'Banco Fie', url: '/img/banks/fie.svg', limit: 50, period: 'Mensual' },
	{ name: 'Banco Ganadero', url: '/img/banks/ganadero.webp', limit: 75, period: 'Mensual' },
	{ name: 'Banco Mercantil Santa Cruz', url: '/img/banks/msc.svg', limit: 125, period: 'Mensual' },
	{ name: 'Banco Sol', url: '/img/banks/sol.png', limit: 100, period: 'Mensual' },
	{ name: 'Banco Unión', url: '/img/banks/union.png', limit: 50, period: 'Quincenal' },
];

