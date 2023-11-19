const mongoose = require('mongoose')

main()
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to-do-list')

}