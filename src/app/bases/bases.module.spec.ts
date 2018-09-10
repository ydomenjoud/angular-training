import { BasesModule } from './bases.module';

describe('BasesModule', () => {
  let basesModule: BasesModule;

  beforeEach(() => {
    basesModule = new BasesModule();
  });

  it('should create an instance', () => {
    expect(basesModule).toBeTruthy();
  });
});
