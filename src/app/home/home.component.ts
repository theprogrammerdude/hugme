import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  randomGif: any = {};
  next: Array<number> = [0, 50, 100, 150, 200, 250, 300, 350, 400];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchGif();
  }

  fetchGif() {
    this.http
      .get(
        `https://g.tenor.com/v1/search?tag=hugs&locale=en&key=LIVDSRZULELA&limit=200&next=${
          this.next[Math.floor(Math.random() * this.next.length)]
        }`
      )
      .subscribe((data: any) => {
        // console.log(data);
        var randomGifIndex = Math.floor(Math.random() * data.results.length);

        this.randomGif = data.results[randomGifIndex];
        // console.log(this.randomGif);
      });
  }
}
