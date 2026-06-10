# KeshavSoft Price List Manager (v1.1.2)

## Overview

This is a web application built with **Express.js** and **lowdb** to manage **Stock Items** and **Price Lists**.

The main idea is that the application is **schema-driven**. Instead of writing forms, tables, and validations manually, everything is controlled through JSON schema files.

### Key Features

* Store data in JSON files using lowdb.
* Create tables and forms using schema files.
* Automatically generate UI from schema definitions.
* No separate database server required.
* Supports viewing and adding stock items.

---

## Technologies Used

* **Express.js** – Backend server
* **lowdb** – JSON file database
* **HTML, CSS, JavaScript** – Frontend
* **KSTable** and **KSHeader** – Custom UI components

---

## Project Structure

### Main Files

| File              | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `app.js`          | Starts the application and loads configuration |
| `server.js`       | Creates and runs the HTTP server               |
| `routes.js`       | Serves frontend files                          |
| `port.js`         | Handles port configuration                     |
| `configLoader.js` | Loads JSON configuration files                 |
| `config.json`     | Contains paths for data and schemas            |

---

### Config Folder

`Config/`

Contains application configuration files.

#### Schemas

`Config/Schemas/StockItems.json`

Defines:

* StockItemName
* StockItemReservedName
* StockItemType
* Validation rules
* Table column settings

---

### API Folder

`Api/`

Handles backend requests.

#### Endpoints

| Endpoint                     | Method | Purpose              |
| ---------------------------- | ------ | -------------------- |
| `/Api/v1/StockItems/ShowAll` | GET    | Get all stock items  |
| `/Api/v1/StockItems/Insert`  | POST   | Add a new stock item |

---

### Public Folder

`Public/`

Contains frontend files.

| Folder/File  | Purpose                   |
| ------------ | ------------------------- |
| `index.html` | Home page                 |
| `v1/`        | Read-only stock item list |
| `v2/`        | View and add stock items  |

---

### Scripts Folder

`Scripts/generateDataFromSchemas.js`

Creates empty JSON database files based on schema definitions.

Example:

```text
Data/StockItems.json
```
---

## How to Run

### 1. Install Packages

```bash
npm install
```

### 2. Create Database Files

```bash
node Scripts/generateDataFromSchemas.js
```

This creates:

```text
Data/StockItems.json
```

### 3. Start Server

```bash
npm start
```

Server starts at:

```text
http://localhost:3001
```

If `OPEN_BROWSER=true`, the browser opens automatically.

---

## Application URLs

| URL    | Purpose                   |
| ------ | ------------------------- |
| `/`    | Home page                 |
| `/v1/` | Read-only stock item list |
| `/v2/` | View and add stock items  |

### Examples

```text
http://localhost:3001/
http://localhost:3001/v1/
http://localhost:3001/v2/
```

---

## How It Works

1. Schema files are stored in `Config/Schemas/`.
2. Data is stored in JSON files inside `Data/`.
3. The API reads and writes data using lowdb.
4. Frontend pages call the API.
5. Tables and forms are generated automatically from schema definitions.

This allows you to add new tables by mainly updating schema files instead of writing large amounts of frontend and backend code.

## Documentation

This README was written and maintained by Hujur.