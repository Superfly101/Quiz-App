import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";

type Prop = {
  children: React.ReactNode;
};
const Header = ({ children }: Prop) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header className="p-4 flex justify-between md:px-16">
        <Heading>MyQuiz</Heading>
        <div className="">
          <IconButton
            onClick={toggleColorMode}
            aria-label="toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
