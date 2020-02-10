import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatAudioPlayerComponent } from './ngx-mat-audio-player.component';

describe('NgxMatAudioPlayerComponent', () => {
  let component: NgxMatAudioPlayerComponent;
  let fixture: ComponentFixture<NgxMatAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
