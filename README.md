# ractive-dynamodb-ui

100% client side [RactiveJS](https://ractive.js.org/)  based GUI for AWS DynamoDB.  

Intended to be used along with dynamodb-local that do not have a respectful counterpart of AWS Console  

## Preview

This demo runs in a docker container together with dynamodb-local  
and may sometimes crash due to low EC2 instance RAM.

[DEMO](https://awspilot.github.io/ractive-dynamodb-ui/demo/)

## Screenshot
![Screenshot](demo/screenshot1.png?raw=true "Screenshot")

## Usage (see demo folder)

```
	<dynamodb-ui region={{region}} accessKeyId={{k}} secretAccessKey={{s}} endpoint={{endpoint}}  />
```


## @todo
- [ ] UI
-  - [x] "Login" page with AWS Credentials
-  - [x] Table list
-  - [ ] Query editor
-  - [ ] SQL <-> JSON API convertor
-  - [ ] Query history / log
-  - [x] Table data
-  - [x] Item editor

- [ ] Tables
-  - [x] List
-  - [ ] Filter
-  - [x] Create
-  - [x] View details
-  - [x] Update
-  - [x] Delete

- [ ] Browse data
-  - [x] Table data
-  - [x] Show keys first
-  - [x] Delete Items
-  - [x] Next page
-  - [x] Show / hide columns
-  - [ ] Resize columns
-  - [x] Data Type
-  -  - [x] String
-  -  - [x] Number
-  -  - [x] Boolean
-  -  - [x] Null
-  -  - [x] Map
-  -  - [x] List
-  -  - [x] StringSet
-  -  - [x] NumberSet
-  -  - [x] Binary
-  -  - [x] undefined
-  - [ ] Item property formatting ( eg. timestamp -> date )
-  - [ ] Next page
- [x] Edit item
- [ ] Custom query
- [ ] Query history

- [ ] Tools
-  - [ ] Find all item attributes & attribute types
-  - [ ] Run a transform function on all items
-  - [ ] export create table as cloudformation
-  - [ ] show create table ( SQL )

## Similar projects (in no particular order)

- [aaronshaf/dynamodb-admin](https://github.com/aaronshaf/dynamodb-admin)
- [Arattian/DynamoDb-GUI-Client](https://github.com/Arattian/DynamoDb-GUI-Client)
- [deptno/dynamon](https://github.com/deptno/dynamon)
- [ieiayaobb/dynamoc](https://github.com/ieiayaobb/dynamoc)
- [YoyaTeam/dynamodb-manager](https://github.com/YoyaTeam/dynamodb-manager)
