import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from '../Services/news.service';


@Component({
  selector: 'app-news-c',
  templateUrl: './news-c.component.html',
  styleUrl: './news-c.component.scss'
})
export class NewsCComponent {
  title = 'NewsProject';
  sources: any = [];
  articles: any = [];
  selectedNewsChannel: string = "Top 10 Trending News!";
  @ViewChild('sidenav') sideNav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver, 
    private cd: ChangeDetectorRef, 
    private newsApi: NewsService
  ) {}

  ngOnInit(): void {
    this.newsApi.initArticles().subscribe((res: any) => {
      console.log(res);
      this.articles = res.articles;
    });

    this.newsApi.initSources().subscribe((res: any) => {
      console.log(res);
      this.sources = res.sources;
    });
  }

  ngAfterViewInit(): void {
    if (this.sideNav) {
      console.log("sideNav initialized:", this.sideNav);  // Debugging statement
      this.observer.observe(['(max-width:772px)'])
        .subscribe((res) => {
          if (res?.matches) {
            this.sideNav.mode = "over";
            this.sideNav.close();
          } else {
            this.sideNav.mode = 'side';
            this.sideNav.open();
          }
        });
    } else {
      console.error("sideNav is not initialized");  // Error log if sideNav is not initialized
    }
    this.cd.detectChanges();
  }
  

  searchSource(source: any): void {
    this.newsApi.getArticlesByID(source.id)
      .subscribe((res: any) => {
        this.selectedNewsChannel = source.name;
        this.articles = res.articles;
      });
  }
}
