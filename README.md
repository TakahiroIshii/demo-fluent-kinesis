# demo-fluent-kinesis

## install yarn and packages

```
npm install --global yarn
yarn
```

## set up
Make sure to create kinesis firehose first.
Also update td-agent.conf file with proper stream name and region.

```
# get fluentd agent
yarn fluent:get
# get fluent plugin for kinesis
yarn fluent:kinesis
# edit td-agent.conf file and copy it to actual config file
yarn fluent:update
# get instance id
export INSTANCEID=$(curl 169.254.169.254/latest/meta-data/instance-id/)
# pass pre-made role and associate it to cloud9 instance
ROLENAME=your-role-name yarn associate
```

## start

```
yarn fluent:start
yarn start NUMBER
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
