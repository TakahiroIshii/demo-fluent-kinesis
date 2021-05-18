# demo-fluent-kinesis

## install yarn
```
npm install --global yarn
```
## packages
```
yarn add -D @types/node fluent-logger nodemon prettier ts-node typescript
yarn add aigle
```

## fluentd agent
fluentd agent for Amazon Linux
### td-agent 4
```
curl -L https://toolbelt.treasuredata.com/sh/install-amazon2-td-agent4.sh | sh
```
### td-agent 3
```
curl -L https://toolbelt.treasuredata.com/sh/install-amazon2-td-agent3.sh | sh
```

## get fluent-plugin-kinesis
```
td-agent-gem install fluent-plugin-kinesis
```

## run fluentd agent
```
sudo td-agent -c /etc/td-agent/td-agent.conf
```

## edit fluentd agent config
```
sudo vim  /etc/td-agent/td-agent.conf
```

td-agent.conf
```td-agent.conf
<source>
  @type forward
  port 24226
</source>
<match demo-fluent-kinesis.**>
  @type kinesis_firehose
  delivery_stream_name fluentdFirehose 
  region us-east-1
</match>
```

