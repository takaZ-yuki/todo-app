import { memo, useCallback, useEffect, useState, VFC } from "react"
import { Box, Button, useDisclosure } from "@chakra-ui/react"

import { TaskTable } from "../organisms/task/TaskTable";
import { TaskRegistModal } from "../organisms/task/TaskRegistModal";
import { TaskType } from "../../types/taskType";

const taskData: Array<TaskType> = [
  {
    id: 1,
    title: "バックエンド作成",
    description: "",
    isDone: false,
    assigner: {
      id: 1,
      name: "ざわ",
      image: "https://source.unsplash.com/random",
    },
    expireDate: "2022-04-07",
    created: "2022-04-03"
  },
  {
    id: 2,
    title: "フロントエンドもっとちゃんと作る",
    description: "",
    isDone: true,
    assigner: {
      id: 1,
      name: "ざわ",
      image: "https://source.unsplash.com/random",
    },
    expireDate: "2022-04-02",
    created: "2022-03-28"
  },
  {
    id: 3,
    title: "DB設計ちゃんとやる",
    description: "",
    isDone: false,
    assigner: {
      id: 1,
      name: "ざわ",
      image: "https://source.unsplash.com/random",
    },
    expireDate: "2022-04-07",
    created: "2022-04-03"
  },
];

export const TaskList: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [taskList, setTaskList] = useState<Array<TaskType>>(taskData);
  const [targetTaskId, setTargetTaskId] = useState<number>();

  const onClickTask = useCallback((id: number) => {
    setTargetTaskId(id);
    onOpen();
  }, [taskList]);

  return (
    <>
      <Box>
        <Button
          loadingText="Submitting"
          onClick={onOpen}
          size="sm"
          bg={'pink.400'}
          color={'white'}
          _hover={{
            bg: 'pink.300'
          }}>
          タスク追加
        </Button>
      </Box>
      <TaskTable taskList={taskList} onClick={onClickTask}/>
      <TaskRegistModal taskId={targetTaskId} isOpen={isOpen} onClose={onClose} />
    </>
  )
})