import { Registrationstep1Module } from './registrationstep1.module';

describe('Registrationstep1Module', () => {
  let registrationstep1Module: Registrationstep1Module;

  beforeEach(() => {
    registrationstep1Module = new Registrationstep1Module();
  });

  it('should create an instance', () => {
    expect(registrationstep1Module).toBeTruthy();
  });
});
