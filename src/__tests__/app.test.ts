/// <reference types="jest" />
import request from 'supertest';
import { app } from '../app';

describe('GET /', () => {
  it('should return status ok and correct message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'CI/CD Masterclass API',
      status: 'ok',
    });
  });
});

describe('GET /health', () => {
  it('should return healthy status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });

  it('should respond with JSON content type', async () => {
    const response = await request(app).get('/health');

    expect(response.headers['content-type']).toMatch(/json/);
  });
});

describe('GET /nonexistent', () => {
  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/nonexistent');

    expect(response.status).toBe(404);
  });
});
