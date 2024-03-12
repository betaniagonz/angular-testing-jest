import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    });
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  test('should be stablish the indicated client name', () => {
    component.onSetClient('Fernando');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    expect(codeDiv?.textContent).toContain('name');
    expect(codeDiv?.textContent).toContain('Fernando');
  })

  test('should be stablish the indicated client name when click the button', () => {
    const button = compiled.querySelector('button');
    button?.click();
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');
    expect(codeDiv?.textContent).toContain('name');
    expect(codeDiv?.textContent).toContain('Fernando');
  })

  test('should be delete the client if son emit onDeleteClient', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();

    const sonDebugElelent = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent: FatherSonComponent = sonDebugElelent.componentInstance;

    sonComponent.onDeleteClient.emit();
    expect( component.client ).toBeUndefined();
  })

  test('should be update the client if son emit onClientUpdated', () => {
    component.client = {
      id: 5,
      name: 'juan',
    };
    fixture.detectChanges();

    const sonDebugElelent = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent: FatherSonComponent = sonDebugElelent.componentInstance;

    sonComponent.onClientUpdated.emit({
      id: 10,
      name: 'pedro',
    });
    expect( component.client ).toEqual({
      id: 10,
      name: 'pedro',
    });
  })
});
