const request = require('supertest') 
const app = require('./server');

let server;

beforeAll(() => {
  server = app.listen(8080, () => {
    console.log('Server running on port 8080');
  });
});

afterAll((done) => {
  server.close(done);
});

describe('Testing Endpoints', () => {
  it('should create a new pizza', async () => {
    
    const pizza = {
      name: 'Pepperonni',
      description: 'Pizza with pepperonni'
    }
    const response = await request(app)
      .post('/pizza/')
      .send(pizza);

    expect(response.statusCode).toBe(201)
  })

  /* 
  describe('Test the POST /api/users endpoint', () => {
  test('It should create a new user', async () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app)
      .post('/api/users')
      .send(user);
    expect(response.statusCode).toBe(201);
  });
});
  */
  /* it('should fetch a single pizza', async () => {
    const pizzaId = 1;
    const res = await request(app).get(`/pizza/getOne/${pizzaId}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('pizza')
  }) */

  /* it('should fetch all pizzas', async () => {
    const res = await request(app).get('/pizza/getAll');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('pizza');
    expect(res.body.pizza).toHaveLength(1);
  }); */

  /* it('should update a pizza', async () => {
    const res = await request(app)
      .put('/pizza/update/1')
      .send({
        name: 'updated name',
        description: 'updated description',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('pizza');
    expect(res.body.pizza).toHaveProperty('name', 'description');
  }); */

  /* it('should delete a pizza', async () => {
    const res = await request(app).delete('/pizza/remove/1');
    expect(res.statusCode).toEqual(204);
  }); */

  /* it('should delete all pizzas', async () => {
    const res = await request(app).delete('/pizza/removeAll');
    expect(res.statusCode).toEqual(204);
  }); */
})
