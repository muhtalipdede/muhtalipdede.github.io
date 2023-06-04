---
title: Linkerd (Service Mesh) — Kubernetes üzerindeki Örümcek Ağları
description: First post.
date: '2023-4-14'
categories:
  - linkerd
  - kubernetes
  - service mesh
published: true
---

Örümcekler beslenme ihtiyaçlarını karşılayabilmek ve avlarını yakalayabilmek için büyük bir ustalıkla örümcek ağlarını oluştururlar. Kimi zaman küçük bir yüzeyde kimi zaman ise ormanda bitkiler veya ağaçlar arasında daha büyük alanlara bu tuzakları kurmaktadırlar. Örümcekler ağlarını örerken müthiş bir geometri içerisinde oluşturmaktadırlar. Uzun sütunları kısa ve sık aralıklarla birleştirdiklerinden avları ağa bir kere yapıştıktan sonra avların ağdan kurtulmaları zorlaşır.

Herkese tekrardan selamlar, belgesel kuşağımızı tamamladıktan sonra konumuza hemen giriş yapmak istiyorum. Bugünkü konumuz dağıtık uygulama mimarilerinde vazgeçilmez bir ihtiyaç haline gelen Service Mesh yapısını güzel bir uygulaması olan Linkerd ile birlikte inceleyeceğiz. Kubernetes Cluster’ları üzerinde servisler arasında örümcek ağı misali kurulan bu yapı yazılım geliştirme süreçlerimizde birçok temel ihtiyacımıza basit bir şekilde çözüm üretebilmektedir. Peki dağıtık yazılım mimarilerinde nedir bu temel ihtiyaçlarımız, gelin bir bakalım.

Dağıtık yazılım mimarilerindeki temel ihtiyaçlarımız nelerdir?
==============================================================

Modern mimarilerde uygulamalarımızı en anlamlı ve bütünsel parçalara bölmeye başladık. Bu parçalanmış ve dağıtık uygulama mimarilerinin eski yaklaşımlara göre bize kazandırmış olduğu birçok avantaj bulunmakta. Bu avantajlara uygulamaların performansı, ölçeklenebilirliği, bakımlarının daha kolay yapılabilmesi, tak çıkar gibi yöntemlerle geliştirilmesi ve son kullanıcıya hızlı bir şekilde yeni özelliklerin sunulması örnek verilebilir. Fakat uygulamaları parçaladıkça çözmemiz gereken yeni problemler oluşmaktadır. Tekil uygulama mimarilerinde birçok şeyi tek noktadan yönetebilirken dağıtık sistemlerde bu süreçler biraz yük getirmektedir.

Dağıtık yazılım mimarilerindeki en kritik noktalardan biri parçalanmış yazılım parçalarının birbirleri arasındaki iletişimidir. Uygulamaları parçaladıkça yazılım içerisindeki iletişim katmanını network seviyesine taşımış oluyoruz. Bu durumun bize avantajları olduğu gibi dezavantajları da olabilmektedir. Dezavantajların başında network katmanının bize ekstra bir yük oluşturması gelmektedir. Buradaki yapı iyi tasarlanmadığı zaman özellikle performans açısından uygulama sorunlar yaşamaya başlayacaktır. İletişimin network katmanına taşınmasının en önemli avantajları ise her uygulamayı kendi başına yönetebiliyor ve parçadan bütüne uygulamayı daha rahat gözlemleyerek sorunun tespitini kolayca yapabiliyor olmaktır. Peki dağıtık sistemlerde uygulamalarımızı nasıl gözlemleriz?

Ve karşınızda _“Service Mesh”_…

Nedir bu Service Mesh?
======================

Service mesh, modern uygulama mimarilerindeki mikroservislerin birbirleriyle iletişimini yönetmek ve ölçeklendirmek için kullanılan bir çözümdür. Bu yöntem, uygulamanın farklı bileşenlerinin birbirleriyle iletişim kurmasına olanak tanıyan ağ bağlantılarının yönetilmesini içerir.

Bir uygulama ekosistemindeki bileşenlerin birbiriyle etkileşimini yönetmek için bir araç olan service mesh birbirleriyle etkileşime giren bu bileşenleri bir arada çalıştıracak yapıyı oluşturup son kullanıcıya sunulacak hizmeti bir bütün olarak kullanıma sunar. Bu bileşenler, genellikle mikroservisler olarak adlandırılır ve uygulamanın her bir bileşeni ayrı bir işlevi yerine getirir. Bu nedenle, mikroservisler arasındaki iletişim yönetimi, uygulamanın çalışması için hayati önem taşır.

Service mesh, bu iletişim yönetimini basitleştirmek ve güvenli hale getirmek için tasarlanmıştır. Mikroservislerin birbiriyle iletişim kurması için gerekli ağ bağlantıları, servis mesh tarafından otomatik olarak yönetilir. Bu, geliştiricilerin uygulamalarını daha hızlı ve daha az hataya neden olacak şekilde geliştirmelerine olanak tanır.

Alternatif Service Mesh çözümleri nelerdir?
===========================================

Service mesh için birçok iyi alternatif proje bulunmaktadır. Linkerd, Istio, Consul, AWS App Mesh, Google Cloud Mesh ve HashiCorp Consul Connect gibi birçok farklı service mesh çözümü mevcuttur.

[**Linkerd,**](https://linkerd.io/) hafif ve ölçeklenebilir bir service mesh çözümüdür. Bu, Kubernetes üzerinde kullanımı kolay ve basit bir yapılandırma sürecine sahip olmasıyla tanınır.

[**Istio,**](https://istio.io/) Envoy tarafından desteklenen bir service mesh çözümüdür. Güvenlik, izleme, route yönetimi ve network yönetimi gibi birçok özelliği barındırır.

[**Consul,**](https://www.consul.io/)  bir service mesh çözümü olarak kullanılabilecek bir keşif servisi olarak bilinir. Ölçeklenebilir bir yapıya sahip olması ve merkezi olmayan keşif özelliği ile tanınır.

[**AWS App Mesh,**](https://aws.amazon.com/tr/app-mesh)  AWS üzerinde çalışan uygulamaların servislerini bir arada tutmak için kullanılan bir service mesh çözümüdür. İzleme, yönetim ve güvenlik özelliklerini barındırır.

[**Google Cloud Anthos Service Mesh,**](https://cloud.google.com/anthos/service-mesh)  Google Cloud üzerinde çalışan uygulamaların yönetimini sağlamak için tasarlanmıştır. Yüksek ölçeklenebilirlik ve izleme özellikleri ile tanınır.

Her service mesh çözümü, farklı özelliklere, avantajlara ve dezavantajlara sahip olabilir. Seçilen service mesh çözümü, uygulamanın özelliklerine, gereksinimlerine ve kurulumunun kolaylığına göre belirlenmelidir.

Seni seçtim Linkerd…
====================

Biz bu yazımızda diğer alternatiflerine göre rekabetçi bir service mesh çözümü olan Linkerd’ı inceleyeceğiz.

Linkerd nasıl çalışır?
======================

Linkerd, mikroservice mimarisi ortamlarında kullanılan açık kaynak bir service mesh teknolojisidir. Linkerd, hizmetlerin arasındaki iletişimde sorunsuz, güvenli ve hızlı bir iletişim sağlamak için tasarlanmıştır.

Linkerd, bir kontrol düzlemi (control plane) ve bir veri düzlemi (data plane) mimarisi kullanır. Kontrol düzlemi, hizmet trafiğini yönlendiren ve izleyen bir dizi servis tarafından yönetilirken, veri düzlemi, gerçek hizmetler tarafından sağlanan verilerin işlendiği yerdir.

Veri düzlemi, her hizmetin yanına eklenen bir Linkerd proxy’si kullanarak çalışır. Bu proxy, hizmet trafiğini yönlendirmek, hata toleransı sağlamak, isteklerin sayısını ve hızını ölçmek gibi bir dizi işlevi yerine getirir. Ayrıca, Linkerd, trafikteki hataları otomatik olarak algılar ve bunları hızlı bir şekilde düzeltir.

Kontrol düzlemi, Linkerd’in yüksek düzeyde yönetim işlevleri gerçekleştirdiği yerdir. Bu düzlemde, hizmet trafiği yönetimi, hata izleme, performans ölçümü, güvenlik, veri kaydı ve diğer yönetim işlevleri gerçekleştirilir. Kontrol düzlemi, Kubernetes, Consul veya Amazon Web Services gibi bir dizi hizmet keşif aracı ile entegre edilebilir.

**Linkerd v1 vs Linkerd v2**
============================

Linkerd yayınlandıktan bir süre sonra daha performanslı ve yeniden tasarlanmış haliyle 2. versiyonunu yayınladı. Bu iki versiyon arasında aşağıdaki gibi farklılıklar olduğunu söyleyebiliriz.

1.  Mimari: Linkerd 1, bir process içinde çalışan bir proxy mimarisi kullanırken, Linkerd 2, yan yana çalışan birçok proxy tarafından oluşturulan bir ağ mimarisi kullanır.
2.  Kubernetes’e gömülme: Linkerd 2, Kubernetes’e gömülme konusunda daha fazla destek sağlar ve daha iyi bir Kubernetes entegrasyonu sunar.
3.  Platformlar: Linkerd 1, sadece Kubernetes ve Mesos platformlarını desteklerken, Linkerd 2, herhangi bir Kubernetes, Nomad, Amazon Web Services veya diğer platformlarında kullanılabilir.
4.  Kullanıcı arayüzü: Linkerd 2, daha iyi bir kullanıcı arayüzü sunar ve kullanımı daha kolay hale getirir.
5.  Güvenlik: Linkerd 2, güvenlik özellikleri açısından daha gelişmiştir ve hizmetler arasındaki trafiği şifreleme ve kimlik doğrulama gibi güvenlik özelliklerini sağlar.
6.  Performans: Linkerd 2, performans ölçümleri ve izlemesi konusunda daha iyidir ve daha fazla performans ölçüm aracı sunar.
7.  Modüler yapı: Linkerd 2, daha modüler bir yapıya sahiptir ve hizmetlerin arasındaki trafiği yönlendiren farklı kontrol düzlemleri oluşturmak için kullanılabilir.

Hadi şimdi bir uygulama yapalım…
================================

Hadi Service Mesh’in ne olduğunu anladık, Linkerd’ında nasıl çalıştığını öğrendik diyelim ama nasıl çalışıyor bu arkadaş bir örnek görseydik en azından.

Local bilgisayarımızda bunu deneyimleyebilmemiz için kubectl aracına ve en azından bir tane Kubernetes Cluster’ına ihtiyacımız var. Kubernetes Cluster’ı olarak ben minikube tercih edeceğim.

Kubectl kurulumları için aşağıdaki linkteki adımları takip edebilirsiniz.

[https://kubernetes.io/docs/tasks/tools/#kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

Minikube kurulumları için aşağıdaki linkteki adımları takip edebilirsiniz.

Kurulumlar hazırsa Linkerd kurulumları için başlayabiliriz. Aşağıdaki komutu çalıştırarak Linkerd’ın kurulumunu sağlayalım.

```bash
curl --proto '=https' --tlsv1.2 -sSfL https://run.linkerd.io/install | sh
```

Alternatif olarak homebrew kullanıyorsanız aşağıdaki komutla da kurulumu gerçekleştirebilirsiniz.

```bash
brew install linkerd
```

Kurulum tamamlandıktan sonra aşağıdaki gibi linkerd cli ile versiyon kontrolü yapabiliriz.

```bash
linkerd version
```

Kurulum tamamlandıktan sonra Kubernetes Cluster’ı üzerinde işlemlere başlamadan önce aşağıdaki gibi kontrol sağlamamız gerekiyor. Eğer cluster üzerinde engel bir durum varsa bu adımda tespit edebiliyor olacağız.

Bu adımı da başarılı bir şekilde geçtikten sonra artık Cluster içerisine Linkerd’ı uygulayabiliriz. Bunun için aşağıdaki iki komutu çalıştırmamız gerekiyor.

```bash
linkerd install --crds | kubectl apply -f -  
linkerd install --set proxyInit.runAsRoot=true | kubectl apply -f -
```

Kubernetes Cluster’ı üzerinde kurulumları tamamladıktan sonra bir uygulama ile örneğimize devam edelim.

Aşağıdaki komutu kullanarak örnek uygulamamızı clusterımıza uygulayalım.

```bash
curl --proto '=https' --tlsv1.2 -sSfL https://run.linkerd.io/emojivoto.yml | kubectl apply -f -
```

Port forward ile birlikte local bilgisayarımızda uygulamamızı görebiliriz.

```bash
kubectl -n emojivoto port-forward svc/web-svc 8080:80
```

Uygulamamıza [http://localhost:8080/](http://localhost:8080/) adresinden erişebiliriz.

Bu uygulamada favori emojilerini oylayabiliyorsunuz. Eğer donut emojisine tıklarsanız uygulama hata alacaktır. Hata senaryosunu test etmek için donut’a da oy vermeyi unutmayın 🍩

Şimdiki adımda linkerd’ı uygulamamıza enjekte edeceğiz. Bunun için aşağıdaki komutu kullanabilirsiniz.

```bash
kubectl get -n emojivoto deploy -o yaml | linkerd inject - | kubectl apply -f -
```

Ayrıca Linkerd bize görsel olarak bir eklenti sunmaktadır. Bu eklentimizin adı viz. Viz eklentisini kullanabilmek için aşağıdaki komutu çalıştıralım.

```bash
linkerd viz install | kubectl apply -f -
```

Eğer başarılı bir şekilde kurulumları yapabildiyseniz aşağıdaki komutu çalıştırarak bir dashboard görmeye başlayacağız.

```bash
linkerd viz dashboard & 
```

Yukarıda görüldüğü gibi uygulamalarımıza linkerd’ı enjekte ettikten sonra artık kolayca izleyebilir oluyoruz. Bu dashboard ile birçok uygulamayı bağımlılıklarını, performanslarını vs. kolaylıkla takip edebiliriz.

Yazımızın sonuna gelirken genel olarak yazıyı toparlamak amacıyla son notlarımızı ekleyelim.

Service mesh teknolojileri, modern mikroservice mimarilerinde önemli bir rol oynar. Bu teknolojiler, birçok zorluğu aşmak için tasarlanmıştır: mikroserviceler arasındaki trafiği yönetmek, izlemek, güvenliği sağlamak ve performansı artırmak gibi. Service mesh, bu zorlukların üstesinden gelmek için bir ara katman sağlar ve uygulama geliştiricilerinin mikroservicelerini daha verimli ve güvenli bir şekilde çalıştırmasına olanak tanır.

Linkerd, açık kaynaklı bir servis mesh çözümüdür ve servis keşfi, trafik yönlendirme, güvenlik, gözlem ve hata toleransı gibi özellikler sağlar. Linkerd, uygulama geliştiricilerinin servis mesh teknolojilerini kolayca kullanmalarına olanak tanır ve çoğu durumda ek bir kodlama gerektirmez.

Linkerd’in kullanımı kolaydır ve birçok platformda çalışabilir. Uygulama geliştiricileri, Linkerd’i mikroservicelerinin yanı sıra Kubernetes ve diğer bulut çözümleriyle de kullanabilirler. Ayrıca, Linkerd, servisler arasındaki trafiği yönetmek için yük dengeleyicileri ve otomatik yedekleme sağlar, böylece bir servislerin başarısız olması durumunda otomatik olarak başka bir servise yönlendirilebilir.

Sağlıcakla,

Muhtalip

Kaynaklar
=========