import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {

    gridArea: 'navbar',

    backgroundColor: '#A8C0FF',
    
    borderRadius: 15,
    margin: '20px 0px',
    padding: '10px 0px',
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: 'white',
    fontSize: '50px',
    textDecoration: 'none',
    fontFamily: 'fascinate',
  },
}));