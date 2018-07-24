import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render', () => {
    let compiled;

    beforeEach(async(() => {
      component.messageService.add('hello');
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    }));

    it('should not display if there are no messages', async(() => {
      let selector = '*';
      expect(compiled.querySelector(selector)).toBeTruthy();
      component.messageService.clear();
      fixture.detectChanges();
      expect(compiled.querySelector(selector)).toBeFalsy();
    }));
    it('should have a clear button', async(() => {
      let selector = 'button.clear';
      expect(compiled.querySelector(selector)).toBeTruthy();
    }));
    it('should display messages', async(() => {

    }));
  });
});
