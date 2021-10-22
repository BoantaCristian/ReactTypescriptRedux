import React, { useEffect } from 'react';
import './App.css';
import { connect, useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import * as operationActions from "./services/actions/operationActions";
import { State } from "./services/reducers/index";

function App() {

  const dispatch = useDispatch()

  const operation = bindActionCreators(operationActions, dispatch)
  const operations = useSelector((state: State) => { state.operations })

  useEffect(() => {
    operation.fetchDeposits
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return{
      Deposits: state.operations.deposits
  }
}

const mapActionToProps = {
  fetchDeposits: operationActions.fetchDeposits
}

export default connect(mapStateToProps, mapActionToProps) (App)
