import { Tr, Td, Checkbox, Avatar, Text, Link } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { TodoType } from "../../../types/todoType";

interface Props extends TodoType {
  onClick: (id: number) => void;
}

export const TodoRow: VFC<Omit<Props,"description">> = memo((props) => {
  const {id, title, tags, status, startDate, expireDate, created, onClick} = props;
  return (
    <Tr>
      <Td>
        <Link mx={2} onClick={() => onClick(id)}>{title}</Link>
      </Td>
      <Td>{tags ? tags.join(',') : ''}</Td>
      <Td>{status}</Td>
      <Td>{startDate}</Td>
      <Td>{expireDate}</Td>
      <Td>{created}</Td>
  </Tr>
  );
});