import { PUBLIC_RECIPE_API } from '$env/static/public';

export const load = async ({ fetch, params }) => {
	const fetchCuisine = async () => {
		const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${PUBLIC_RECIPE_API}&cuisine=${params.id}`
        );
		const CuisineData = await api.json();
		return CuisineData.results;
	};

    return {
        cuisine : fetchCuisine()
    }
};


