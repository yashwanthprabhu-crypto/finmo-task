## Project setup

```bash
$ npm install
```

## API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Table of Contents
- [Parking Slot Management](#parking-slot-management)
- [Illegal Parking Tracking](#illegal-parking-tracking)
- [Error Handling](#error-responses)

### Parking Slot Management

#### Create Parking Slot
- **POST** `/parking-slots`
- **Description**: Create a new parking slot
- **Request Body**:
  ```json
  {
    "slotNumber": "string",
    "location": "string",
    "status": "available|occupied",
    "type": "regular|handicap|electric"
  }
  ```
- **Response**: Returns created parking slot details

#### Get All Parking Slots
- **GET** `/parking-slots`
- **Description**: Retrieve all parking slots
- **Query Parameters**:
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of items per page
  - `status` (optional): Filter by status
  - `type` (optional): Filter by type
- **Response**: Returns paginated list of parking slots

#### Get Parking Slot by ID
- **GET** `/parking-slots/:id`
- **Description**: Retrieve specific parking slot details
- **Response**: Returns parking slot details

#### Update Parking Slot
- **PUT** `/parking-slots/:id`
- **Description**: Update parking slot information
- **Request Body**:
  ```json
  {
    "status": "available|occupied",
    "type": "regular|handicap|electric"
  }
  ```
- **Response**: Returns updated parking slot details

#### Delete Parking Slot
- **DELETE** `/parking-slots/:id`
- **Description**: Remove a parking slot from the system
- **Response**: Returns success message

### Illegal Parking Tracking

#### Report Illegal Parking
- **POST** `/illegal-parking`
- **Description**: Report an illegally parked vehicle
- **Request Body**:
  ```json
  {
    "vehicleNumber": "string",
    "location": "string",
    "description": "string",
    "photoEvidence": "string (base64)"
  }
  ```
- **Response**: Returns created report details

#### Get Illegal Parking Reports
- **GET** `/illegal-parking`
- **Description**: Retrieve all illegal parking reports
- **Query Parameters**:
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of items per page
  - `status` (optional): Filter by status (pending|resolved)
- **Response**: Returns paginated list of reports

### Error Responses

All endpoints may return the following error responses:

- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side error

### Contact

For any queries regarding the API, please contact:
- Email: support@parkingapi.com
- Phone: +1 (555) 123-4567

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

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

