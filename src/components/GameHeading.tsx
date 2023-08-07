import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

const GameHeading = () => {
  const genreId = useGameQuery((selector) => selector.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((selector) => selector.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
