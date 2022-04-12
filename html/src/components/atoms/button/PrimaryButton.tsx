import { Button, ButtonProps } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttonProps?: ButtonProps;
  onClick?: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const {children, buttonProps, onClick} = props;

  return (
    <Button
      onClick={onClick}
      bg={'gray.700'}
      color={'white'}
      w="full"
      {...buttonProps}
      _hover={{
        bg: 'gray.600'
      }}>
    { children }
  </Button>
  );
})