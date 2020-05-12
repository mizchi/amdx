# MDXX SSG

## Features

- Build amdx on next ssg
- Support AMP

## Create your own blog

```bash
# install node and npm
npx degit mizchi/amdx/packages/ssg blog
cd blog
npm install
# cp amdxg.config.js

# create new page
amdxg new:page

# with slug
amdxg new:page foo
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
