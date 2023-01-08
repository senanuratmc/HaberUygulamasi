import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsApiService {
  // Haberleri çekmek için kullandığımız Api Key:
  api_key = "27a58e5736c7461caced822dcb4e9ee2";

  constructor(private http: HttpClient) {}

  // haber kaynaklarının listesi buradan çekiliyor.
  initSources() {
    return this.http.get(
      "https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key
    );
  }

  // Haber başlıkları buradan çekiliyor.
  initArticles() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
        this.api_key
    );
  }

  // Kullanıcı habere tıkladığı zamanki id alınıp bu fonksiyon içerisinde sorgu yapılır.
  getArticlesByID(source: String) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.api_key
    );
  }
}
