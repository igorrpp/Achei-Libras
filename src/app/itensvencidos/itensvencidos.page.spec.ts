import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItensvencidosPage } from './itensvencidos.page';

describe('ItensvencidosPage', () => {
  let component: ItensvencidosPage;
  let fixture: ComponentFixture<ItensvencidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensvencidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItensvencidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
