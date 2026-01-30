describe('Just an Example', () => {
  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  it('should be truthy', () => {
    expect(true).toBeTruthy();
  });

  it("should match 'Hello World'", () => {
    let greet = 'Hello World!';
    expect(greet).toContain('Hello');
  });

  it("should include friends starting with letter 'R' ", () => {
    let friends = ['Ross', 'Rachel', 'Monica', 'Joey'];
    expect(friends).toContain('Rachel');
  });
});
