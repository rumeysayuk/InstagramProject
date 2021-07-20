import React, {useEffect} from 'react';
import {getAllPosts} from "./store/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {Container} from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import * as actionTypes from "./store/actionTypes/actionTypes";
import Posts from "./components/Posts/Posts";
import * as ROUTES from "./constants/routes";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
   const dispatch = useDispatch();
   const {authData} = useSelector(state=>state.auth);
   const token = localStorage.getItem("token");
   const user = JSON.parse(localStorage.getItem("profile"));

   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch]);

   useEffect(() => {
      dispatch({type: actionTypes.AUTH, data: {result: user, token: token}});
   }, [])

   return (
      <BrowserRouter>
         <Container maxWidth={"lg"}>
            <Navbar/>
            <Switch>
               {/*<ProtectedRoute user={user} path="/postadd" exact><PostAdd/></ProtectedRoute>*/}
               {/*<ProtectedRoute authData={authData} path="/" exact component={Posts}/>*/}
               <Route path="/" exact component={() => (!authData ? <Auth/> : <Posts />)}/>
               <Route path={"/auth"} component={() => (authData ? <Redirect to={ROUTES.HOMEPAGE} /> : <Auth />)}/>
               <Route component={NotFound} />
               {/*<Route component={() => <Redirect to="/"/>}/>*/}
               {/*<Route path={"/"} component={Posts} exact/>*/}
            </Switch>
         </Container>
      </BrowserRouter>
   )
}

export default App;
