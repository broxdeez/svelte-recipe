import { PUBLIC_RECIPE_API } from '$env/static/public';

export const load = async ({ fetch, params }) => {
	const fetchSearched = async () => {
		const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${PUBLIC_RECIPE_API}&query=${params.id}`
        );
		const SearchedData = await api.json();
		return SearchedData.results;
	};

    return {
        searched : fetchSearched()
    }
};