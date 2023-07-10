<script>
    export let data;
    let { searched } = data
</script>

<div class='p-20 grid grid-cols-3 gap-4'>
	{#each searched as recipe}
		<div class='flex flex-col items-center'>
			<img class='rounded-3xl' src={recipe.image} alt={recipe.title} />
			<p>{recipe.title}</p>
		</div>
	{/each}
</div>