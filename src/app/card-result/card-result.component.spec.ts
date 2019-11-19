import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultComponent } from './card-result.component';
import {MatCardModule} from '@angular/material';
import {IResult} from '../interfaces/IResult';
import {IFilters} from '../interfaces/IFilters';

describe('CardResultComponent', () => {
  let component: CardResultComponent;
  let fixture: ComponentFixture<CardResultComponent>;

    // [
    // {id: 1, tariffName: 'X-tariff', downloads: 123, uploads: 346, price: 236, benefits: ['benefit 1', 'benefit 2', 'benefit 3']},
    // {id: 2, tariffName: 'Xl-tariff', downloads: 234, uploads: 235, price: 235, benefits: ['benefit 1', 'benefit 2', 'benefit 3']},
    // {id: 3, tariffName: '2Xl-tariff', downloads: 345, uploads: 124, price: 347, benefits: ['benefit 1', 'benefit 2', 'benefit 3']}
  // ];
  const mockData: IResult = {
    id: 1,
    tariffName: 'X-tariff',
    downloads: 123,
    uploads: 346,
    price: 236,
    benefits: [
      'benefit 1', 'benefit 2', 'benefit 3'
    ]
  };
  const mockIndex = 1;
  const filters: IFilters = {byDownloads: false, byUploads: false, byPrice: false};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardResultComponent ],
      imports: [ MatCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render tariff-name', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#tariff-name').textContent)
      .toContain((mockIndex + 1) + '. ' + mockData.tariffName);
  });

  it('should render tariff-name', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#tariff-name').textContent)
      .toContain((mockIndex + 1) + '. ' + mockData.tariffName);
  });

  it('should render Downloads', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#downloads').textContent)
      .toContain(mockData.downloads);
  });

  it('should render Uploads', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#uploads').textContent)
      .toContain(mockData.uploads);
  });

  it('should render Price', () => {
    component.tariffData = mockData;
    component.tariffIndex = mockIndex;
    component.isFiltered = filters;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#price').textContent)
      .toContain(mockData.price);
  });
});
