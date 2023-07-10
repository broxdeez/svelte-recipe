import { PUBLIC_RECIPE_API } from '$env/static/public';

export const load = async ({ fetch, params }) => {
	const fetchRecipe = async () => {
		const api = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${PUBLIC_RECIPE_API}`
        );
		const RecipeData = await api.json();
		return RecipeData
	};

    return {
        recipe : fetchRecipe()
    }
};