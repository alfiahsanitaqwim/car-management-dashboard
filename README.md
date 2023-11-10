# car-management-dashboard

## Entity Relationship Diagram (ERD)

Explore the database schema using the [ERD](https://dbdiagram.io/d/Car-management-654d11e57d8bbd6465de1072).

## Car Types

### List All Car Types

**Method**: GET

```
/list/car-type
```

### Show One Car Type

**Method**: GET

```
/show/car-type/:id
```

### Create Car Type

**Method**: POST

```
/create/car-type
```

**Body:**
```json
{
  "name": "string"
}
```

### Update Car Type

**Method**: POST

```
/update/car-type/:id
```

**Body:**
```json
{
  "name": "string"
}
```

### Delete Car Type

**Method**: POST

```
/delete/car-type/:id
```

## Car Brands

### List All Car Brands

**Method**: GET

```
/list/car-brand
```

### Show One Car Brand

**Method**: GET

```
/show/car-brand/:id
```

### Create Car Brand

**Method**: POST

```
/create/car-brand
```

**Body:**
```json
{
  "name": "string"
}
```

### Update Car Brand

**Method**: POST

```
/update/car-brand/:id
```

**Body:**
```json
{
  "name": "string"
}
```

### Delete Car Brand

**Method**: POST

```
/delete/car-brand/:id
```

## Cars

### List All Cars

**Method**: GET

```
/list/car
```

### Show One Car

**Method**: GET

```
/show/car/:id
```

### Create Car

**Method**: POST

```
/create/car
```

**Body:**
```json
{
  "name": "string"
}
```

### Update Car

**Method**: POST

```
/update/car/:id
```

**Body:**
```json
{
  "name": "string"
}
```

### Delete Car

**Method**: POST

```
/delete/car/:id
```

## Customers

### List All Customers

**Method**: GET

```
/list/customer
```

### Show One Customer

**Method**: GET

```
/show/customer/:id
```

### Create Customer

**Method**: POST

```
/create/customer
```

**Body:**
```json
{
  "name": "string"
}
```

### Update Customer

**Method**: POST

```
/update/customer/:id
```

**Body:**
```json
{
  "name": "string"
}
```

### Delete Customer

**Method**: POST

```
/delete/customer/:id
```

---



## Request body and Response body examples

---


#### Example Request for Showing One Car Type

**Request:**
```http
GET /show/car-type/1
```

#### Example Response for Showing One Car Type

**Response:**
```json
{
  "id": 1,
  "name": "Sedan",
  "created_at": "2023-11-10T12:34:56Z",
  "updated_at": "2023-11-10T12:34:56Z"
}
```

#### Example Request for Creating Car Type

**Request:**
```http
POST /create/car-type
{
  "name": "SUV"
}
```

#### Example Response for Creating Car Type

**Response:**
```json
{
  "id": 2,
  "name": "SUV",
  "created_at": "2023-11-10T12:36:12Z",
  "updated_at": "2023-11-10T12:36:12Z"
}
```

#### Example Request for Updating Car Type

**Request:**
```http
POST /update/car-type/2
{
  "name": "SUV"
}
```

#### Example Response for Updating Car Type

**Response:**
```json
{
  "id": 2,
  "name": "SUV",
  "created_at": "2023-11-10T12:34:56Z",
  "updated_at": "2023-11-10T12:37:28Z"
}
```

### Delete Car

#### Example Request for Deleting Car Type

**Request:**
```http
POST /delete/car-type/3
```

#### Example Response for Deleting Car Type

**Response:**
```json
{
  "message": "Car type with ID 3 deleted successfully."
}
```

---

