import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test Invalid Arguments', () => {
  it('No Parameters', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid parameters');
  });
  it('Invalid Width', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=abc&height=100',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid parameters');
  });
  it('Invalid Height', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=-100',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid parameters');
  });
  it('Invalid filename', async () => {
    const response = await request.get(
      '/api/images?filename=fjordd&width=100&height=100',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid parameters');
  });
});

describe('Test Valid Arguments', () => {
  it('Valid Arguments', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=100',
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpeg');
  });
  it('Same Valid Arguments', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=100',
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpeg');
  });
  it('Different Sizes', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200',
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpeg');
  });
  it('Different Images', async () => {
    const response = await request.get(
      '/api/images?filename=icelandwaterfall&width=200&height=200',
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpeg');
  });
});
