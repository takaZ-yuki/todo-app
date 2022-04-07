import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { VFC, memo, useState, useEffect } from "react";
import { TaskType } from "../../../types/taskType";
import { TaskRow } from "../../molecules/task/TaskRow";

interface Props {
  onClick: (id: number) => void;
  taskList: Array<TaskType>;
}

export const TaskTable: VFC<Props> = memo((props) => {
  const {onClick, taskList} = props;

  return (
    <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>タスク名</Th>
          <Th>担当者</Th>
          <Th>対応期日</Th>
          <Th>登録日</Th>
        </Tr>
      </Thead>
      <Tbody>
        {taskList.map((task) => (
          <TaskRow key={task.id} onClick={onClick} id={task.id} title={task.title} isDone={task.isDone} assigner={task.assigner} expireDate={task.expireDate} created={task.created} />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
})