import React, {useState} from "react";
import styled, {createGlobalStyle, css} from 'styled-components';
import Switch from "./themeToggler";
import { ThemeProvider } from "styled-components";
import { useTheme, lightTheme, darkTheme } from "./usetheme";

const GlobalStyle = createGlobalStyle`
body{
  background:${(props) => props.theme.bgcolor};
  margin:0;
  color:#555

}

`

const sharedStyles= css`
background-color:#ccc;
height:40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0px 20px;
box-sizing:border-box; 
`
const  StyledFormWrapper =styled.div`
display: flex;
justify-content:center;
align-items:center;
height: 100vh;
padding: 0 20px;
`

const  StyledForm = styled.form`
width:100%;
max-width:500px;
padding:40px;
background-color: ${(props) => props.theme.formcolor};
border-radius:10px;
box-sizing:border-box;
`

const StyledInput = styled.input`
display:block;
width:100%;
${sharedStyles }
`
const StyledButton = styled.button`
display:block;
background-color:#2196f3;
color:${(props) => props.theme.text};
font-weight:700;
border-radius:5px;
height:40px;
padding:0 20px;
cursor:pointer;
box-sizing:border-box;
`
const StyledError = styled.div`
color:red;
font-weight:800;
`


const initialState ={
  name:'',
  email:'',
  password:'',
}


function App() {
  const  [state,setState] = useState(initialState);
  const  [error, setError] = useState('');
 
  const {isDarkMode, handleModeChange}=useTheme();
  


  const handleSubmit = e => {
    e.preventDefault();

    for (let key in state){
      if (state[key]===''){
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
    
  }


  const handleInput = e =>{
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev =>({...prev, [inputName]:value}))
  }

  return (
  <>
  <ThemeProvider theme ={!isDarkMode ? lightTheme: darkTheme}>
   <GlobalStyle/>
   <StyledFormWrapper>
     <StyledForm onSubmit={handleSubmit}>
     <Switch isDarkMode={ isDarkMode} onChange={handleModeChange} />
     <h2>Regiser Form</h2>
     <label htmlFor="name">Username</label>
     <StyledInput type="text" name="name" value={state.name} onChange={handleInput}/>
     <label htmlFor="email">Email</label>
     <StyledInput type="text" name="email" value={state.email} onChange={handleInput}/>
     <label htmlFor="password">Password</label>
     <StyledInput type="password" name="password" value={state.password} onChange={handleInput}/>
     {error && (<StyledError><p>{error}</p></StyledError>)}
     <StyledButton type="Submit"> Login</StyledButton>
     </StyledForm>
   </StyledFormWrapper>
   </ThemeProvider>
  </>
  );
}

export default App;
