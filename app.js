
const express = require('express')
const expressOasGenerator = require('express-oas-generator');
const app = express()
/** place handleResponses as the very first middleware */
expressOasGenerator.handleResponses(app, {});
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/** place handleRequests as the very last middleware */
expressOasGenerator.handleRequests();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
