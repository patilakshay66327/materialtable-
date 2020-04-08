import React, { useState , useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios'; 
import '../componentcss/MaterialTable.css';


export default function MaterialTableDemo() {
  
  const [inputValue, setInputValue] = useState('');
  const [studentState, setStudentState] = React.useState([]);

  const [ColumnState, setColumnState] = React.useState({ 
    columns: [
      { title: 'Roll Number', field: 'userMetaData.rollNo' },
      { title: 'Column Name', field: 'userMetaData.name' },
      { title: 'Contact Number', field: 'userMetaData.contactNumber', type: 'numeric' },
      { title : 'Department' , field : 'userMetaData.degreeId.department' },
      { title : 'Degree' , field : 'userMetaData.degreeId.displayName' },
    ]
  });

  useEffect(() => {
    axios.get('http://14.102.53.197:8080/issuer/student')
          .then((response) => {
            setStudentState(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
  }, []);

  let url = "http://14.102.53.197:8080/issuer/student/"+inputValue;
  useEffect(() => {
    axios.get(url)
          .then((response) => {
            console.log(response);
            setStudentState(response.data.data);
          }).catch((error) => {
            console.log(error);
          });
  });

  return (  
    <React.Fragment>
      <TextField
          id="studentRollNumberTextField"
          name="studentRollNumber"
          label="Student Roll Number"
          fullWidth
          onChange={event => setInputValue(event.target.value)}
        />

      <MaterialTable
        title="Student Records"
        columns={ColumnState.columns}
        data={studentState}
       
      />
    </React.Fragment>
  );
}