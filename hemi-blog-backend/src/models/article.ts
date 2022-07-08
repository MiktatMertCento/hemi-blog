import { WithId, Document } from 'mongodb'

export default interface Article {
  _id: object
  authorId: string
  articleContent: string
  articleTitle: string
  //articleImage: string
}

export function convertMongoToTS(list: WithId<Document>[]) {
  return list.map((x) => {
    let test: Article = {
      _id: x._id,
      articleContent: x.articleContent,
      articleTitle: x.articleTitle,
      authorId: x.authorId,
    }
    return test;
  })
}
