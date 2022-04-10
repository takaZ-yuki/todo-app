import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { VFC, memo, useState, useEffect } from "react";
import { TodoType } from "../../../types/todoType";
import { TodoRow } from "../../molecules/todo/TodoRow";

interface Props {
  onClick: (id: number) => void;
  todoList: Array<TodoType>;
}

export const TodoTable: VFC<Props> = memo((props) => {
  const {onClick, todoList} = props;

  return (
    <TableContainer>
    <Table variant="simple" size='sm'>
      <Thead>
        <Tr>
          <Th>Todo名</Th>
          <Th>タグ</Th>
          <Th>ステータス</Th>
          <Th>開始日</Th>
          <Th>対応期日</Th>
          <Th>登録日</Th>
        </Tr>
      </Thead>
      <Tbody>
        {todoList.map((todo) => (
          <TodoRow key={todo.id} onClick={onClick} id={todo.id} title={todo.title} expireDate={todo.expireDate} created={todo.created} tags={todo.tags} status={todo.status} startDate={todo.startDate} />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
})