import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
constructor(private service:MovieApiServiceService,private router:ActivatedRoute){}
getMovieDetailResult:any;
getMovieVideoResult:any;
getMovieCastResult:any;
ngOnInit(): void {
  let getId = this.router.snapshot.paramMap.get('id');
  console.log(getId,'id');
  this.getMovie(getId);
  this.getVideo(getId);
  this.getMovieCast(getId);
}
getMovie(id:any){
  this.service.getMovieDetails(id).subscribe((result)=>{
    console.log(result,"movie details");
    this.getMovieDetailResult = result;
    
  })
}

getVideo(id:any){
  this.service.getMovieVideo(id).subscribe((result)=>{
    console.log(result,'resultvidoe');
    
    result.results.forEach((elemnt:any) =>{
      if(elemnt.type == "Trailer"){
        this.getMovieVideoResult = elemnt.key;
      }
    })
    // this.getMovieVideoResult=result;

  })
}
getMovieCast(id:any){
  this.service.getMovieCast(id).subscribe((result)=>{
  this.getMovieCastResult=result.cast;
  })
}
}
