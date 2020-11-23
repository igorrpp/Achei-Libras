import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensVencidosUpdatePage } from './itens-vencidos-update.page';

describe('ItensVencidosUpdatePage', () => {
  let component: ItensVencidosUpdatePage;
  let fixture: ComponentFixture<ItensVencidosUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVencidosUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensVencidosUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
