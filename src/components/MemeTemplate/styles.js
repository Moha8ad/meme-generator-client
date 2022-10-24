import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    memeTemplate: {
        height:'130px', 
        display:'flex', 
        alignItems:'center', 
        overflow:'scroll', 
        
    },
    imgBox: {
        "&:first-child": {
            margin: '0 0 0 8px'
        },
        "&:last-child": {
            padding: '0 8px 0 0',
        }
    },
    templateImage : {
        height:'100px', 
        border: '1px solid white', 
        margin:'2px', 
        cursor:'pointer'
    },
    selectedImage: {
        border: '2px solid red', 

    }
}));
  


  