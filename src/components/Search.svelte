<script>
    import {goto} from '$app/navigation'
    let search = '';

    function submitSearch(){
        goto("/search/" + search);
    }
</script>

<div class="flex justify-center">
	<form on:submit|preventDefault={submitSearch} class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-10 w-1/2">
		<div class="input-group-shim">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-search"
				><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
			>
		</div>
		<input type="search" placeholder="Search..." bind:value={search} />
		<button class="variant-filled-primary">Submit</button>
	</form>
</div>