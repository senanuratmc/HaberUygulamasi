# :zap: Haber Uygulaması

* API, haber verilerini alır ve telefonda görüntülemeye uygun bir formata dönüştürmeyi sağlar.
* Kullanıcının bir haber kanalı seçmesini sağlayan sol taraftaki menüde gösterir. Tek bir sütunda bu haber kanalından alınan haberler görüntülenmiştir.
* Haberleri oluşturmak için [newsapi] (https://newsapi.org) tarafından sunulan News API kullanılmıştır. 
* **Not:** web bağlantılarını yeni bir pencerede açmak için : _ctrl+click on link_
## :books: Genel Bilgi
* Uygulama şablonundaki nesnelerde depolanan uzak verileri bağlamak için Angular'ın MVVM (model-view-viewmodel) kullanır. Bileşen, kontrol cihazının ya da görünüm modelinin bir kısmını oynatır.

## :camera: Uygulama Örnek Fotoğraflar

![Haber uygulaması ekran görüntüsü](https://user-images.githubusercontent.com/102552012/211427785-18348f13-96f1-453f-b5b1-1042c6caecb8.png).
![Haber uygulaması ekran görüntüsü2](https://user-images.githubusercontent.com/102552012/211427963-48ef9394-75dd-49cb-a965-d67a5059c991.png).
![Haber uygulaması ekran görüntüsü3](https://user-images.githubusercontent.com/102552012/211427996-4fa6730c-f846-4342-8672-eccc7474b857.png).
![Haber uygulaması ekran görüntüsü4](https://user-images.githubusercontent.com/102552012/211428048-376cad29-ee1e-4f3a-b54b-4c425438dfa1.png).

## :signal_strength: Teknolojiler

* [Angular v15](https://angular.io/)
*RxJS Library v7, API veri gözlemlerine abone olmak için kullanılmıştır.
* [News REST API v2](https://newsapi.org/) haber makalelerini araştırmak için kullanıldı.
* [Angular Material Design v15](https://material.angular.io/) kullanıcı arayüzü için kullanılmıştır, özellikle [mat-menu](https://material.angular.io/components/menu/overview), [mat-sidenav](https://material.angular.io/components/sidenav/overview),  [mat-card](https://material.angular.io/components/card/overview) vb.

## :floppy_disk: Kurulum

* Bağımlılıkları yüklemek için `npm i` kullanın.
* `www.newsapi.org` adresinden ücretsiz bir API anahtarı alın ve `news-api.service.ts` adresine ekleyin. 
* Geliştirme sunucusu için `ng serve` çalıştırın. `http://localhost:4200/` adresine gidin. Kaynak dosyalardan herhangi birini değiştirirseniz uygulama otomatik olarak yeniden yüklenir.

## :computer: Kod Örnekleri

* `news-api.service.ts` adresine gidin ve [Angular HttpClient](https://angular.io/guide/http)  modülünü kullanarak API haber verilerini alın.

```typescript

import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'YOUR API KEY';

  constructor(private http: HttpClient) { }
  initSources() {
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  initArticles() {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}

```

## :cool: Özellikler

* [Angular HttpClient](https://angular.io/guide/http) modülü, XMLHtpRequest tarayıcı arayüzü üzerinden arka uç hizmetlerine erişmek için kullanılmıştır.
