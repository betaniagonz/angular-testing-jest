import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from '../../../src/app/basic/counter-route/counter-route.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  test('should have tne initial value on 0', () => {
    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [
        RouterTestingModule
      ]
    });

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have tne initial value of 100 in the route /counter/100', () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string){
            return ( param === 'initial' ) ? '100' : undefined;
          }
        }
      }
    }
    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockActivatedRoute
      }],
    });

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });

  test('should have tne initial value of 10 in the route /counter/100abc', () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string){
            return ( param === 'initial' ) ? '100abc' : undefined;
          }
        }
      }
    }
    TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockActivatedRoute
      }],
    });

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});
