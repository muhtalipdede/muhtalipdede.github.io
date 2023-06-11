// import adapter from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-auto'
import preprocess from "svelte-preprocess";
import { mdsvex, escapeSvelte } from 'mdsvex'
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'material-theme-palenight' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [preprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: "docs",
			fallback: null,
		}),
		prerender: {
			entries: [
				'/blog/SvelteKit-2-Bolum-SvelteKit-Klasor-Yapisi',
				'/blog/SvelteKit-1-Bolum-SvelteKit-Nedir-Proje-Olusturma',
				'/blog/Kuberneteste-NET-Uygulamalarinda-Dump-Alma-ve-Memory-Leak-Analizi',
				'/blog/Linkerd-Service-Mesh-Kubernetes-uzerindeki-Orumcek-Aglari',
			],
		},
	}
}

export default config