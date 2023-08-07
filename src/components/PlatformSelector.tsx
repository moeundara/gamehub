import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlaforms from "../hooks/usePlatforms";
import useGameQuery from "../store";

const PlatformSelector = () => {
  const { data: platforms } = usePlaforms();
  const selectedPlaformId = useGameQuery(
    (selector) => selector.gameQuery.platformId
  );
  const setPlatformId = useGameQuery((selector) => selector.setPlatformId);
  const selectedPlaform = platforms?.results.find(
    (p) => p.id === selectedPlaformId
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlaform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
