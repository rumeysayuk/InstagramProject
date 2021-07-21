import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        boxShadow: theme.palette.boxShadows.medium,
        borderRadius: theme.customs.borderRadius.medium,
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
    },
    root: {
        flexGrow: 1,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    postList:{
        width:"50%",
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
}));
