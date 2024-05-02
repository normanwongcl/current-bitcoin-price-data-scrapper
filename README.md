<h2 align="left">
  <img src="https://github.com/normanwongcl/take-home-assessment-6580332443/blob/main/assets/ui-dashboard.png" alt="Dashboard UI" width="800px" />
  <br>
</h2>

## Prerequisite 
1. Make sure you have the following installed on your machine:
    - docker
    - node

## To run this project in docker
```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Create Database Table
```
npx prisma migrate dev
```
Table will be created in database

## View data model
```
npx prisma studio
```
View data model in web browser on localhost:5555

You can also verify it in mysql workbench in 127.0.0.1:3306

## Cron Job API
<h2 align="left">
  <img src="https://github.com/normanwongcl/take-home-assessment-6580332443/blob/main/assets/cron-job-api.png" alt="Cron Job API" width="800px" />
  <br>
</h2>

## Crypto Price API
<h2 align="left">
  <img src="https://github.com/normanwongcl/take-home-assessment-6580332443/blob/main/assets/cryptoprice-api-route.png" alt="Crypto Price API" width="800px" />
  <br>
</h2>
