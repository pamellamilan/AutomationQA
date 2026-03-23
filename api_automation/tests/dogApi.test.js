const axios = require('axios');

const api = axios.create({
  baseURL: 'https://dog.ceo/api',
  timeout: 10000,
});

describe('Dog API - Testes Automatizados', () => {
  test('Deve listar todas as raças', async () => {
    const res = await api.get('/breeds/list/all');

    expect(res.status).toBe(200);
    expect(res.data.status).toBe('success');
    expect(res.data.message).toBeDefined();
    expect(typeof res.data.message).toBe('object');
    expect(Object.keys(res.data.message).length).toBeGreaterThan(0);
  });

  test('Deve retornar imagens de uma raça válida', async () => {
    const res = await api.get('/breed/hound/images');

    expect(res.status).toBe(200);
    expect(res.data.status).toBe('success');
    expect(Array.isArray(res.data.message)).toBe(true);
    expect(res.data.message.length).toBeGreaterThan(0);

    res.data.message.forEach((img) => {
      expect(img).toContain('http');
    });
  });

  test('Deve retornar uma imagem aleatória', async () => {
    const res = await api.get('/breeds/image/random');

    expect(res.status).toBe(200);
    expect(res.data.status).toBe('success');
    expect(typeof res.data.message).toBe('string');
    expect(res.data.message).toContain('http');
  });

  test('Não deve retornar imagens para raça inválida', async () => {
    await expect(api.get('/breed/invalidbreed/images')).rejects.toMatchObject({
      response: {
        status: 404,
        data: {
          status: 'error',
        },
      },
    });
  });
});