const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleStubList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },

  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('Testando os endopoins de "/people"', function () {
  it('Testando o cadastro de uma pessoa', async function () {
    //⚠️ Atenção: o fato de estarmos colocando um objeto dentro de um array nos testes de integração é para garantir que o retorno do stub tenha o mesmo formato do retorno das funções do mysql2.
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai.request(app).post('/people').send({
      firstName: 'Luke',
      lastName: 'Skywalker',
      email: 'luke.skywalker@trybe.com',
      phone: '851 678 4453',
    });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Pessoa cadastrada com sucesso com o id 42',
    });
  });

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleStubList]);
    const response = await chai.request(app).get('/people');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleStubList);
  });

  it('Testando a listam da pessoa com o "id: 1"', async function () {
    sinon.stub(connection, 'execute').resolves([peopleStubList[0]]);
    const response = await chai.request(app).get('/people/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleStubList[0]);
  });
  afterEach(sinon.restore);
});
