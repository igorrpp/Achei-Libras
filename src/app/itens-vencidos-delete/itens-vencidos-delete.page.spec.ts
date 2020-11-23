import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensVencidosDeletePage } from './itens-vencidos-delete.page';

describe('ItensVencidosDeletePage', () => {
  let component: ItensVencidosDeletePage;
  let fixture: ComponentFixture<ItensVencidosDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensVencidosDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensVencidosDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
