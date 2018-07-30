import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { Hero } from './hero';

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

  it('should return a specific hero', inject([HeroService], (service: HeroService) => {
    let heroes: Hero[];
    service.getHeroes().subscribe(x => heroes = x);
    let expected = heroes[0];
    let actual: Hero;
    service.getHero(expected.id).subscribe(hero => actual = hero);
    expect(actual).toEqual(expected)
  }));
});
