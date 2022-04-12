import { memo, useCallback, useEffect, useState, VFC } from "react"
import { Box, Button, useDisclosure } from "@chakra-ui/react"

import { TodoTable } from "../organisms/todo/TodoTable";
import { TodoRegistModal } from "../organisms/todo/TodoRegistModal";
import { TodoType } from "../../types/todoType";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

const TodoData: Array<TodoType> = [
  {
    id: 1,
    title: "バックエンド作成",
    description: "",
    tags: ["開発", "バックエンド"],
    status: "着手中",
    startDate: "2022-04-03",
    expireDate: "2022-04-07",
    created: "2022-04-03"
  },
  {
    id: 2,
    title: "フロントエンドもっとちゃんと作る",
    description: "",
    tags: ["開発", "フロントエンド"],
    status: "完了",
    startDate: "2022-03-28",
    expireDate: "2022-04-02",
    created: "2022-03-28"
  },
  {
    id: 3,
    title: "DB設計ちゃんとやる",
    description: "",
    tags: ["開発", "DB"],
    status: "未着手",
    startDate: "2022-04-03",
    expireDate: "2022-04-07",
    created: "2022-04-03"
  },
];

export const TodoList: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [todoList, setTodoList] = useState<Array<TodoType>>(TodoData);
  const [targetTodoId, setTargetTodoId] = useState<number>();

  const onClickTodo = useCallback((id: number) => {
    setTargetTodoId(id);
    onOpen();
  }, [todoList]);

  return (
    <>
      <Box>
        <PrimaryButton onClick={onOpen} buttonProps={{loadingText: 'Submitting', size: "sm", w: 'auto'}}>
          Todo追加
        </PrimaryButton>
      </Box>
      <TodoTable todoList={todoList} onClick={onClickTodo}/>
      <TodoRegistModal todoId={targetTodoId} isOpen={isOpen} onClose={onClose} />
    </>
  )
})