import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensVencidosFotoPage } from './itens-vencidos-foto.page';

describe('ItensVencidosFotoPage', () => {
  let component: ItensVencidosFotoPage;
  let fixture: ComponentFixture<ItensVencidosFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVencidosFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensVencidosFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
