---
title: ACID - BASE 1. Bölüm
description: ACID ve BASE kavramları ile ilgili bilgilerin yer aldığı yazı dizisinin ilk bölümüdür.
episode: 1
image: https://images.unsplash.com/photo-1533750204176-3b0d38e9ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
date: '2023-06-23'
categories:
    - ACID
    - BASE
    - database
    - transaction
published: true
---

## ACID

ACID, veritabanı işlemlerinin güvenilirliğini sağlamak için kullanılan bir kısaltmadır. ACID kısaltması, Atomicity, Consistency, Isolation, Durability kelimelerinin baş harflerinden oluşur.

### Atomicity

Atomicity, işlemlerin bölünemezliğini ifade eder. Bir işlemdeki her adımın başarılı olması durumunda işlem başarılı, herhangi bir adımın başarısız olması durumunda ise işlem başarısız olur. Örneğin, bir banka hesabından para çekme işleminde, para çekme işleminin başarılı olması için önce hesapta yeterli miktarda para olması, ardından para çekme işleminin başarılı olması ve son olarak da hesapta kalan miktarın güncellenmesi gerekmektedir. Bu işlemlerin herhangi birinin başarısız olması durumunda işlem başarısız olur ve işlemlerin hiçbiri gerçekleşmez.

### Consistency

Consistency, işlemlerin veritabanı kısıtlarını ihlal etmemesini ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olmaması durumunda işlem başarısız olur. Bu durumda, hesapta yeterli miktarda para olmaması veritabanı kısıtlarını ihlal ettiği için işlem başarısız olur.

### Isolation

Isolation, işlemlerin birbirinden bağımsız çalışmasını ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olması durumunda işlem başarılı olur. Bu durumda, hesapta yeterli miktarda para olması işlemin başarılı olması için yeterlidir. Ancak, aynı anda başka bir işlemde hesaba para yatırma işlemi gerçekleşirse, hesapta yeterli miktarda para olması durumunda bile para çekme işlemi başarısız olur. Bu durumda, para çekme işlemi ile para yatırma işlemi birbirinden bağımsız çalışmadığı için para çekme işlemi başarısız olur.

### Durability

Durability, işlemlerin kalıcı olmasını ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olması durumunda işlem başarılı olur. Bu durumda, hesapta yeterli miktarda para olması işlemin başarılı olması için yeterlidir. Ancak, işlem başarılı olmasına rağmen, işlemin kalıcı olmaması durumunda, işlem başarısız olur. Bu durumda, para çekme işlemi başarılı olmasına rağmen, işlem kalıcı olmadığı için başarısız olur.

## BASE

BASE, veritabanı işlemlerinin güvenilirliğini sağlamak için kullanılan bir kısaltmadır. BASE kısaltması, Basically Available, Soft state, Eventual consistency kelimelerinin baş harflerinden oluşur.

### Basically Available

Basically Available, işlemlerin her zaman kullanılabilir olmasını ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olması durumunda işlem başarılı olur. Bu durumda, hesapta yeterli miktarda para olması işlemin başarılı olması için yeterlidir. Ancak, işlem başarılı olmasına rağmen, işlemin kalıcı olmaması durumunda, işlem başarısız olur. Bu durumda, para çekme işlemi başarılı olmasına rağmen, işlem kalıcı olmadığı için başarısız olur.

### Soft state

Soft state, işlemlerin geçici olarak başarısız olmasını ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olması durumunda işlem başarılı olur. Bu durumda, hesapta yeterli miktarda para olması işlemin başarılı olması için yeterlidir. Ancak, aynı anda başka bir işlemde hesaba para yatırma işlemi gerçekleşirse, hesapta yeterli miktarda para olması durumunda bile para çekme işlemi başarısız olur. Bu durumda, para çekme işlemi ile para yatırma işlemi birbirinden bağımsız çalışmadığı için para çekme işlemi başarısız olur.

### Eventual consistency

Eventual consistency, işlemlerin sonunda başarılı olmasını ifade eder. Örneğin, bir banka hesabından para çekme işleminde, hesapta yeterli miktarda para olması durumunda işlem başarılı olur. Bu durumda, hesapta yeterli miktarda para olması işlemin başarılı olması için yeterlidir. Ancak, aynı anda başka bir işlemde hesaba para yatırma işlemi gerçekleşirse, hesapta yeterli miktarda para olması durumunda bile para çekme işlemi başarısız olur. Bu durumda, para çekme işlemi ile para yatırma işlemi birbirinden bağımsız çalışmadığı için para çekme işlemi başarısız olur.

Bu yazıda ACID ve BASE kısaltmaları hakkında bilgi verdik. Bir sonraki yazıda görüşmek üzere.

Sevgiler,
Muhtalip