# entrega_1_desafio_fullstack_backend

## Configuração  para rodar a aplicação
 criar um arquivo no do raiz desse diretorio chamado .env 
 e adicionar as seguintes valores. 

PGHOST: É o endereço do host ou o nome do host onde o banco de dados PostgreSQL está instalado.

PGPORT: É a porta que o PostgreSQL está escutando. 

PGUSER: É o nome do usuário que será usado para autenticar no banco de dados PostgreSQL. 

PGPASSWORD: É a senha do usuário que será usada para autenticar no banco de dados PostgreSQL. 

PGDATABASE: É o nome do banco de dados que será usado. 

NODE_ENV: É a variável de ambiente que indica o ambiente de execução do aplicativo (produção, desenvolvimento, teste, etc.), mas nessa aplicação valor pode ser deixado, vazio pois ela roda apenas localmente.

SECRET_KEY: É a chave secreta usada para assinar tokens de autenticação no aplicativo. (Pode ser qualquer coisa escrita)

PORT: É a porta na qual o aplicativo será executado.
        Ex.: http://localhost:3001,
             http://localhost:3002,
             http://localhost:3003,
                ...

## Comando para Instalar dependencias do projeto
```
"npm install"
``` 

## Comando para iniciar projeto 

```
"npm run dev"
```

e depois rodar os seguintes comando no terminal do diretorio

primeiro comando => npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts

segundo comando => npm run typeorm migration:run -- -d ./src/data-source

## POST

``` 
/register

request 

    {
        "name":"client", 
        "email":"client@gmail.com",
        "phone":"123454a3"
    }

response

    status - 201

    {
        "createdAt": "Mon Mar 27 2023 04:41:16 GMT-0300 (Brasilia Standard Time)",
        "phone": "123454a03",
        "email": "client@gmail.com",
        "name": "client",
        "id": "41c1abde-59e5-4908-91bb-8c480a201414"
    }


```

``` 
/login/client

request

    {
	    "email":"client@gmail.com"
    }

response

    status - 200

    {
	    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY2xpZW50QGdtYWlsLmNvbSIsImlhdCI6MTY3OTgwMjQ5NywiZXhwIjoxNjc5ODg4ODk3LCJzdWIiOiJhMmJkYzNjOC0yYTFhLTRlZDUtOGEwZC01OTA4NDI0YTViNWIifQ.EE2AhotOx6m_FSa5iP4l_4TVY01GsRhU9qMfKXLXfG4"
    }


```

``` 
/login/contact

request

    {
	    "email":"contacts@gmail.com"
    }

response

    status - 200


    {
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY29udGFjdHNAZ21haWwuY29tIiwiaWF0IjoxNjc5NjgzMzgxLCJleHAiOjE2Nzk3Njk3ODEsInN1YiI6Ijg2MjkzMjlhLTg3MjktNDE1YS1hNDE2LTVhM2E0NGRhMDllMyJ9.V7MxvHNwJpLCfnSufy1XoIeXVPnIF2NwcRwthqa2Aec"
    }

```

``` 
/register/contacts

request

    {
        "name":"contacts4", 
        "email":"contacts4@gmail.com",
        "phone":"123454333334"
    }

response

    status - 201

    {
        "name": "contacts4",
        "email": "contacts4@gmail.com",
        "phone": "123454333334",
        "client_": "a2bdc3c8-2a1a-4ed5-8a0d-5908424a5b5b",
        "id": "81d06f86-c96a-4af9-ae6b-0443a4c1c2d5",
        "is_active": true,
        "createdAt": "2023-03-26T03:49:01.872Z"
    }

```
## GET
``` 
/user

response

    status - 200

    {
        "id": "41c1abde-59e5-4908-91bb-8c480a201414",
        "name": "client",
        "email": "dad@gmail.com",
        "phone": "123454a03",
        "is_active": true,
        "is_client": true,
        "createdAt": "2023-03-27T07:41:16.800Z"
    }

```

``` 
/user/found/:email

params request

    /user/found/client@gmail.com

response

    status - 200

    {
        "id": "a2bdc3c8-2a1a-4ed5-8a0d-5908424a5b5b",
        "name": "client",
        "email": "client@gmail.com",
        "password": "$2a$10$lwniynXg2rP9WdihxiO0PuefgC.YNQfhTvxCa.sVRga2IlNY47zDe",
        "phone": "12345433312",
        "is_active": true,
        "is_client": true,
        "createdAt": "2023-03-22T14:11:12.540Z"
    }


```

``` 
/list/contacts

response

    status - 200

    [
        {
            "id": "8629329a-8729-415a-a416-5a3a44da09e3",
            "name": "contacts2",
            "email": "contacts@gmail.com",
            "phone": "123454333",
            "is_active": true,
            "createdAt": "2023-03-22T15:07:57.375Z"
        },
        ...
    ]

```

``` 
/list/contact/:uuid

params request 

    /list/contact/8629329a-8729-415a-a416-5a3a44da09e3

response

    status - 200

    {
	    "id": "8629329a-8729-415a-a416-5a3a44da09e3",
	    "name": "contacts2",
	    "email": "contacts@gmail.com",
	    "phone": "123454333",
	    "is_active": true,
	    "createdAt": "2023-03-22T15:07:57.375Z"
    }

```


## PACTH

``` 
/user

request

    {
	    "name": "client"
    }

response

    status - 200

    {
	    "createdAt": "Mon Mar 27 2023 04:41:16 GMT-0300 (Brasilia Standard Time)",
	    "phone": "123454a03",
	    "email": "dad@gmail.com",
	    "name": "client",
	    "id": "41c1abde-59e5-4908-91bb-8c480a201414"    
    }
```

``` 
/user/is_activate

resquest

    {
	    "email": "contacts1@gmail.com"
    }

response 

    status - 200

    {
	    "id": "dc1ec3d9-9a2d-433a-97d8-58f8c7c90b1e",
	    "name": "contacts1",
	    "email": "contacts1@gmail.com",
	    "phone": "123454333",
	    "is_active": true,
	    "createdAt": "2023-03-24T11:59:04.272Z"
    }

```


## DELETE


``` 
/user

response

    status 204

```