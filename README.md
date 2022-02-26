## Getting Started
First, run the development server:

```bash
cd jearl.io
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding posts
create a new md file under `{project}/data/posts`, the title convention is to replace any spaces with - but is not required as the title is pulled from the front-matter. front-matter is required to propery pass metadata as static props example below.
 
```yml
---
title: 'hello friends'
icon: '👋'
excerpt: 'First post'
date: '2020-03-16T05:35:07.322Z'
---
```

everything after the front matter will be processed as md and used to display the page

## editing about page
the about page is a md file located under _profiles. it also parses yaml formated front-matter in order to add metadata, example below.

```yml
---
date: '2020-03-16T05:35:07.322Z'
excerpt: 'hello friends, here we grow'
username: 'whattheearl'
name: 'jonathan earl'
picture: '/assets/profile/whattheearl.jpg'
---
```