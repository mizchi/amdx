# AMDXG Blog template

## Create your own project

```
npx degit mizchi/mdxx/templates/blog blog
cd blog
npm install
# edit amdxg.config.json
```

## Write your article

```
amdxg new:page my-first-article
# edit docs/*-my-first-article.mdx
npm run dev # start server
```

## Deploy

```
## Build and deploy to netily
npm run build
npm i -g netlify-cli
netlify deploy -d out --prod
```

## LICENSE

MIT
