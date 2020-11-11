# one-with-angular-api


https://onewithangularapp.azurewebsites.net/api/rebels

https://onewithangularapp.azurewebsites.net/api/rebels?id=11

https://onewithangularapp.azurewebsites.net/api/droids

https://onewithangularapp.azurewebsites.net/api/planets


## Azure Deployment

```bash
az login

az group create --name "onewithangulargroup" --location "East US"

az group deployment create --name OneWithAngularDeployment --resource-group onewithangulargroup --template-file azuredeploy.json --parameters @parameters.json
```

## Try It

[Free Azure Account](https://azure.microsoft.com/free/?WT.mc_id=onewithangularapi-github-jopapa)

[Try Azure Functions Playground](https://azure.microsoft.com/try/app-service/functions/?WT.mc_id=onewithangularapi-github-jopapa)
