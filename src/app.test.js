const app = require('./server')
const request = require('supertest') 
describe('Testing Endpoints', () => {
  it('should create a new pizza', async () => {
    const res = await request(app)
      .post('/pizza/')
      .send({
        name: 'Pepperonni',
        description: 'Pizza with pepperonni'
      })
    expect(res.statusCode).toEqual(201)
  }, 2000)
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
