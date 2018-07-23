import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent
      ],
      imports: [ FormsModule ]
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

    it('should render hero-details only if selectedHero is valid', async(() => {
      let elementSelector = '.hero-details';
      expect(compiled.querySelector(elementSelector)).toBeFalsy(); //Make sure it does not exist

      component.selectedHero = { id: 11, name: 'Mr. Nice' }; //Set the selectedHero
      fixture.detectChanges(); //Trigger update

      expect(compiled.querySelector(elementSelector)).toBeTruthy(); //Confirm that the element exists now
    }));

    it('should apply selectedHero class on correct list item', async(() => {
      let classSelector = '.selected'; //Class selector to look for
      component.heroes = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' }
      ]; //heroes
      expect(compiled.querySelector(classSelector)).toBeFalsy(); //Make sure nothing has the expected class

      component.selectedHero = component.heroes[0]; //Set the selectedHero
      fixture.detectChanges(); //Trigger update
      expect(compiled.querySelector(classSelector)).toBeTruthy(); //Make sure something has the expected class
    }));
  });

  it('should have heroes', async(() => {
    expect(component.heroes).toBeTruthy();
    expect(component.heroes.length).toBeTruthy();
  }));

  it('should set selectedHero', async(() => {
    expect(component.selectedHero).toBeFalsy();
    let testHero = { id: 11, name: 'Mr. Nice' };
    component.onSelect(testHero);
    expect(component.selectedHero).toBeTruthy();
    expect(component.selectedHero).toEqual(testHero);
  }));
});
