import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import {firebase} from '../firebase/firebase-Config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouters = () => {
    
    const dispatch = useDispatch();

    //Esto va a estar revisando el estado de firebase
    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));            
                //Si esta logeado cambiamos el estado a true
                setIsLoggedIn(true);

               
                dispatch(startLoadingNotes(user.uid));
            }
            else{
                setIsLoggedIn(false);
            }
            //Cambiamos el estado cuando ya se tiene una respoesta
            setChecking(false)
        });
    }, [dispatch, setChecking, setIsLoggedIn])
    
    //Mientras esta autenticandose se muestra una pantalla diciendo que espere
    if(checking){
        return(
            <h1>Wait...</h1>
        )
    }

    return (

        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    /> 
                    <PrivateRoute 
                        exact
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login"/>
    
                </Switch>    
            </div>    
        </Router>
    )
}
