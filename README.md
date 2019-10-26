# ractive-dynamodb-ui

100% client side [Ractive framework](https://ractive.js.org/)  based HTML GUI for AWS DynamoDB.

## Preview

[DEMO](https://awspilot.github.io/ractive-dynamodb-ui/demo/)

## Screenshot
![Screenshot](demo/screenshot1.png?raw=true "Screenshot")

## Usage

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
