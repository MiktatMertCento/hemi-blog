import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {MongoClient, ObjectId} from 'mongodb'
import generalAxios from 'axios'
import readingTime from "reading-time";

const app = express()
const port = 3148
const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

const uri = 'mongodb+srv://miktat:miktatCENTO7@miktatcentoorg.3nauz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)
const axios = generalAxios.create({
    baseURL: "https://BlogBackend.miktatcento.repl.co",
});

app.get('/', (req, res) => {
    res.send({status: true})
})

app.get('/getArticles', async (req, res) => {
    try {
        const {authorId, id, limit, isDetailed, tagId} = req.body
        await client.connect()
        const articlesDb = client.db('blog')
        const articlesCol = articlesDb.collection('articles')
        const authorsCol = articlesDb.collection('authors')
        const tagsCol = articlesDb.collection('tags')

        const query = {}
        if (id) query._id = new ObjectId(id)
        if (authorId) query.authorId = authorId
        if (tagId) query.tagId = tagId

        const articles = await articlesCol
            .find(query)
            .limit(limit ?? 0)
            .sort({"createdDate": -1})
            .map(article => ({...article, articleContent: isDetailed ? article.articleContent : undefined, readingTime: isDetailed ? Math.floor(readingTime(article.articleContent).time / 60000)+1 : undefined}))
            .toArray();

        const articlesWithDetailedInfos = await Promise.all(articles.map(async article => {
            let articleWithDetailedInfos = {...article, authorId: undefined, tagId: undefined};
            articleWithDetailedInfos.author = await authorsCol.findOne({_id: new ObjectId(article.authorId)})
            articleWithDetailedInfos.tag = await tagsCol.findOne({_id: new ObjectId(article.tagId)})

            return articleWithDetailedInfos;
        }));

        const tagDetail = tagId ? await tagsCol.findOne({_id: new ObjectId(tagId)}) : undefined;

        res.status(200).send({status: true, articles: articlesWithDetailedInfos, tag: tagDetail})
    } catch (err) {
        console.log(err)
        res.status(500).send({
            status: false,
        })
    }
})

app.get('/getAuthorInfoWtihId', async (req, res) => {
    try {
        const {authorId} = req.body;
        if (authorId) {
            await client.connect()
            const blogDb = client.db('blog')
            const authorsCol = blogDb.collection('authors')
            //const articlesCol = blogDb.collection('articles')
            const foundAuthor = await authorsCol.findOne({_id: new ObjectId(authorId)})

            const authorArticles = (await axios.get('/getArticles', {data: {authorId:authorId}})).data.articles

            const publicAuthorInfos = {
                authorName: foundAuthor?.authorName,
                authorProfilePhoto: foundAuthor?.authorProfilePhoto,
                authorBiography: foundAuthor?.authorBiography,
                authorArticles: authorArticles
            }
            res.status(200).send({status: true, authorInfo: publicAuthorInfos})
        } else {
            res.status(500).send({status: false, message: "İstenilen yazar bilgileri girilmedi!"})
        }
    } catch (err) {
        res.status(404).send({status: false, message: "İstenilen yazar bulunamadı!"})
    }
})

app.listen(port, () => {
    console.log(`Site bu portta açıldı: ${port}`)
})
