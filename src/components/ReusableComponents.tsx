import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Person {
  name: string;
  position: string;
}

interface ReusableComponentProps {
  title: string;
  people: Person[];
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
  },
  parentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    margin: '-10px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '200px', // Adjust the width as per your preference
    height: '200px', // Adjust the height as per your preference
    padding: '0',
    margin: '30px',
    borderRadius: '2rem',
    border: 'none',
    overflow: 'hidden',
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '56px',
    letterSpacing: '0px',
    textAlign: 'center',
    color: '#34373A',
    marginBottom: '20px',
  },
  cardHeading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0px',
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0px',
    textAlign: 'center',
  },
  cardImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '2rem',
    display: 'block', // Added to remove any residual spacing
  },
  [`@media (max-width: 768px)`]: {
    parentContainer: {
      flexDirection: 'column',
    },
  },
});

const ReusableComponent: React.FC<ReusableComponentProps> = ({ title, people }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        {title}
      </Typography>
      <Box className={classes.parentContainer}>
        {people.map((person) => (
          <div key={person.name}>
            <Card className={classes.card}>
              <CardContent>
                <div style={{ width: '100%', height: '100%' }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UQ-Sv4QHrOSuhyRMRc9URaU-J71HrIG-9w&usqp=CAU"
                    alt="Person"
                    className={classes.cardImage}
                  />
                </div>
              </CardContent>
            </Card>
            <Typography variant="h5" className={classes.cardHeading}>
              {person.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.subHeading}>
              {person.position}
            </Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ReusableComponent;
