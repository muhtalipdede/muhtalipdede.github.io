<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<div class="projects__container">
	{#each data.posts as post}
		<div
			class="projects__container__item"
			on:click={() => window.open("blog/" + post.slug)}
		>
			<h1>{post.title}</h1>
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
