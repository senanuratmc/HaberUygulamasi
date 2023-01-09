# :zap: Haber Uygulaması

* API, haber verilerini alır ve telefonda görüntülemeye uygun bir formatta görüntüler.
* Kullanıcının bir haber kanalı seçmesini sağlayan sol taraftaki gezinme çubuğunu görüntüler.Tek bir sütunda bu haber kanalından alınan haberler görüntülenir.
* Yazıları oluşturmak için [newsapi] (https://newsapi.org) tarafından sunulan News API hizmeti kullanılır. Şimdi yalnızca localhost'da çalışmaktadır. CORS hataları (hata 406) nedeniyle dağıtıldığında çalışmaz, bu da API'ye tam olarak erişmek için abonelik ödemenizi istemeleri anlamına gelir.
* Kod:[article by Rashid Sakara](https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/) - Bkz. [:clap: Inspiration](#clap-inspiration).
* **Not:** web bağlantılarını yeni bir pencerede açmak için : _ctrl+click on link_
## :books: Genel Bilgi
* Uygulama şablonundaki nesnelerde depolanan uzak verileri bağlamak için Angular'ın model görünümü görünüm modelini (MVVM(model-view-viewmodel)) kullanır. Bileşen, kontrol cihazı/görünüm modelinin bir kısmını oynatır. Şablon görünümü temsil eder.

* Very basic app to show news, does not use reactive programming best practices - specified function return types, typescript models, etc....

## :camera: Uygulama Örnek Fotoğraflar

![Example screenshot](./img/news-headlines.png).

## :signal_strength: Technologies

* [Angular v15](https://angular.io/)
* [RxJS Library v7](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).
* [News REST API v2](https://newsapi.org/) used to search for news articles.
* [Angular Material Design v15](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview), [mat-sidenav](https://material.angular.io/components/sidenav/overview),  [mat-card](https://material.angular.io/components/card/overview) etc.

## :floppy_disk: Kurulum

* Bağımlılıkları yüklemek için `npm i` kullanın.
* `www.newsapi.org` and add it to `news-api.service.ts` den ücretsiz bir API anahtarı alın. 
* Geliştirme sunucusu için `ng serve` çalıştırın. `http://localhost:4200/` adresine gidin. Kaynak dosyalardan herhangi birini değiştirirseniz uygulama otomatik olarak yeniden yüklenir.

## :computer: Kod Örnekleri

* `news-api.service.ts` adresine gidin ve Angular httpClient modülünü kullanarak API haber verilerini alın.

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

* [Angular HttpClient](https://angular.io/guide/http) modülü, XMLHtpRequest tarayıcı arayüzü üzerinden arka uç hizmetleriyle iletişim kurmak için kullanılır.


## :clipboard: Durum ve Yapılacak Listesi

* Durum: Çalışıyor.
* Yapılacak: Yok .

## :clap: İlham Kaynağı

* [article by Rashid Sakara on building a news application using Angular 6 and Google’s Material Design](https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/)

## :file_folder: Lisans

* Bu proje MIT lisansının koşulları altında lisanslanmıştır.
