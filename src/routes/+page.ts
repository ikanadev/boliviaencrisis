
type PriceItem = {
    id: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    archivedAt: string | null;
    deletedAt: string | null;
}

export async function load({fetch}) {
    async function loadPrices() {
        const resp = await fetch('https://ikanaapi.fly.dev/crisis/prices/ustd');
        const prices = (await resp.json()) as PriceItem[];
        return prices;
    }
    return {
        prices: loadPrices(),
    };
}