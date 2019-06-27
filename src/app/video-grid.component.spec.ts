import { TestBed, async } from '@angular/core/testing';
import { VideoGridComponent } from './video-grid.component';

describe('VideoGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoGridComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VideoGridComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-board'`, () => {
    const fixture = TestBed.createComponent(VideoGridComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('video-board');
  });
});
