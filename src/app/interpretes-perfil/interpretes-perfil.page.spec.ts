import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterpretesPerfilPage } from './interpretes-perfil.page';

describe('InterpretesPerfilPage', () => {
  let component: InterpretesPerfilPage;
  let fixture: ComponentFixture<InterpretesPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretesPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterpretesPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
