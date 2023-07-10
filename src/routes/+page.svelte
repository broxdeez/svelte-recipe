<script>
	import RecipeCard from '../components/RecipeCard.svelte';
	import Category from '../components/Category.svelte';
	import Search from '../components/Search.svelte';

	export let data;
</script>

<div class='px-20 py-10 2xl:px-60'>
	<Search />
	<Category />
	<RecipeCard name={'Popular Picks'} recipes={data.popular} />
	<RecipeCard name={'Veggie Picks'} recipes={data.veggie} />
</div>
