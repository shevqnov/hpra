import React from "react";
import { Card, Typography } from "@material-ui/core";

interface Props {
  word: string;
  meaning: string;
  image: string;
}

const CardComponent: React.FC<Props> = ({ word, meaning, image }) => {
  return (
    <Card style={{ width: 200 }}>
      <Typography variant="subtitle1">{word}</Typography>
      <br />
      <Typography variant="subtitle2">{meaning}</Typography>
      <br />
      <img style={{ width: 100 }} src={image} alt={word} />
    </Card>
  );
};

export default CardComponent;
