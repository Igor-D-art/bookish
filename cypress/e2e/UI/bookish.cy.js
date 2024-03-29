import axios from 'axios';

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Application', function () {

  before(() => {
  return axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch((err) => err);
  });

  beforeEach(() => { 
    const books = [
      { 'name': 'Refactoring', 'id': 1 },
      { 'name': 'Domain-driven design', 'id': 2 },
      // { 'name': 'Building Microservices', 'id': 3 }
    ]
    return books.map(item =>
      axios.post('http://localhost:8080/books', item,
      { headers: { 'Content-Type': 'application/json' } }
      )
    )
  })

  afterEach(() => {
  return axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch(err => err);
  })

  it('Visits the bookish', function () {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })


  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map(book => book.querySelector('h2').innerHTML);
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})