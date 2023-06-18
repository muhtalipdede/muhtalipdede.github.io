---
title: SvelteKit 3. Bölüm - SvelteKit Routing Yapısı
description: SvelteKit routing yapısı nasıldır? SvelteKit projesindeki routing nasıl yapılır? SvelteKit projesindeki routing yapısı nasıldır?
episode: 3
image: https://repository-images.githubusercontent.com/398741015/1e5a13a9-35c1-4373-8eeb-0bbeda88a7d8
date: '2023-06-10'
categories:
  - svelte
  - sveltekit
published: true
---

<script>
</script>

Herkese Merhabalar,

İlk iki bölümde Sveltekit nedir, nasıl proje oluşturulur, bir projenin klasör yapısının nasıl olmalı ve sveltekitteki özel dosyalara dair incelemeler yapmıştık. Bu bölümde ise Sveltekit'te yönlendirmeler için route tanımlamalarına bakacağız.

## SvelteKit Routing Yapısı

SvelteKit'te route tanımlamaları `src/routes` klasörü altında yapılır. Bu klasördeki dosyaların isimleri route'ların isimlerini belirler. Örneğin `src/routes/index.svelte` dosyası `http://localhost:5173/` adresine gittiğimizde karşımıza çıkan sayfadır. `src/routes/about.svelte` dosyası `localhost:3000/about` adresine gittiğimizde karşımıza çıkan sayfadır.

### +page.svelte dosyaları

`src/routes` klasörü altında `+` ile başlayan dosyalar oluşturabiliriz. Bu dosyalar dinamik route'lar için kullanılır. Örneğin `src/routes/blog/[slug].svelte` dosyası `localhost:5173/blog/merhaba-dunya` adresine gittiğimizde karşımıza çıkan sayfadır. Burada `slug` parametresi `merhaba-dunya` değerini alır. Bu dosyada `slug` parametresini kullanarak sayfamızı dinamik olarak oluşturabiliriz.

```svelte
<script>
  export let page;
  const { slug } = page.params;
</script>

<div>
  <h1>{slug}</h1>
</div>
```

### +page.ts dosyaları

Bir sayfanın yüklenmesi için çoğu zaman öncesinde veri yüklemesi yapılır. `+page.ts` dosyasında load olarak export edilen ifadenin içerinde bu işlemi gerçekleştirebiliriz. Örneğin `src/routes/blog/[slug].ts` dosyasında `load` fonksiyonunu kullanarak `slug` parametresini kullanarak sayfamızın içeriğini dinamik olarak oluşturabiliriz.

```ts
export async function load({ page, fetch }) {
  const { slug } = page.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();
  return { props: { post } };
}
```

Bunun dışında bu dosyada `prerender`, `ssr` ve `csr` fonksiyonlarını kullanarak sayfamızın nasıl render edileceğini belirleyebiliriz.

```ts
export const prerender = true;
export const ssr = true;
export const csr = true;
```

### +page.server.ts dosyası

`+page.server.ts` dosyası `+page.ts` dosyası ile aynı işlevi görür. Farkı `+page.server.ts` dosyası sadece server tarafında çalışır. `+page.ts` dosyası ise hem server hem de client tarafında çalışır. Bu dosyada `load` fonksiyonunu kullanarak sayfamızın içeriğini dinamik olarak oluşturabiliriz.

```ts
export async function load({ page, fetch }) {
  const { slug } = page.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();
  return { props: { post } };
}
```

### +error.svelte

`src/routes` klasörü altında `+error.svelte` dosyası oluşturursak bu dosya `404` hatalarında karşımıza çıkan sayfadır. Bu dosyada `status` parametresini kullanarak sayfamızın içeriğini dinamik olarak oluşturabiliriz.

```svelte
<script>
  export let page;
  const { status } = page.params;
</script>

<div>
  <h1>{status}</h1>

  {#if status === 404}
    <p>Aradığınız sayfa bulunamadı.</p>
  {:else}
    <p>Bir hata oluştu.</p>
  {/if}
</div>

```

### +layout.svelte

`src/routes` klasörü altında `+layout.svelte` dosyası oluşturursak bu dosya tüm sayfalarımızda kullanılan layout dosyası olur. Bu dosyada `slot` ifadesini kullanarak sayfamızın içeriğini dinamik olarak oluşturabiliriz.

```svelte
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</nav>

<slot></slot>

```

### +server.ts

`src/routes` klasörü altında `+server.ts` dosyası oluşturursak bu dosya server tarafında çalışır. Bu dosyada `GET`, `POST`, `PUT`, `DELETE` gibi HTTP isteklerini dinleyebiliriz.
  
```ts
export async function GET({ request }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { body: posts };
}

export async function POST({ request }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(request.body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const post = await res.json();
  return { body: post };
}
```

### $types dosyaları

`src/routes` klasörü altında `$types` ile başlayan dosyalar oluşturabiliriz. Bu dosyalar route'larımızda kullanacağımız türleri tanımlamak için kullanılır. Örneğin `src/routes/$types.ts` dosyasında `Post` adında bir tür tanımlayabiliriz.

```ts
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
```

### $lib dosyaları

`src/routes` klasörü altında `$lib` ile başlayan dosyalar oluşturabiliriz. Bu dosyalar route'larımızda kullanacağımız fonksiyonları tanımlamak için kullanılır. Örneğin `src/routes/$lib.ts` dosyasında `getPosts` adında bir fonksiyon tanımlayabiliriz.

```ts
export async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return posts;
}
```

Yazımıza burada son veriyoruz. Bir sonraki yazımızda görüşmek üzere.

Sevgiler,
Muhtalip Dede
