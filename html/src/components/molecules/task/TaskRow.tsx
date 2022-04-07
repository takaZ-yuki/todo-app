import { Tr, Td, Checkbox, Avatar, Text, Link } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { TaskType } from "../../../types/taskType";

interface Props extends TaskType {
  onClick: (id: number) => void;
}

export const TaskRow: VFC<Omit<Props,"description">> = memo((props) => {
  const {id, title, assigner, expireDate, created, isDone, onClick} = props;
  return (
    <Tr>
      <Td>
        <Checkbox defaultChecked={isDone} size='lg' colorScheme='pink' display="inline-"></Checkbox>
        <Link mx={2} onClick={() => onClick(id)}>{title}</Link>
      </Td>
      <Td>
        <Avatar
          mx={1}
          size={'sm'}
          src={assigner.image}
        />
        <Text my={1}>{assigner.name}</Text>
      </Td>
      <Td>{expireDate}</Td>
      <Td>{created}</Td>
  </Tr>
  );
});