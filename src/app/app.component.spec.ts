import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;   
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
  }));
  describe('Render', () => {
    let compiled;

    beforeEach(async(() => {
      compiled = fixture.debugElement.nativeElement;
    }));
  it('should render title in a h1 tag', async(() => {
    let expectedText = 'Welcome to app!';
    let element = compiled.querySelector('.title');
    expect(element.textContent).toContain(expectedText);
  }));
  it('should render the heros tab', async(() => {
    let element = compiled.querySelector('app-heroes');
    expect(element).toBeTruthy();
  }));
  });
});
