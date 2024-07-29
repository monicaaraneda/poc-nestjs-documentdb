# POC DocumentDB

![Logo del Proyecto](./images/documentdb.png)

### Descripción

Prueba de concepto para migrar Mongo a DocumentDB.

### Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)
4. [Tecnologías](#tecnologías)
5. [Contribuciones](#contribuciones)
6. [Licencia](#licencia)
7. [Contacto](#contacto)

## Instalación

Instrucciones sobre cómo instalar tu proyecto. Puede incluir comandos de terminal y dependencias necesarias.


### Clonar el repositorio
```bash
git clone https://github.com/tuusuario/tu-repositorio.git
```

### Entrar al directorio del proyecto
```
cd tu-repositorio
```
### Instalar dependencias

```
npm install

.aws/credentials
[default]
aws_access_key_id = AKIAXC2ZDBBDTKF..
aws_secret_access_key = b6jQ9uABEiKX...

../lambda_nestjs/nestjs-documentdb  ~ main  > aws configure
AWS Access Key ID [****************JJQ3]:
AWS Secret Access Key [****************7wUC]:
Default region name [us-east-1]:

npm install

npm run build

sam build -t infra.yaml

sam deploy --guided
```


CloudFormation stack changeset
```
---------------------------------------------------------------------------------------------------
Operation                      LogicalResourceId              ResourceType                   Replacement
---------------------------------------------------------------------------------------------------
+ Add                          DocumentDBCluster              AWS::DocDB::DBCluster          N/A
+ Add                          DocumentDBInstance             AWS::DocDB::DBInstance         N/A
+ Add                          DocumentDBSecurityGroup        AWS::EC2::SecurityGroup        N/A
+ Add                          DocumentDBSubnetGroup          AWS::DocDB::DBSubnetGroup      N/A
+ Add                          NestjsDocumentDBFunctionApiP   AWS::Lambda::Permission        N/A
+ Add                          NestjsDocumentDBFunctionRole   AWS::IAM::Role                 N/A
+ Add                          NestjsDocumentDBFunction       AWS::Lambda::Function          N/A
+ Add                          ServerlessRestApiDeploymente   AWS::ApiGateway::Deployment    N/A
+ Add                          ServerlessRestApiProdStage     AWS::ApiGateway::Stage         N/A
+ Add                          ServerlessRestApi              AWS::ApiGateway::RestApi       N/A
---------------------------------------------------------------------------------------------------
```

CloudFormation outputs from deployed stack
```
----------------------------------------------------------------------------------------------------------------------------
Outputs
----------------------------------------------------------------------------------------------------------------------------
Key                 DocumentDBClusterEndpoint
Description         DocumentDB Cluster Endpoint
Value               documentdb-cluster.cluster-cnw2o40m2v0e.us-east-1.docdb.amazonaws.com

Key                 NestjsDocumentDBApi
Description         API Gateway endpoint URL for Prod environment
Value               https://ihq7873uh3.execute-api.us-east-1.amazonaws.com/Prod/
----------------------------------------------------------------------------------------------------------------------------
```

## Uso

### Descargue el certificado de entidad de certificación (CA) de Amazon DocumentDB necesario para autenticarse en su clúster

```shell
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```
### Conectar a este clúster con el shell mongo

```shell
mongo --ssl --host documentdb-cluster.cluster-cnw2o40m2v0e.us-east-1.docdb.amazonaws.com:27017 --sslCAFile global-bundle.pem --username dbadmin --password Password123
```
### Conectar a este clúster con una aplicación

```shell
mongodb://dbadmin:Password123@documentdb-cluster.cluster-cnw2o40m2v0e.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false
```