---
title: SvelteKit 2. Bölüm - SvelteKit Klasör Yapısı
description: SvelteKit klasör yapısı nasıldır? SvelteKit projesindeki dosyalar nelerdir? SvelteKit projesindeki dosyaların görevleri nelerdir?
episode: 2
image: https://repository-images.githubusercontent.com/398741015/1e5a13a9-35c1-4373-8eeb-0bbeda88a7d8
date: '2023-06-10'
categories:
  - svelte
  - sveltekit
published: true
---

<script>
    import projectFolders from "$lib/assets/blog/sveltekit2/project-folders.png";
</script>

Herkese Merhabalar,

İlk yazımızda sveltekit nedir ve nasıl proje oluşturulur konularını incelemiştik. Bu yazımızda ise sveltekit projesindeki dosyaları inceleyeceğiz. Klasör yapısını inceleyeceğiz. 

[SvelteKit 1. Bölüm - SvelteKit Nedir Proje Oluşturma](../blog/SvelteKit-1-Bolum-SvelteKit-Nedir-Proje-Olusturma)

# Klasör Yapısı

SvelteKit projesi oluşturduğumuzda aşağıdaki klasör yapısı oluşur.

<img src="{projectFolders}" alt="SvelteKit Proje Klasör Yapısı" />

## src

SvelteKit projesindeki tüm kodlarımızın bulunduğu klasördür. Bu klasörün içerisindeki dosyaları inceleyelim.

### lib

Bu klasördeki dosyalar, projemizdeki tüm sayfalarda kullanılan kodları içerir. Örneğin, projemizdeki tüm sayfalarda kullanacağımız bir fonksiyon varsa bu klasördeki dosyalara ekleyebiliriz. $lib alias'ı ile bu klasördeki dosyalara erişebiliriz.

#### lib/server - Server Only Modules

Bu klasördeki dosyalar, projemizin sunucu tarafında çalışan kodları içerir. $lib/server alias'ı ile bu klasördeki dosyalara erişebiliriz.

Peki Server Only Module içerisinde kullanacağımız modüller neler olabilir. Eğer projemizde client ve server aynı repository'de ise server tarafında kullanılan ve gizli olması gereken bilgileri bu klasördeki dosyalara ekleyebiliriz. Örneğin, veritabanı bağlantı bilgileri, api key'leri gibi bilgileri bu klasördeki dosyalara ekleyebiliriz. Bu dosyaları .gitignore dosyasına eklemeyi unutmayalım. $lib/server alias'ı ile bu klasördeki dosyalara erişebiliriz.

### params

Bu klasörde herhangi bir dosya oluşturursak, oluşturduğumuz dosyanın adı parametre olarak kullanılabilir. Örneğin, params klasörü içerisindeki [id].ts dosyası oluşturursak, bu dosyadaki id parametresi ile sayfaya erişebiliriz. Örneğin, /params/123 sayfasına erişmek için /params/[id].ts dosyasını oluştururuz. Bu dosyada id parametresini kullanarak sayfaya erişebiliriz. İleri Router konusunda daha detaylı inceleyeceğiz.

### routes

Bu klasördeki dosyalar, projemizdeki sayfaları içerir. Örneğin, /about sayfası için routes/about.svelte dosyasını oluştururuz. Bu dosyada about sayfasının kodlarını yazarız. İleri Router konusunda daha detaylı inceleyeceğiz.

### app.html

Bu dosya, projemizin html dosyasıdır. Bu dosyada projemizin head kısmını düzenleyebiliriz. Örneğin, projemizdeki tüm sayfalarda kullanacağımız css dosyalarını bu dosyada ekleyebiliriz.

### error.html

Bu dosya, projemizdeki hata sayfalarının html dosyasıdır. Örneğin, 404 sayfası için error.html dosyasını oluştururuz. Bu dosyada 404 sayfasının html kodlarını yazarız.

### hooks.client.ts

Bu dosyada client tarafında çalışacak hook'ları oluşturabiliriz. Örneğin, projemizdeki tüm sayfalarda kullanacağımız bir hook varsa bu dosyada oluşturabiliriz. Bu konuyu hooks konusunda daha detaylı inceleyeceğiz.

### hooks.server.ts

Bu dosyada server tarafında çalışacak hook'ları oluşturabiliriz. Örneğin, projemizdeki tüm sayfalarda kullanacağımız bir hook varsa bu dosyada oluşturabiliriz. Bu konuyu hooks konusunda daha detaylı inceleyeceğiz.


### service-worker.ts

Bu dosyada projemizin service worker kodlarını yazabiliriz. Bu konuyu service worker konusunda daha detaylı inceleyeceğiz.

Yazımıza burada son veriyoruz. Bir sonraki yazımızda görüşmek üzere.

Sevgiler,
Muhtalip Dede