import { deepPurple } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  blue: {
    backgroundColor: '#3f50b5',
    color: 'white',
  },
  lightBlue: {
    backgroundColor: 'lightblue',
    color: 'white',
  },
  paper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: 'lightgrey',
    borderColor: 'grey',
  },
  selectedPaper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: 'lightblue',
    color: '#3f50b5',
    borderColor: '#3f50b5',
  }
}))
