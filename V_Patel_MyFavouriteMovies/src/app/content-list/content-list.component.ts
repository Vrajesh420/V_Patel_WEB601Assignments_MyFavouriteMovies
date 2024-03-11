import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypereactPipe } from '../typereact.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { MovieService } from '../movie.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypereactPipe, FormsModule,HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  selectedContent?: Content;
  @Input() contentItems: Content[] = [];
  @Input() items:Content[] = [];

  constructor(private MovieService:MovieService, private messageService: MessageService){ }
  ngOnInit(): void {
    this.MovieService.getContentObs().subscribe(content => this.contentItems = content);
    this.MovieService.getContentById(3).subscribe(content=> this.items = content);
  }
  onSelect(content: Content):void{
    this.selectedContent = content;
    this.messageService.add(`Content itme at ${content.id}`);
    console.log("clicked");
  }
 
}