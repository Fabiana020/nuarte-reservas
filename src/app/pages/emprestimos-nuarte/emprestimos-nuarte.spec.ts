import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmprestimosNuarte } from './emprestimos-nuarte';

describe('EmprestimosNuarte', () => {
  let component: EmprestimosNuarte;
  let fixture: ComponentFixture<EmprestimosNuarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimosNuarte],
    }).compileComponents();

    fixture = TestBed.createComponent(EmprestimosNuarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
