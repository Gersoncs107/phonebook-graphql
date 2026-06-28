// test-subscription.js
const { createClient } = require('graphql-ws')
const ws = require('ws')

const client = createClient({ url: 'ws://localhost:4000', webSocketImpl: ws })

client.subscribe(
  { query: 'subscription { personAdded { name phone } }' },
  {
    next: (data) => console.log('recebido:', data),
    error: (err) => console.error('erro:', err),
    complete: () => console.log('completo'),
  }
)

console.log('Aguardando eventos... (rode uma mutation addPerson em outro terminal/aba)')