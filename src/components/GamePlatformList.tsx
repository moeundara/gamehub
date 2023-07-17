import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAppStoreIos,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const GamePlatformList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    web: BsBrowserChrome,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: BiLogoPlayStore,
    ios: FaAppStoreIos,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default GamePlatformList;
