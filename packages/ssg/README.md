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
# edit mdxx-ssg.json for you

# create new page
npm run new-page
# edit docs/[current-date].mdx

# create new page with slug
npm run new-page foo
# edit docs/foo.mdx

# Preview
npm run dev

# Deploy
npm run build
npm run deploy
```
