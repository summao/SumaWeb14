import { AppComponent } from "./app.component";

describe('WelcomeComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});