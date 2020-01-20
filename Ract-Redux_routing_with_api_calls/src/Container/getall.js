import React,{Component} from 'react';
import * as errorAction from '../Redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table,TableBody,TableCell,TableHead,TableRow,Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  };

class Getall extends Component{

    componentDidMount(){
        this.props.errorAction.getallerror()
      }

    deleteError = (e) =>{ 
        this.props.errorAction.deletError(e.target.value)
        window.location.reload()
    }
    

    render(){
        // console.log(" --- render ---", this.props)
        const error = this.props.getall
        const classes = this.props  
        return(
            <div>

            <Container fixed>
            <h1>GetAll Method</h1>
            <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell> id </TableCell>
                    <TableCell> response_code </TableCell>
                    <TableCell> http_method </TableCell>
                    <TableCell> name </TableCell>
                    <TableCell> description </TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {error && error.data && error.data.results.map((err) =>
                <TableRow>
                    <TableCell> {err.id} </TableCell>
                    <TableCell> {err.response_code} </TableCell>
                    <TableCell> {err.http_method} </TableCell>
                    <TableCell> {err.name} </TableCell>
                    <TableCell> {err.description} </TableCell>
                    <TableCell>

                    <Fab aria-label="edit" >
                    <EditIcon fontSize="large"  onClick={()=>this.props.history.push("/put", {err})}/>
                    </Fab>
                    
                    <Fab >
                    <IconButton value={err.id} onClick={this.deleteError} aria-label="delete" >
                    <DeleteIcon fontSize="large" />
                    </IconButton>
                    </Fab>

                    </TableCell>
                    
                </TableRow>
                )}
                </TableBody>
            </Table>
            
            <Fab color="primary" aria-label="add"  style={{
                    left: '50%', 
                    right: '50%',
                }}>
            <AddIcon fontSize="large"  onClick={()=>this.props.history.push('/post')} />
            </Fab>
            </Paper>
            </Container>
            
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return{
        getall: state.errorReducer.success
    }
    }

function mapDispatchToProps(dispatch){
    return{
        errorAction: bindActionCreators(errorAction, dispatch)
    }
    }

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Getall))

