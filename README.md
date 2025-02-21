## Project setup

```bash
$ npm install
```

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Table of Contents
- [Parking Management](#parking-management)
- [Error Handling](#error-responses)

### Parking Management

#### Create Parking Lot
- **POST** `/parking/create`
- **Description**: Create a new parking lot
- **Request Body**:
  ```json
  {
    "no_of_slot": "number"
  }
  ```
- **Response**: Returns created parking lot details with total slots

#### Add More Slots
- **PATCH** `/parking/parking_lot`
- **Description**: Add more slots to existing parking lot
- **Request Body**:
  ```json
  {
    "increment_slot": "number"
  }
  ```
- **Response**: Returns updated total slots

#### Park Car
- **POST** `/parking/park`
- **Description**: Park a car in the parking lot
- **Request Body**:
  ```json
  {
    "registration_number": "string",
    "color": "string"
  }
  ```
- **Response**: Returns allocated slot number

#### Get Registration Numbers by Color
- **GET** `/parking/registration_numbers/:color`
- **Description**: Get registration numbers of all cars of a specific color
- **Response**: Returns list of registration numbers

#### Get Slot Numbers by Color
- **GET** `/parking/slot_numbers/:color`
- **Description**: Get slot numbers of all cars of a specific color
- **Response**: Returns list of slot numbers

#### Clear Parking Slot
- **POST** `/parking/clear`
- **Description**: Clear a parking slot
- **Request Body**:
  ```json
  {
    "slot_number": "number"
  }
  ```
- **Response**: Returns freed slot details

#### Get Parking Status
- **GET** `/parking/status`
- **Description**: Get status of all occupied parking slots
- **Response**: Returns list of occupied slots with car details

### Error Responses

All endpoints may return the following error responses:

- **400 Bad Request**: Invalid input data or parking lot not initialized
- **500 Internal Server Error**: Server-side error

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

