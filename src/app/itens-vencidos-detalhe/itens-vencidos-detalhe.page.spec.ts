import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensVencidosDetalhePage } from './itens-vencidos-detalhe.page';

describe('ItensVencidosDetalhePage', () => {
  let component: ItensVencidosDetalhePage;
  let fixture: ComponentFixture<ItensVencidosDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVencidosDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensVencidosDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
