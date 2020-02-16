import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
import { SearchItem } from 'src/app/interfaces/search-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchResult: Array<SearchItem>;

  search: string;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.searchResult = new Array<SearchItem>();
    this.search = '';
  }

  onSubmit() {
    return this.translationService.search(this.search).subscribe(response => {
      this.searchResult = response.data;
    });
  }

}
