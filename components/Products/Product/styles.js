import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({

    root:{
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '100% '// '56.80%' ==>  à la base (16;9')
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));