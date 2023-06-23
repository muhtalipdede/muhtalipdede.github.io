<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let data: {
		meta: {
			title: string;
			date: string;
			categories: string[];
			image: string;
			description: string;
		};
		content: any;
	};
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image} />
	<meta property="article:author" content="Muhtalip Dede" />
	<meta property="article:published_time" content={data.meta.date} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
		<img src={data.meta.image} alt={data.meta.title} />
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
	}

	hgroup {
		margin-top: var(--size-7);
	}

	hgroup > * {
		margin-top: var(--size-2);
	}

	hgroup > img {
		display: block;
		max-inline-size: 100%;
		margin-top: var(--size-7);
		width: 100%;
	}

	.prose {
		margin-top: var(--size-7);
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
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
