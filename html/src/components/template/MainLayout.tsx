import { Box } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react"

type Props = {
  children: ReactNode;
}

export const MainLayout: VFC<Props> = memo((props) => {
  const {children} = props;
  return (
    <Box mt={4} mx={{base: 8, md: 74}} minH={{base: "320px", md: "780px"}}>
      {children}
    </Box>
    )
});