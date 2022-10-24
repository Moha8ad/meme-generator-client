import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',

    width: `max(min(50vh, 50vw), 240px)`, 

    backgroundColor: 'rgba(255,255,255,.5)',

    "&>*": {
      padding: '10px 20px',
      margin: '10px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw', 
    },
    
  },
  buttonSubmit: {
    margin: '5px 0',
  },
  textField: { 
    "&>*": {
      padding: '10px',
      margin: '10px'
    }
  },
  selectImage: {
    width: '100%',
    "&>*": {
      color: 'rgba(0,0,0,0)'
    },


  }
}));