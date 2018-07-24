import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render', () => {
    let compiled;
    let testHero = { id: 1, name: 'a' };

    beforeEach(async(() => {
      component.hero = testHero;
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    }));

    it('should display hero name in the header', async(() => {
      let selector = 'h2';
      let element = compiled.querySelector(selector);
      expect(element).toBeTruthy();
      expect(element.textContent).toContain(testHero.name.toUpperCase());
    }));

    it('should display hero Id', async(() => {
      let selector = '.hero-id';
      let element = compiled.querySelector(selector);
      expect(element).toBeTruthy();
      expect(element.textContent).toContain(testHero.id);
    }));

    it('should display hero name', async(() => {
      let selector = '.hero-name input';
      let element = compiled.querySelector(selector);
      expect(element).toBeTruthy();
      expect(element.value).toContain(testHero.name);
    }));

    it('should render only if hero is valid', async(() => {
      let elementSelector = '.hero-details';
      expect(compiled.querySelector(elementSelector)).toBeTruthy(); //Make sure it does exist

      component.hero = undefined; //Set the selectedHero
      fixture.detectChanges(); //Trigger update

      expect(compiled.querySelector(elementSelector)).toBeFalsy(); //Confirm that the element does not exist
    }));
  });
});
