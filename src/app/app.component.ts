import {Component, OnInit} from '@angular/core';
import {ResultService} from './card-result/result.service';
import {IResult} from './interfaces/IResult';
import {IFilters} from './interfaces/IFilters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allTariffs: IResult[];
  isFiltered: IFilters = {byDownloads: false, byUploads: false, byPrice: false};

  constructor(private resultService: ResultService) {
    this.allTariffs = [];
    this.isFiltered = {byDownloads: false, byUploads: false, byPrice: false};
  }

  ngOnInit(): void {
    this.getResults();
  }

  /**
   * Get all results from the service
   */
  getResults() {
    this.resultService.getData().subscribe(
      res => {
        this.allTariffs = res;
      },
      err => console.log('err', err)
    );
  }

  /**
   * Apply Desc order for Downloads attribute for the given list
   * Assumed filter by number of downloads => highest first
   */
  filterByDownloads() {
    if (this.isFiltered.byDownloads === true) {
      this.isFiltered = {byDownloads: false, byUploads: false, byPrice: false};
      this.allTariffs.sort((a, b) => (a.downloads > b.downloads) ? 1 : ((b.downloads > a.downloads) ? -1 : 0));
    } else {
      this.isFiltered = {byDownloads: true, byUploads: false, byPrice: false};
      this.allTariffs.sort((a, b) => (a.downloads < b.downloads) ? 1 : ((b.downloads < a.downloads) ? -1 : 0));
    }
  }


  /**
   * Apply Desc order for Uploads attribute for the given list
   * Assumed filter by number of uploads => highest first
   */
  filterByUploads() {
    if (this.isFiltered.byUploads === true) {
      this.isFiltered = {byDownloads: false, byUploads: false, byPrice: false};
      this.allTariffs.sort((a, b) => (a.uploads > b.uploads) ? 1 : ((b.uploads > a.uploads) ? -1 : 0));
    } else {
      this.isFiltered = {byDownloads: false, byUploads: true, byPrice: false};
      this.allTariffs.sort((a, b) => (a.uploads < b.uploads) ? 1 : ((b.uploads < a.uploads) ? -1 : 0));
    }
  }

  /**
   * Apply Asc order for Price attribute for the given list
   * Assumed filter by price as lowest first
   */
  filterByPrice() {
    if (this.isFiltered.byPrice === true) {
      this.isFiltered = {byDownloads: false, byUploads: false, byPrice: false};
      this.allTariffs.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    } else {
      this.isFiltered = {byDownloads: false, byUploads: false, byPrice: true};
      this.allTariffs.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    }
  }

}
