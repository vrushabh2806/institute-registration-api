# Institute Registration API

## Overview
The Institute Registration API is a Node.js application designed to facilitate the registration process for various types of educational institutes, including schools, colleges, playhouses, and competitive exam centers. The API allows users to select their institute type, provide relevant details, and store this information in a database.

## Features
- **Institute Type Selection**: Users can register different types of institutes.
- **Dynamic Board and Class Selection**: For schools, users can select education boards, mediums, class categories, standards, and subjects.
- **Flexible Registration Flow**: Different registration flows for schools, colleges, playhouses, and competitive exam centers.
- **Admin Management**: Admin functionalities to manage boards, mediums, class categories, standards, and subjects.

## Project Structure
```
institute-registration-api
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── registrationController.js
│   │   └── adminController.js
│   ├── routes
│   │   ├── registrationRoutes.js
│   │   └── adminRoutes.js
│   ├── models
│   │   ├── institute.js
│   │   ├── school.js
│   │   ├── college.js
│   │   ├── competitiveExamCenter.js
│   │   ├── board.js
│   │   ├── medium.js
│   │   ├── classCategory.js
│   │   ├── standard.js
│   │   ├── subject.js
│   │   └── user.js
│   ├── db
│   │   └── schema.sql
│   └── utils
│       └── db.js
├── package.json
├── README.md
└── .env
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd institute-registration-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up your environment variables in the `.env` file.

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Use Postman or any API client to interact with the API endpoints.

## API Endpoints
- **Registration**
  - POST `/api/register/school`
  - POST `/api/register/college`
  - POST `/api/register/exam-center`

- **Admin**
  - POST `/api/admin/board`
  - GET `/api/admin/boards`
  - POST `/api/admin/medium`
  - GET `/api/admin/mediums`
  - POST `/api/admin/class-category`
  - GET `/api/admin/class-categories`
  - POST `/api/admin/standard`
  - GET `/api/admin/standards`
  - POST `/api/admin/subject`
  - GET `/api/admin/subjects`

## Database Schema
Refer to `src/db/schema.sql` for the SQL schema used to create the necessary tables in the database.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.