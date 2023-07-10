<script>
	export let recipes;
	export let name;
</script>

<div class="mt-10">
	<h2 class="h2">
		<span
			class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>{name}</span
		>
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
		{#each recipes as recipe}
			<a href={'/recipe/' + recipe.id}>
				<div class="flex items-center space-x-4 rounded-xl bg-primary-600">
					<img
						class="w-40 h-full object-cover"
						src={recipe.image}
						alt=""
						width="384"
						height="512"
					/>
					<div class="max-md:p-6 text-center md:text-left">
						<blockquote>
							<p class="text-lg font-medium text-gray-800">
								{recipe.title}
							</p>
						</blockquote>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
