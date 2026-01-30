import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have username variable with value 'Monica Geller'", () => {
    const username = component.username;
    expect(username).toEqual('Monica Geller');
  });

  it('should render username in the heading element', () => {
    const h1Element = de.query(By.css('#greeting'));
    expect(h1Element.nativeElement.textContent).toContain(
      'Hello Monica Geller',
    );
  });
});
