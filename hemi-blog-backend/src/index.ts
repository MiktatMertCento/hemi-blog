import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {MongoClient, ObjectId} from 'mongodb'

const app = express()
const port = 3148
var corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

const uri =
    'mongodb+srv://miktat:miktatCENTO7@miktatcentoorg.3nauz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)

app.get('/', (req, res) => {
    res.send({status: true})
})

app.get('/getArticles', async (req, res) => {
    try {
        const {authorId, id, limit, isDetailed} = req.body
        await client.connect()
        const articlesDb = client.db('blog')
        const articlesCol = articlesDb.collection('articles')
        const authorsCol = articlesDb.collection('authors')
        const tagsCol = articlesDb.collection('tags')

        const query: { [key: string]: string | number | ObjectId } = {}
        if (id) query._id = new ObjectId(id)
        if (authorId) query.authorId = authorId
        const articles = await articlesCol
            .find(query)
            .limit(limit ?? 0)
            .sort({"createdDate": -1})
            .map(article => ({...article, articleContent: isDetailed ? article.articleContent : undefined}))
            .toArray();

        const articlesWithDetailedInfos = await Promise.all(articles.map(async article => {
            let articleWithDetailedInfos = {...article, authorId: undefined, tagId: undefined};
            articleWithDetailedInfos.author = await authorsCol.findOne({_id: new ObjectId(article.authorId)})
            articleWithDetailedInfos.tag = await tagsCol.findOne({_id: new ObjectId(article.tagId)})

            return articleWithDetailedInfos;
        }));

        res.status(200).send({status: true, articles: articlesWithDetailedInfos})
    } catch (err) {
        res.status(404).send({
            status: false,
        })
    }
})

app.get('/getAuthorInfoWtihId', async (req, res) => {

    try {
        const {authorId} = req.body
        if (authorId) {
            res.status(200).send("çalıştı")
            await client.connect()
            const blogDb = client.db('blog')
            const authorsCol = blogDb.collection('authors')


            res.status(200).send({status: true, articles: articlesWithDetailedInfos})
        } else {
            res.status(200).send({status: false, message: "İstenilen yazar bilgileri girilmedi!"})
        }
    } catch (err) {
        res.status(404).send({
            status: false,
        })
    }
})

app.listen(port, () => {
    console.log(`Site bu portta açıldı: ${port}`)
})
