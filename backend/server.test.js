const request = require('supertest');
const app = require('./server');

describe('Hello CI/CD Backend API', () => {
  
  describe('Health Check', () => {
    it('should return healthy status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body.status).toBe('healthy');
      expect(response.body.timestamp).toBeDefined();
      expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Hello Endpoint', () => {
    it('should return hello message', async () => {
      const response = await request(app)
        .get('/api/hello')
        .expect(200);
      
      expect(response.body.message).toBe('Hello, CI/CD World!');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('Info Endpoint', () => {
    it('should return server information', async () => {
      const response = await request(app)
        .get('/api/info')
        .expect(200);
      
      expect(response.body.server).toBe('Hello CI/CD Backend');
      expect(response.body.version).toBe('1.0.0');
      expect(response.body.node_version).toBeDefined();
    });
  });

  describe('Echo Endpoint', () => {
    it('should echo the posted data', async () => {
      const testData = { test: 'data', number: 42 };
      
      const response = await request(app)
        .post('/api/echo')
        .send(testData)
        .expect(200);
      
      expect(response.body.message).toBe('Echo endpoint');
      expect(response.body.received).toEqual(testData);
    });
  });

  describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app)
        .get('/api/unknown')
        .expect(404);
      
      expect(response.body.error).toBe('Route not found');
      expect(response.body.path).toBe('/api/unknown');
    });
  });
});