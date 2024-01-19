import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any[] = [];
  activeIndex = 0;

  ngOnInit(): void {
    this.bannerData();
  }

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
    this.activeIndex = (this.activeIndex - 1 + this.bannerResult.length) % this.bannerResult.length;
  }
}


// export class HomeComponent {
//   constructor(private service: MovieApiServiceService) {}

//   bannerResult: any[] = [];
//   activeIndex = 0;

//   ngOnInit(): void {
//     this.bannerData();
//   }

//   bannerData() {
//     this.service.bannerApiData().subscribe((result) => {
//       console.log(result, 'bannerresult');
//       this.bannerResult = result.results;
//     });
//   }

//   nextSlide() {
//     this.activeIndex = (this.activeIndex + 1) % this.bannerResult.length;
//   }

//   prevSlide() {
//     this.activeIndex = (this.activeIndex - 1 + this.bannerResult.length) % this.bannerResult.length;
//   }

//   getCarouselItems() {
//     const length = this.bannerResult.length;

//     // Calculate indices for previous, current, and next slides
//     const prevIndex = (this.activeIndex - 1 + length) % length;
//     const nextIndex = (this.activeIndex + 1) % length;

//     // Create an array with the three slides to display
//     return [
//       this.bannerResult[prevIndex],
//       this.bannerResult[this.activeIndex],
//       this.bannerResult[nextIndex],
//     ];
//   }
// }
