import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
    expect(service.getHeroes).toBeTruthy();
  }));

  it('should return heroes', inject([HeroService], (service: HeroService) => {
   expect(service.getHeroes).toBeTruthy();
  	let heroes = service.getHeroes();
  	expect(heroes).toBeTruthy();
  }));
});
