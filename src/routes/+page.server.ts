import { APP_NAME, API_URL } from "$lib/constants";

export const actions = {
	bank_limit: async ({ request, fetch }) => {
		const formData = await request.formData();
		const suggestion = formData.get('suggestion_text');
		const userId = formData.get('user_id');
		const data = {
			userId,
			app: APP_NAME,
			content: suggestion,
			section: 'bank_limit',
		};
		await fetch(`${API_URL}/common/public_feedback`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	},
};
