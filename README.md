# Project Overview

I apologize for not completing the assessment. However, this is the best I could do given the time constraints, considering that I work a full-time job.

## Frontend

### Technologies Used

- **React**: Created using CRA (Create React App) template.
- **Tailwind CSS**: Used for all styling needs.
- **Redux Toolkit**: Employed for state management.
- **React Hook Form**: Utilized as a form handling library.

### Features Implemented

- Created a multi-step form based on the provided design.
- Each step includes:
  - **Title**: Displayed on the left-side panel.
  - **Options**: Includes icon and hover labels.
  - Labels are displayed on hover and remain visible once an option is selected.
- Implemented a Summary slide (last slide) to display the answers to the questions.

### Limitations

- Didn't have time to implement a custom carousel.
- No tests have been written.

## Backend

### Technologies Used

- **ExpressJS**: Used to create the API.
- Currently, the API simply logs the received data to the console.

### Limitations

- The requirement was to store the data in PostgreSQL. Although we could install PostgreSQL locally or use Supabase (which was done in another project), for simplicity, the data is just printed to ensure it is received correctly.

## Instructions on How to Run the Project

### Frontend

1. Clone the Git repository.
2. Open it in VS Code and install dependencies using the following command: npm i
3. Now type "npm run start"

### Backend
1. Open a new terminal
2. cd backend
3. node server.js
