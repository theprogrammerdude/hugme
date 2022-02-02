import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  randomGif: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://g.tenor.com/v1/search?tag=hugs&locale=en&key=LIVDSRZULELA&limit=200'
      )
      .subscribe((data: any) => {
        var randomGifIndex = Math.floor(Math.random() * data.results.length);

        this.randomGif = data.results[randomGifIndex];
        // console.log(this.randomGif);
      });
  }
}
