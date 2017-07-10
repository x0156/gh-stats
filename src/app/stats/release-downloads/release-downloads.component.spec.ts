import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDownloadsComponent } from './release-downloads.component';

describe('ReleaseDownloadsComponent', () => {
  let component: ReleaseDownloadsComponent;
  let fixture: ComponentFixture<ReleaseDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
