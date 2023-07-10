import { PUBLIC_RECIPE_API } from '$env/static/public';

const popular_url = `https://api.spoonacular.com/recipes/random?apiKey=${PUBLIC_RECIPE_API}&number=9`;
const veggie_url = `https://api.spoonacular.com/recipes/random?apiKey=${PUBLIC_RECIPE_API}&number=9&tags=vegetarian`;

export const load = async ({ fetch }) => {
	const fetchPopular = async () => {
		const api = await fetch(popular_url);
		const PopularData = await api.json();
		return PopularData.recipes;
	};

    const fetchVeggie = async () => {
		const api = await fetch(veggie_url);
		const VeggieData = await api.json();
		return VeggieData.recipes;
	};

    return {
        popular : fetchPopular(),
        veggie : fetchVeggie()
    }
};
