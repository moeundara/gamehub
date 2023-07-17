import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlaform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlaform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlaform }: Props) => {
  const { data: platforms } = usePlaform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlaform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
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
