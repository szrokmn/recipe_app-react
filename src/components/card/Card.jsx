import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default-image.jpg";
import { MainContainer, Cards, Image, Button, Header } from "../Card.style";

const Card = ({ recipes }) => {

const navigate =  useNavigate()

return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Cards>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} />
            <Button 
            onClick={()=> navigate("detail", {state:recipe, replace:false})}
            >View More</Button>
          </Cards>
        );
      })}
    </MainContainer>
  );
};

export default Card;
