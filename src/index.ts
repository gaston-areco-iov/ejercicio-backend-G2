import express from 'express'
import benefitRouter from './routes/sql/benefitRouter'
import coinRouter from './routes/sql/coinRouter'
import movementRouter from './routes/sql/movementRouter'
import clientRouter from './routes/sql/clientRouter'
import clientBalanceRouter from './routes/sql/clientBalanceRouter'
import movementDataRouter from './routes/sql/movementDataRouter'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

const app = express()

app.use(express.json())
app.use('/benefits', benefitRouter)
app.use('/coins', coinRouter)
app.use('/movements', movementRouter)
app.use('/clients', clientRouter)
app.use('/balances', clientBalanceRouter)
app.use('/movementdata', movementDataRouter)

const specs = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
