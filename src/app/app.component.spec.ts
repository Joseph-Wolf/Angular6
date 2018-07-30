import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
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
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Heroes');
  }));

  describe('Render', () => {
    let compiled;

    beforeEach(async(() => {
      compiled = fixture.debugElement.nativeElement;
    }));

    it('should render title in a h1 tag', async(() => {
      let expectedText = 'Welcome to Heroes!';
      let element = compiled.querySelector('.title');
      expect(element.textContent).toContain(expectedText);
    }));

    it('should render the messages', async(() => {
      let element = compiled.querySelector('app-messages');
      expect(element).toBeTruthy();
    }));

    it('should render router', async(() => {
      let element = compiled.querySelector('router-outlet');
      expect(element).toBeTruthy();
    }));
  });
});
