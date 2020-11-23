import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensVencidosNovoPage } from './itens-vencidos-novo.page';

describe('ItensVencidosNovoPage', () => {
  let component: ItensVencidosNovoPage;
  let fixture: ComponentFixture<ItensVencidosNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVencidosNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensVencidosNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
