import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacoesProfessor } from './solicitacoes-professor';

describe('SolicitacoesProfessor', () => {
  let component: SolicitacoesProfessor;
  let fixture: ComponentFixture<SolicitacoesProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesProfessor],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
