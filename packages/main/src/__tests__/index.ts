it('logs', () => {
  const log = jest.spyOn(console, 'log');
  require('../index.ts');
  expect(log).toHaveBeenCalled();
});
