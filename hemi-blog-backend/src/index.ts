import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()
const port = 3148
var corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

const uri =
  'mongodb+srv://miktat:miktatCENTO7@miktatcentoorg.3nauz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)

app.get('/', (req, res) => {
  res.send({ status: true })
})

app.get('/articles', async (req, res) => {
  try {
    const { authorId, id, limit } = req.body
    await client.connect()
    const database = client.db('blog')
    const articles = database.collection('articles')

    const query: { [key: string]: string | number | ObjectId } = {}
    if (id) query._id = new ObjectId(id)
    if (authorId) query.authorId = authorId
    const article = await articles
      .find(query)
      .limit(limit ?? 0)
      .sort({ createdDate: -1 })
      .toArray()

    res.status(200).send({ status: true, articles: article })
  } catch (err) {
    res.status(404).send({
      status: false,
    })
  }
})

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body
    //await client.connect()
    //const database = client.db('blog')
    //const contact = database.collection('contact')

    if (!name) {
      res.status(400).send({
        status: false,
        message: 'İsim Girilmedi',
      })
      return
    }
    if (!email) {
      res.status(400).send({
        status: false,
        message: 'E-Mail Girilmedi',
      })
      return
    }
    if (!message) {
      res.status(400).send({
        status: false,
        message: 'Mesaj Girilmedi',
      })
      return
    }


    res.status(200).send({ status: true, message: 'Hepsi girildi' })

    /*
    const article = await articles
      .find(query)
      .limit(limit ?? 0)
      .sort({"createdDate": -1})
      .toArray()

    res.status(200).send({ status: true, articles: article })*/
  } catch (err) {
    res.status(404).send({
      status: false,
      err: err,
    })
  }
})

app.listen(port, () => {
  console.log(`Site bu portta açıldı: ${port}`)
})
