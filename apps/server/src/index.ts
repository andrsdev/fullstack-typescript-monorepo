import { PrismaClient, Prisma } from '@repo/db'

const prisma = new PrismaClient()
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (_, res) => {
  return res.json({ ok: true })
})

app.get('/users', async (_, res) => {
  const users = await prisma.user.findMany()
  return res.json({ users })
})

app.post('/users', async (req, res) => {
  const data = req.body

  try {
    await prisma.user.create({ data })
    return res.json({ message: 'User Created' })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log('Message')
      console.log(e.meta)
    }

    return res.json({ message: 'User not created' })
  }
})

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server API running on http://localhost:${port}`)
})
