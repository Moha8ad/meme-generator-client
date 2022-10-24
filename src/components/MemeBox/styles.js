import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  memeContainer: {

    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  emptyMemeBox: {
    padding: "20px 10px",
    boxShadow: `-2px 2px 10px 5px rgba(0, 0, 0, .2)`,
    borderRadius: '15px',
    backgroundColor: `rgba(2, 12, 40, 0.341)`,

    transition: `transform 0.25s ease-out`, 
    '&:hover': {
      transform: `scale(1.02)`,
    }
  },
  createMemeMessage: {
    padding: '20px',
    fontSize: '1.5em',
    fontFamily: 'Quicksand', 
    color:'white',
  }

}));

