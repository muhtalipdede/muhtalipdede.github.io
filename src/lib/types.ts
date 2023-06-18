export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	episode: number
	date: string
	categories: Categories[]
	published: boolean
	image: string
}
