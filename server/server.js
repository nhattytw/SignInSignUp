require('dotenv').config({ path: './config/.env' })
const express = require('express')
const cors = require('cors')
const app = express()

// Parse application/json
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
}).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use`)
            process.exit(1)
      } else {
            console.error(err)
      }
})