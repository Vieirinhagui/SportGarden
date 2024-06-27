import { CardContainer } from "./styles";

interface CardProps {
  imgUrl: string;
  title: string;
  text: string;
}

export const Card = ({ imgUrl, title, text }: CardProps) => {
  return (
    <CardContainer>
      <img src={imgUrl} alt="" />
      <div>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </CardContainer>
  );
};
