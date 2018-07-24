import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
    expect(service.messages).toBeTruthy();  
    expect(service.add).toBeTruthy();
    expect(service.clear).toBeTruthy();
  }));

  it('should add a message', inject([MessageService], (service: MessageService) => {
  	let initialLength = service.messages.length;
  	service.add('test');
  	let finalLength = service.messages.length;
  	expect(finalLength).toEqual(initialLength + 1);
  });

  it('should clear messages', inject([MessageService], (service: MessageService) => {
  	service.add('test');
  	service.clear();
  	expect(service.messages.length).toEqual(0);
  });
});
