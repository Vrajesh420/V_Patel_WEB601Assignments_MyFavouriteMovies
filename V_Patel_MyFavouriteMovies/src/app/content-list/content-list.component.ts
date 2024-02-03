import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Dhol",
        description:"A movie of mystery hidden in music equipment.",
        creator:"Rohit Shetty",
        imgURL:"http://4.bp.blogspot.com/-EZW9AbiHYv8/TcU6TMpUexI/AAAAAAAABfk/_x4IXylyKuI/s1600/still11.jpg",
        type:"Comedy",
        tags: ["Funny", "Superstars"]
      },
      {
        id: 1,
        title: "Openheimer",
        description:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        creator:"Christopher Nolar",
        imgURL:"https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg",
        type:"Drama",
        tags: ["Nuclear", "Real"]
      },
      {
        id: 2,
        title: "Sholay",
        description:"Historical movie with star actors.",
        creator:"Ramesh Sippy",
        imgURL:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZu5Uyspc49EPwn1VSpkbJA7OgS3oXwkZ6eLqnZLM5oqsRfrExikbmQHtSP2HidV9n_gPPZZghrhouagxQIuAUOEHYDWtUdzzoffpFIsrCnpK_BcG2-UVvDD-LE7yAWFq0MUtK9owkWsctXTnXs-hhKa18RPA_pEOkanZMlN7AjZaIjR4pcYbZIGNg/s1280/Sholey%20Movie.jpg",
        type:"Thriller",
        tags: ["Old", "History"]
      },
      {
        id: 3,
        title: "Don",
        description: "A movie of hilarious robbery.",
        creator: "Rohit Shetty",
        imgURL: "https://s-media-cache-ak0.pinimg.com/originals/e7/e9/b4/e7e9b41eb807b9a01fe35ce27cd4f326.jpg",
        type: "Action",
        tags: ["Suspense", "Action"]
      },
      {
        id: 4,
        title: "Ra-one",
        description: "Movie connected to indian super hero.",
        creator: "Abhishek",
        imgURL: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/96/98/d70504c0744311e689eddbce9487c672_1605257202446_l_medium.jpg",
        type: "Fictional",
        tags: ["Heroes", "Mystrey"]
      }
      
    ];
  }
 
}