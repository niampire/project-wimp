import { FormGroupModule } from './form-group.module';

describe('ReactiveFormsGroupModule', () => {
  let formGroupModule: FormGroupModule;

  beforeEach(() => {
    formGroupModule = new FormGroupModule();
  });

  it('should create an instance', () => {
    expect(FormGroupModule).toBeTruthy();
  });
});
