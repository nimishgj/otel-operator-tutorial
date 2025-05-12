to build and push to ecr use the below command

```shell
docker buildx build --platform linux/amd64,linux/arm64 -t public.ecr.aws/w7v4m5h1/sample-nodejs:latest --push .
```
