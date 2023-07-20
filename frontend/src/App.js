import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import { Grid } from '@mui/material';

export default function App() {
  return (
    <Grid container justifyContent={"center"} >
      <Grid item md={10}>
        <BrowserRouter>
          <Routes>
            <Route path="/users/:userId" exact element={<Home />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </Grid>
    </Grid>
  );
}


