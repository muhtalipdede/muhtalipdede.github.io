<script lang="ts">
	import { formatDate } from "$lib/utils";
	import { goto } from "$app/navigation";
	
	export let data;
	let search = "";
	let initialPosts = data.posts;

	function handleClick(slug: string) {
		goto(`/blog/${slug}`);
	}

	function handleSearch() {
		console.log(search);
		const filteredPosts = data.posts.filter((post) =>
			post.title.toLowerCase().includes(search.toLowerCase())
		);
		if (search === "") data.posts = initialPosts;
		else data.posts = filteredPosts;
	}
</script>

<svelte:head>
	<title>Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Blog" />
</svelte:head>



<div class="projects__container">
	<div class="search">
		<input type="text" placeholder="Search" bind:value={search} on:input={() => handleSearch()} />
		<i class="fa-solid fa-search"></i>
	</div>
	{#each data.posts as post}
		<div
			class="projects__container__item"
			on:click={() => handleClick(post.slug)}
			on:keypress={() => handleClick(post.slug)}
		>
			<img src={post.image} alt={post.title} />
			<h1>{post.title}</h1>
			<p>{post.description}</p>
			<p>Published at {formatDate(post.date)}</p>
			<div class="tags">
				{#each post.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.projects__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}

	.search {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-bottom: 20px;
	}

	.search > input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.search > i {
		margin-left: -30px;
	}

	.projects__container__item {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 20px;
		border: 0.5px solid #ccc;
		min-height: 200px;
		cursor: pointer;
		padding: 20px;
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.projects__container__item:hover {
		animation: fadeInDown 0.5s ease-in-out;
	}

	.tags > * {
		font-size: 0.9rem;
		font-weight: 300;
		text-align: justify;
		margin: 5px;
		padding: 5px;
		border: 1px solid #000;
		border-radius: 5px;
	}
</style>
