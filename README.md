<br>
<p align="center">
  <a href="https://www.case.app">
    <img alt="CASE" src="https://case.app/assets/images/logo-black.svg" height="40px" />
  </a>
</p>

<p align='center'>
<strong>A complete backend without leaving your IDE</strong>
<br><br>
  <a href="https://www.npmjs.com/package/@casejs/case" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40casejs%2Fcase">
  </a>
  <a href="https://www.codefactor.io/repository/github/casejs/case" target="_blank">
    <img alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/casejs/case">
  </a>
  <a href="https://discord.com/invite/FepAked3W7" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/1089907785178812499?label=discord">
  </a>
  <a href="https://opencollective.com/casejs"  target="_blank">
    <img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us">
  </a>
  <a href=https://github.com/casejs/CASE/blob/develop/LICENSE" target="_blank">
    <img alt="Licence MIT" src="https://img.shields.io/badge/licence-MIT-green">
  </a>
  <br>
</p>

<img  src="./docs/assets/images/cat-list.png" alt="CASE App" width="100%" style="border: 1px solid #dedede; margin-bottom: 2rem" />

## What is CASE ?

CASE is a Typescript lightweight **BaaS (Backend As A Service)** requiring minimal coding.

It provides a complete backend to your client app without the hassle that comes with it.

## Key features

- ⚡ **Instant backend with DB, REST API and Admin panel** without any configuration
- 🧠 **Smart SDK** to import in your favorite JS front-end
- 🛠️ **Essential features** like Auth, Storage, Validation and Hooks

## Data-first

CASE follows a data-first approach: you describe your data using Typescript and the backend builds itself around it. Adding the few lines below generate the app in the screenshot above.

```js
// cat.entity.ts

@Entity()
export class Cat extends BaseEntity {
  @Prop()
  name: string

  @Prop({
    type: PropType.Enum,
    options: {
      enum: Breed
    }
  })
  breed: Breed

  @Prop({
    type: PropType.Number
  })
  age: number

  @Prop({
    type: PropType.Date
    label: 'Arriving date'
  })
  arrivingDate: Date

  @Prop({
    type: PropType.Relation,
    options: {
      entity: Owner
    }
  })
  owner: Owner
}
```

And allow the following code in your JS client built with your favorite stack:

```js
// Any file in your own client app.

import CaseClient from '@casejs/case-client'

const cs = new CaseClient()

await cs.login('users', 'user1@case.app', 'case')

const cats = await cs.from('cats').find()

const cats = await cs
  .from('cats')
  .where('breed = siamese')
  .andWhere('birthDate > 2020-01-01')
  .find()

const newCat = await cs.from('cats').create({
  name: 'Milo',
  age: 2
})

const fileUrl: string = await cs.from('cats').addFile(file)

await client.logout()
```

## Getting started

### Prerequisites

- [NodeJS](https://nodejs.org/en/) (**v16.14.0** or higher). The recommended version is **18.x**.

### Create your CASE project

Run the following on your terminal replacing `my-case-app` with your app's name:

```
npx create-case-app my-case-app
```

Then serve the app locally:

```
cd my-case-app
npm start
```

🎉 **Your backend is ready !**
<br>
<br>You can now:
<br> - See your **Admin panel** at http://localhost:4000
<br> - Use your **REST API** at http://localhost:4000/api

You can now go through the [docs](https://docs.case.app/) to build your next block.

## Community & Resources

- [Docs](https://docs.case.app/) - Learn CASE features
- [Discord](https://discord.gg/FepAked3W7) - Come chat with the CASE community
- [Dev.to](https://dev.to/casejs) - Stay tuned to CASE developments
- [Github](https://github.com/casejs/case/issues) - Report bugs and share ideas to improve the product.

## Contributors

Thanks to our first wonderful contributors !

<a href="https://github.com/casejs/CASE/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=casejs/CASE" />
</a>
