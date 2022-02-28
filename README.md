# Artifact for Basic Web Server with Typescript + Express + cors + dotenv

## Install Dependencies

```bash
npm i express cors dotenv
```

## Install Dev Dependencies

```bash
npm i -D typescript ts-node-dev 
npm i -D @types/node @types/express @types/cors
```

## Add morgan middleware

```bash
npm i morgan
npm i -D @types/morgan
```

## Configure Typescript

```bash
npx tsc --init
```

```json
{ 
  "rootDir": "./src",
  "outDir": "./dist"
}
```

## Create docker images

- Dockerfile
- .dockerignore

```bash
docker build -t demo-node-16-ts .
```

## Run docker images

```bash
docker run -it -p 4000:3000 demo-node-16-ts
```

```bash
docker run -it -e PORT=5000 -p 5001:5000 demo-node-16-ts
```
