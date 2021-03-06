# .NET5 with VueJS 2 (Quasar Framework) Blog Project

<img alt="Blog Gif" src="assets/Blog.gif"> </img>

**<h2 align="center">Features</p>**

## Backend
- .NET5
- Entity Framework Core – Code First 
- Response Wrappers
- Repository Pattern
- Automapper
- Pagination,Search
- Net Core Identity with JWT Authentication,Refresh Token
- Role Based Authorization
- Database Seeding
- Custom Exception Handling Middleware
- Complete User Management  (Register / Generate Token / Forgot Password / Confirmation Mail)
- Logging (Serilog),Memory Caching,Validation (Fluent Validation),Transaction,Exception,Performance with Aspects (Autofac,Castle.DynamicProxy)

## Frontend
- Vue2
- Vuelidate
- Vuex
- Route guards
- Dashboard

## How To Start Asp Net Core API

For asp net core, you must edit the appsettings.json file before typing these commands. 

```sh
dotnet ef migrations add CreateDatabase --context MySite2Context --project "DataAccess" --startup-project "WebAPI"
dotnet ef database update --context MySite2Context --project "DataAccess" --startup-project "WebAPI"
```
After these commands, a database will be created. 
Default Admin Account : 
```sh
Username : admin
Password : 159357456qW
```

## How To Start Quasar Project

Project requires [Quasar Framework](https://quasar.dev) 

You must edit  mysitequasar\src\store\siteinformation\state.js 
apiurl and defaultphoto url 

```sh
npm install
quasar dev
```



