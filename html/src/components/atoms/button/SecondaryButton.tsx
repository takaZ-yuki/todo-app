import { Button, ButtonProps } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttonProps?: ButtonProps;
  onClick?: () => void;
}

export const SecondaryButton: VFC<Props> = memo((props) => {
  const {children, buttonProps, onClick} = props;

  return (
    <Button
      onClick={onClick}
      {...buttonProps}
      bg={'red.300'}
      color={'white'}
      w="full"
      _hover={{
        bg: 'red.200',
      }}>
    { children }
  </Button>
  );
})