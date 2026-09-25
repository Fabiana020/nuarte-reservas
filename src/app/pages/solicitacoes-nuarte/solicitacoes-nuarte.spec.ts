import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacoesNuarte } from './solicitacoes-nuarte';

describe('SolicitacoesNuarte', () => {
  let component: SolicitacoesNuarte;
  let fixture: ComponentFixture<SolicitacoesNuarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesNuarte],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesNuarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
