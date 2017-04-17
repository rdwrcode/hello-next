Hello Next.js

## setup
Credit goes to [learn nextjs](https://learnnextjs.com/).
Its original repo can be found [here](https://github.com/arunoda/learnnextjs-demo)

Before server part, run 
```
npm run dev
```

After server part added, run 
```
npm run server
```
which starts an express server.


```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```
One interesting point to note:
There is no need to import React any more. Both are imported by default.
Next.js use Webpack's [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) facility by default.

## Link from next/link
The link from index to about page is the client-side navigation. 
The action takes place in the browser, without making a request to the server.
Check out the network activities to verify.
```
fetch with common.js
xhr manifest.js
fetch with common.js
```
Link does all the [location.history](https://developer.mozilla.org/en-US/docs/Web/API/History_API) handling.

## Styling the Link
```
<Link href="/about">
  <a style={{ fontSize: 20, color: '#FF0000' }}>About Page</a>
</Link>
```
The style is an object.

## Link is a HOC (higher order component)
Both <a> and <button> works inside Link.

## Shared components

## Route mask
Change the following
``` 
  <Link href={`/post?title=${props.title}`}>
```
to
```
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
```
Then before in the browser, it shows the following when naviagting to each post
```
  http://localhost:3000/post?title=hello%20nextjs
```
now you got this:
```
  http://localhost:3000/p/hello-nextjs
```
It is OK to go from index page to each post. Still client-sdie only. 
But if request the post directly, for example, 
```
http://localhost:3000/p/hello-nextjs
```
You got a 404 because the server has only index.js and post.js, and no p/hello-next.js.

## Custom server
```
npm install --save express
```

## Fecthing data
```
npm i -S isomorphic-unfetch
```

Instead of the following in index.page:
```
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My First Blog</h1>
    <ul>
      <PostLink id='hello-nextjs' title='Hello Next.js'/>
      <PostLink id='learn-nextjs' title='Learn Next.js'/>
      <PostLink id='deploy-nextjs' title='Deploy with Zeit'/>
    </ul>
  </Layout>
)
```
Check out the new implementation for async getInitialProps in index.js.

