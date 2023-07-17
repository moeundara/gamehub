import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (input: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(input) => onSearch(input)} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
