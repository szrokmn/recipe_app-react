import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg"
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./Login.style";


const Login = () => {

  const navigate = useNavigate()

  const userInfo = {
    username:"admin"
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate(-1)
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Recipe</Header>
        <StyledForm onClick={handleSubmit}>
          <StyledInput type="text" placeholder="Enter username"/>
          <StyledInput type="password" placeholder="Enter password"/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
