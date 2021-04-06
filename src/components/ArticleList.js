import Article from "./Article.js"

function ArticleList({posts}) {
    const articles = posts.map(function(post) {
        return <Article key ={post.id} title={post.title} preview={post.preview} date={post.date}/>
    })
    return (
        <main>
            {articles}
        </main>
    )
}
export default ArticleList