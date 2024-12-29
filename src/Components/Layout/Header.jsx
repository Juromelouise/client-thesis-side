import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { HiMenu, HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <Navbar
      className="fixed top-0 left-0 w-full px-4 shadow-md bg-white z-50"
      maxWidth="fluid"
    >
      <Drawer isOpen={isOpen} size="xs" onClose={onClose}>
        <DrawerContent>
          <>
            <DrawerHeader className="flex flex-col gap-1">
              Drawer Title
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" onClick={onClose}>
                Action
              </Button>
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>

      {/* Brand */}
      <Link to="/">
        <NavbarBrand>
          <span className="text-xl font-bold text-black">VOBO</span>
        </NavbarBrand>
      </Link>
      {/* Spacer */}
      <NavbarContent justify="end" className="gap-4">
        {/* Menu Icon */}
        <NavbarItem>
          <HiMenu
            className="text-2xl text-gray-600 cursor-pointer"
            onClick={handleOpen}
          />
        </NavbarItem>

        {/* User Icon */}
        <Link to="/profile">
          <NavbarItem>
            <HiOutlineUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </NavbarItem>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
