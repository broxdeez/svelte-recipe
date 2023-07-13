<script>
	export let data;
	let { recipe } = data;

    let state = 'instructions';
</script>

<div class="p-20 flex space-x-20">
	<div class='flex-none'>
		<h2 class="h3 mb-5 font-bold">{recipe.title}</h2>
		<img src={recipe.image} alt={recipe.title} />
	</div>
	<div>
		<div class="w-70 h-10 btn-group variant-filled">
			<button class={state === 'instructions' ? 'bg-blue-500 text-white' : 'bg-gray-200'} on:click={() => state='instructions'}>Instructions</button>
			<button class={state === 'ingredients' ? 'bg-blue-500 text-white' : 'bg-gray-200'} on:click={() => state='ingredients'}>Ingredients</button>
		</div>
        {#if state==='instructions'}
        <div class='py-10 flex flex-col space-y-5 pr-32'>
            <p>
                {@html recipe.summary}
            </p>
            <p>
                {@html recipe.instructions}
            </p>
        </div>
        {/if}

        {#if state === 'ingredients'}
        <div class='py-10'>
            <ul class='list'>
                {#each recipe.extendedIngredients as i}
                    <li>{i.original}</li>
                {/each}
            </ul>
        </div>
        {/if}
	</div>
</div>
