import { AdvancedModule } from './advanced.module';

describe('AdvancedModule', () => {
  let advancedModule: AdvancedModule;

  beforeEach(() => {
    advancedModule = new AdvancedModule();
  });

  it('should create an instance', () => {
    expect(advancedModule).toBeTruthy();
  });
});
