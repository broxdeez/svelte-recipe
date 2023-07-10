<script>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	
</script>

<nav class='text-center mt-10 mb-5'>
	<a class='text-3xl font-extrabold bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone hover:underline' href="/">ONLY RECIPES</a>
</nav>
<slot />

