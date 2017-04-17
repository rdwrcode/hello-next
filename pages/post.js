import Layout from '../comps/PageLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
  <Layout>
    <h1>{props.movie.Title}</h1>
    <p>{props.movie.Plot}</p>
    <img src={props.movie.Poster}/>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`)
  const movie = await res.json()

  console.log(`fetch movie ${movie.Title}`)
  return {movie}
}

export default Post

/*
const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the post content.</p>
  </div>
)

export default (props) => (
  <Layout>
    <Content url={props.url}/>
  </Layout>
)
*/
