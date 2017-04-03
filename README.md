# one-with-angular-api


https://rogue-one-123.azurewebsites.net/api/rebels

https://rogue-one-123.azurewebsites.net/api/rebels?id=11

https://rogue-one-123.azurewebsites.net/api/droids

https://rogue-one-123.azurewebsites.net/api/planets


## Azure Deployment

```bash
az login

az group create --name "onewithangulargroup" --location "East US"

az group deployment create --name OneWithAngularDeployment --resource-group onewithangulargroup --template-file azuredeploy.json --parameters @parameters.json
```

## Try It

[Free Azure Account](https://azure.microsoft.com/free/)

[Try Azure Functions Playground](https://azure.microsoft.com/try/app-service/functions/)
