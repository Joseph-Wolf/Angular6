import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
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

    it('should render the title', async(() => {
      let expectedText = 'Windstorm';
      let element = compiled.querySelector('.title');
      expect(element).toBeTruthy();
      expect(element.textContent).toContain(expectedText.toUpperCase());
    }));

    it('should render the id display', async(() => {
      let expectedText = '1';
      let element = compiled.querySelector('.id-display');
      expect(element).toBeTruthy();
      expect(element.textContent).toContain(expectedText);
    }));

    it('should render the name display', async(() => {
      let expectedText = 'Windstorm';
      let element = compiled.querySelector('.name-display input');
      expect(element).toBeTruthy();
      expect(element.value).toContain(expectedText);
    }));
  });

  it('should have a hero', async(() => {
    expect(component.hero).toBeTruthy();
    expect(component.hero.name).toEqual('Windstorm');
  }));

});
