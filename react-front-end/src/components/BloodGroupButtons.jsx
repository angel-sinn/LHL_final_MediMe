import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextButton from './TextButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function BloodGroupedButtons(props) {
  const classes = useStyles();
  const bloodGroupArray = [
    {id: 1,
    name: "A"
  },
    {id: 2,
    name: "B"
  },
  {id: 3,
    name: "O"
  },
  {id: 4,
    name: "AB"
  },
    {id: 5,
    name: "UNKNOWN"
  }
    ]

  const bloodGroup = bloodGroupArray.map((value) => {
    return (
    <TextButton
    key={value.id}
    setState={(event) => props.onChange(value.name)}
    groupButtons
    selected={value.name === props.value}
    value={value.name}
    >
     {value.name}
    </TextButton>
    )
  });

  return (
      <div className={classes.root}>
      
      {bloodGroup}
    
      </div>

   
  );
}