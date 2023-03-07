import meal from "../../assets/meal.svg"
import { FormContainer, Header, LoginContainer, StyledInput } from "./Login.style";


const Login = () => {

  return (
    <LoginContainer>
      <FormContainer>
        <img src={meal} width={250}/>
        <Header>Recipe</Header>
        <form>
          <StyledInput type="text" placeholder="Enter username"/>
          <StyledInput type="text" placeholder="Enter password"/>
          <button type="submit">Login</button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
