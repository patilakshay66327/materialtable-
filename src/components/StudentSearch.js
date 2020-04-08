import React from 'react'; 
import { Button, TextField } from '@material-ui/core';
import '../componentcss/StudentSearch.css';

export default function StudentSearch() {
    return (
    <div>
          <TextField
            id="studentRollNumber"
            name="studentRollNumber"
            label="Student Roll Number"
            fullWidth
          />
          <TextField
            id="studentName"
            name="studentName"
            label="Student name"
            fullWidth
          />
          <TextField
            id="studentPhoneNumber"
            name="studentPhoneNumber"
            label="Student Phone Number"
            fullWidth
          />
          <Button id="searchBtn" variant="contained" color="primary">
            Search
          </Button>
    </div>
    );
        

}
