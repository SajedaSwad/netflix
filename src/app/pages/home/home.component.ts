import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any[] = [];
  trendingMovieResult: any = [];
  activeIndex = 0;

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }
  //bannerData
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult');
      this.bannerResult = result.results;
    });
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.bannerResult.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.bannerResult.length) %
      this.bannerResult.length;
  }

  //trending data
  trendingData() {
    this.service.trindingMovieApiData().subscribe((result) => {
      console.log(result, 'trending data');
      this.trendingMovieResult = result.results;
    });
  }
}
