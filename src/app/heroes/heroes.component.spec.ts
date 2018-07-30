import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('Render', () => {
    let compiled;

    beforeEach(async(() => {
      compiled = fixture.debugElement.nativeElement;
    }));

    it('should display a title', async(() => {
      let titleSelector = '.title';
      let element = compiled.querySelector(titleSelector);
      expect(element).toBeTruthy();
      expect(element.textContent).toBeTruthy();
    }));

    it('should list heros', async(() => {
      component.heroes = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' }
      ];
      fixture.detectChanges();

      let listItemsSelector = '.hero-list-item';
      let items = compiled.querySelectorAll(listItemsSelector); //Get the items
      expect(items).toBeTruthy(); //Confirm that something was found
      expect(items.length).toEqual(component.heroes.length); //confirm the number of list items
    }));
  });

  it('should have heroes', async(() => {
    expect(component.heroes).toBeTruthy();
    expect(component.heroes.length).toBeTruthy();
  }));
});
