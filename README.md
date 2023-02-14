# frenlyfaces.xyz

This repository contains the frontend for the website of [Frenly Faces](https://frenlyfaces.xyz/).

## deploying this frontend

it is recommended to fork this repository and deploy with [vercel](https://vercel.com). this will allow you to easily add a custom domain or use a subdomain.

the following environment variables are required to be set on vercel before deploying:

```
REACT_APP_DISCORD_REDIRECT_URI=https://frenlyfaces.xyz/verify
REACT_APP_BLOCK_EXPLORER_URI=https://tuber.build
```

## development setup

clone the repository

```
git clone git@github.com:frenlyfaces/frenlyfaces.xyz
```

install the dependencies

```
npm i
```

create the required .env file

```
REACT_APP_DISCORD_REDIRECT_URI=http://localhost:3000/verify
REACT_APP_BLOCK_EXPLORER_URI=https://tuber.build
```
