import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score < 70 ? "yellow" : score > 70 ? "green" : "";
  return (
    <Badge colorScheme={color} paddingX={2} rounded={2} fontSize="16px">
      {score}
    </Badge>
  );
};

export default CriticScore;
