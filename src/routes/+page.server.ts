export const actions = {
	bank_limit: async ({ request }) => {
		const formData = await request.formData();
		const suggestion = formData.get('suggestion_text');
		const userId = formData.get('user_id');
		console.log(suggestion, userId);
	},
};
