// import adapter from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'
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
			assets: "docs",
			fallback: null,
		}),
		prerender: {
			entries: ['/blog/Kubernetes’te .NET Uygulamalarında Dump Alma ve Memory Leak Analizi', '/blog/Linkerd (Service Mesh) — Kubernetes üzerindeki Örümcek Ağları'],
		},
	}
}

export default config