import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  meme: {
    display: 'flex', 
    flexFlow: 'column wrap', 
    justifyContent:'space-between', 
    alignItems:'center',

    height: `min(min(60vh, 60vw), 480px)`, 
    width: `min(min(60vh, 60vw), 480px)`, 
    backgroundSize: `min(min(60vh, 60vw), 480px) min(min(60vh, 60vw), 480px)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',

    padding: '10px',
    border: '1px solid white',

    transition: `transform 0.25s ease-out`, 
    '&:hover': {
      transform: `scale(1.02)`,
    },
    [theme.breakpoints.down('xs')]: {
      height: `max(min(60vh, 60vw), 240px)`, 
      width: `max(min(60vh, 60vw), 240px)`, 
      backgroundSize: `max(min(60vh, 60vw), 240px) max(min(60vh, 60vw), 240px)`,
    },
  }
}));