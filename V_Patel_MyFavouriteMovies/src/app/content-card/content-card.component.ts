import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Dhol",
      description:"A movie of mystery hidden in music equipment.",
      creator:"Rohit Shetty",
      imgURL:"http://4.bp.blogspot.com/-EZW9AbiHYv8/TcU6TMpUexI/AAAAAAAABfk/_x4IXylyKuI/s1600/still11.jpg",
      type:"Comedy"
    });
    this.contentList.addContent({
      id: 1,
      title: "Openheimer",
      description:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      creator:"Christopher Nolar",
      imgURL:"https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg",
      type:"Drama"
    });
    this.contentList.addContent({
      id: 2,
      title: "Sholay",
      description:"Historical movie with star actors.",
      creator:"Ramesh Sippy",
      imgURL:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZu5Uyspc49EPwn1VSpkbJA7OgS3oXwkZ6eLqnZLM5oqsRfrExikbmQHtSP2HidV9n_gPPZZghrhouagxQIuAUOEHYDWtUdzzoffpFIsrCnpK_BcG2-UVvDD-LE7yAWFq0MUtK9owkWsctXTnXs-hhKa18RPA_pEOkanZMlN7AjZaIjR4pcYbZIGNg/s1280/Sholey%20Movie.jpg",
      type:"Thriller"
    });
  }
}