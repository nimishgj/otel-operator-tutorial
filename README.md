A simple tutorial to test the auto instumentaion of opentelemetry without a single line of code change in kubernetes using otel-operator

1. Create a kubernetes cluster
> If you want to use eks use this tutorial https://github.com/nimishgj/sample-applications/tree/main/aws/eks/ec2

2. Install cert-manager with the below command
```shell
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml
```

3. Create a namespace for the otel-operator to reside
```shell
k create ns opentelemetry-operator-system 
```

4. Install the actual otel-operator
```shell
helm install opentelemetry-operator open-telemetry/opentelemetry-operator \
--namespace opentelemetry-operator-system \
--set "manager.collectorImage.repository=ghcr.io/open-telemetry/opentelemetry-collector-releases/opentelemetry-collector-k8s"
```

5. Run the below commands to create a otel collector and a sample application in nodejs
> replace the image with the actual image url you build using the readme in the express folder
```shell
k apply -f otel-collector-yml
k apply -f sample-nodejs
```

That's fucking it you are done, go have a cup of coffee champ

## For the nerds

Here's how it works,

If you look at the sample-nodejs we are defining a custom resource
and in the app's deployment we are specifying the annotation to inject the auto insturmentation
so a init container will be run and some thing is done then the actual app will start
and a sidecar will be run along with the app if you notice it that will use the conf of the custom resource
to push things to the central otel collector we deployed using `otel-collector.yml` and then on puff....

That's all i know it uses `NODE_OPTIONS` to start the actual application so your applciation preformance maybe impacted.


