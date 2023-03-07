import meal from "../../assets/meal.svg"
import { FormContainer, LoginContainer } from "./Login.style";


const Login = () => {

  return (
    <LoginContainer>
      <FormContainer>
        <img src={meal} width={250}/>
        <h1>Recipe</h1>
        <form>
          <input type="text" placeholder="Enter username"/>
          <input type="text" placeholder="Enter password"/>
          <button type="submit">Login</button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
