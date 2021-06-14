import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Image{
  year:string;
  image:string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  year!:string;
  imageUrl!:string | undefined;
  images: Array<Image> = [
    { year: '1900', image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Paris_1900.jpg' },
    { year: '1950', image: 'https://ranwhenparkeddotnet.files.wordpress.com/2016/05/paris-place-de-la-concorde-1950s.jpg' },
    { year: '2020', image: 'https://media.parisladefense.com/InupwW-yd5S50CZm7vPUIXdtcL0=/1160x450/articles/developpement-territorial/2020-04/paris-la-defense-entreprise-face-covid-19-2020.jpg' }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
       this.year = params.year;
       this.imageUrl = this.images.find(e => e.year == this.year)?.image;

    })
  }

}
