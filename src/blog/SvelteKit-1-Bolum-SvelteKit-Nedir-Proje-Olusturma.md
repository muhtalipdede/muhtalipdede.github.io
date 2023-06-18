---
title: SvelteKit 1. Bölüm - SvelteKit Nedir Proje Oluşturma
description: SvelteKit nedir? SvelteKit ile nasıl bir proje oluşturulur? SvelteKit ile nasıl bir proje çalıştırılır?
episode: 1
image: https://repository-images.githubusercontent.com/398741015/1e5a13a9-35c1-4373-8eeb-0bbeda88a7d8
date: '2023-06-10'
categories:
  - svelte
  - sveltekit
published: true
---

<script>
    import createProject from "$lib/assets/blog/sveltekit1/create-project.png";
    import welcomeSvelteKit from "$lib/assets/blog/sveltekit1/welcome-sveltekit.png";
</script>

Herkese Merhabalar,

Bu yazı serimizde bir Javascript frameworkü olan Svelte için ekstra araçlar sağlayan, gelişim sürecini kolaylaştırmayı amaçlayan ve daha performanslı uygulamalar yapmayı kolaylaştıran SvelteKit'i anlayacağız.

SvelteKit, React frameworkünü kullananlar için Nextjs'e, Vue frameworkünü kullananlar için Nuxtjs'e benzetilebilir. Svelte framework ile geliştirilecek uygulamalar için birçok özelliği built-in olarak getirmektedir. Bunlara Routing yapısı, Server Side Rendering örnek verilebilir. Bununla birlikte minimum gerekli kodu derlemek için build optimizasyonu yapmak, offline kullanım senaryosu, sayfaların önyüklemesi gibi özellikleri ve geliştirme zamanında Vite'ında desteğiyle birlikte Hot Module Replacement konusunu da ekleyebiliriz. Bu özellikleri serimizde yeri geldikçe detaylıca inceleyeceğiz.

# Proje Oluşturma

Bir sveltekit projesi oluşturmak oldukça kolaydır. Eğer bilgisayarınızda NodeJS ortamı bulunuyorsa npm kullanarak kolay bir şekilde bir sveltekit projesi oluşturabiliriz. Bir sveltekit projesi oluşturmak için aşağıdaki adımları izleyelim.

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

Bu adımları izledikten sonra bir sveltekit projesi oluşturmuş oluyoruz. Bu adımları izledikten sonra aşağıdaki gibi bir ekranla karşılaşmış oluyoruz. Bu ekranda bir sveltekit projesi oluşturduğumuz için bize birkaç seçenek sunuyor. Bu seçeneklerden birini seçerek devam edebiliriz. Ben bu yazıda template proje olarak demo projesini seçtim. TypeScript desteği için TypeScript projesini seçebilirsiniz. Ek olarak projenizde ESLint ve Prettier desteği için ESLint ve Prettier projesini seçebilirsiniz. Test içinse Playwright projesini seçebilirsiniz. Unit test içinse Vitest projesini seçebilirsiniz.

<img src={createProject} alt="Create SvelteKit Project" />

Bu adımları izledikten sonra bir sveltekit projesi oluşturmuş oluyoruz. Bu projeyi çalıştırmak için aşağıdaki komutu çalıştırabiliriz.

```bash
npm run dev -- --open
```

Bu komutu çalıştırdıktan sonra aşağıdaki gibi bir ekranla karşılaşmış oluyoruz. Bu ekranda sveltekit projesi çalışmaya başlamış oluyor. Projeyi çalıştırdıktan sonra tarayıcımızda http://localhost:5174 adresine gittiğimizde aşağıdaki gibi bir ekranla karşılaşmış oluyoruz. Bu ekranda sveltekit projesi çalışmaya başlamış oluyor.

<img src={welcomeSvelteKit} alt="Welcome SvelteKit" />

Yazımıza burada son veriyoruz. Bir sonraki yazımızda SvelteKit projemizdeki dosyaları inceleyeceğiz. Bir sonraki yazımızda görüşmek üzere.

Sevgiler,
Muhtalip Dede