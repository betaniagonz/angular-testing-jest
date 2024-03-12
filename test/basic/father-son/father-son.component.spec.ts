import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    });
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('no buttons should appear', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('if there is a client, 2 buttons should appear', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('if there is a client, should match the snapshot', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  test('should emit onDeleteClient with delete button', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('should emit onClientUpdated with change id button', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'juan'
    });
  });

  test('should emit onChangeClient with the specific Id If there is a client', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);
    expect( component.onClientUpdated.emit ).not.toHaveBeenCalled();

    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();
    component.onChange(10);
    expect( component.onClientUpdated.emit ).toHaveBeenCalledWith({
      id: 10,
      name: 'juan'
    });
  });
});
