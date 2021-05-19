# demo-fluent-kinesis

## install yarn and packages

```
npm install --global yarn
yarn
```

## fluentd agent

fluentd agent for Amazon Linux

### td-agent 4

```
curl -L https://toolbelt.treasuredata.com/sh/install-amazon2-td-agent4.sh | sh
```

## get fluent-plugin-kinesis

```
sudo td-agent-gem install fluent-plugin-kinesis
```

## run fluentd agent

```
sudo service td-agent start
sudo service td-agent stop
or
sudo td-agent -c /etc/td-agent/td-agent.conf
```

## edit fluentd agent config

```
sudo vim /etc/td-agent/td-agent.conf
```
## start 

```
yarn start NUMBER
```
