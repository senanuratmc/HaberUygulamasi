import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { NewsApiService } from "./news-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //Haberler ve haber kaynakları için değişken tanımlandı.
  mArticles$: Observable<any>;
  mSources$: Observable<any>;
  newSource =[];
  constructor(private newsapi: NewsApiService) {
  }

  // Servisten gelen veriler değişkenlere atandı.
  ngOnInit() {
    this.mArticles$ = this.newsapi.initArticles();
     this.newsapi.initSources().subscribe((res:any)=>{
      this.newSource=res.sources
      this.newSource.splice(10,1)
      console.log(this.newSource)
    });
  }


  //Haber arandığı zaman bu fonksiyon kullanılır. (selected from UI mat-menu)
  searchArticles(source: string) {
    this.mArticles$ = this.newsapi.getArticlesByID(source);
  }
}
