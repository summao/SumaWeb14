import { FormBuilder } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fb: FormBuilder;

  beforeEach(() => {
    fb = new FormBuilder();
    component = new SignupComponent(fb);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});


