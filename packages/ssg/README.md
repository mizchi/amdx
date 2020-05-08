# MDXX SSG

## Features

- Build mdxx on next ssg
- Support AMP

## Create your own blog

```bash
# install node and npm
npx degit mizchi/mdxx/packages/ssg blog
cd blog
npm install
cp mdxx-ssg.json.example mdxx-ssg.json

# create new page
mdxx-ssg new:page

# with slug
mdxx-ssg new:page foo
# edit docs/foo.mdx

# Preview
npm run dev

# Deploy
npm run build
```

## deploy to netlify

Create your account for netlify

```
netlify deploy -d out --prod
```
