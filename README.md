This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This project is connected with [`this project`](https://github.com/LuthfanM/Hopcar-BE-Crud-Dashboard) to make it works. 

## Getting Started

You need to follow this instruction to make it works.
  - Make a copy of **.env.example** and rename it into **.env**
```bash
cp .env.example .env
npm install
```
Since we will be running our project in localhost, you need to change port in key `API` into something else (inside our .env file), match it with [`BE project`](https://github.com/LuthfanM/Hopcar-BE-Crud-Dashboard). For example if this project run in port 3000, you must not use the same port. You need to use the similar port like your back end project

  - You need to run back end project first to ensure data is ready to be loaded. Currently there is no event handling for mitigate such error
  - Run either one of these. Or if you pro enough, just check which script is correct at package.json
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech Stacks
Next JS - Antd Components
