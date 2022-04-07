import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, Button } from "@chakra-ui/react";
import { VFC, memo, useState, ChangeEvent, useEffect } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ja from "date-fns/locale/ja"
import Select from 'react-select'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  taskId?: number;
}

const userOptions = [
  {value: 1, label: "ざわ"},
  {value: 2, label: "ピングー"},
  {value: 3, label: "スナフキン"},
  {value: 4, label: "茂吉"},
]

export const TaskRegistModal: VFC<Props> = memo((props) => {
  const today = new Date();
  registerLocale('ja', ja);

  const {isOpen, onClose, taskId} = props;
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [assignerId, setAssignerId] = useState<string>();
  const [expireDate, setExpireDate] = useState<Date>(today);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const onChangeAssignerId = (e: any) => setAssignerId(e.value);

  useEffect(() => {
    console.log(`タスクID（${taskId}）を取得できているので検索`);
  });

  const onClickSubmit = () => {
    console.log(`
      taskId: ${taskId}
      title: ${title}
      description: ${description}
      assignerId: ${assignerId}
      expireDate: ${expireDate}
    `);
  }

  return (
  <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent pb={2}>
      <ModalHeader>タスク登録</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>タイトル</FormLabel>
            <Input type="text" onChange={onChangeTitle}/>
          </FormControl>
          <FormControl>
            <FormLabel>詳細</FormLabel>
            <Input type="textarea" onChange={onChangeDescription}/>
          </FormControl>
          <FormControl>
            <FormLabel>担当者</FormLabel>
            <Select options={userOptions} onChange={onChangeAssignerId}/>
          </FormControl>
          <FormControl>
            <FormLabel>期限日</FormLabel>
            <ReactDatePicker
            dateFormat="yyyy-MM-dd"
            selected={expireDate}
            minDate={today}
            onChange={selectDate => {setExpireDate(selectDate || today)}} />
          </FormControl>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button
          bg={'gray.400'}
          color={'white'}
          w="full"
          m={2}
          onClick={onClose}
          _hover={{
            bg: 'gray.500',
          }}>
          Cancel
        </Button>
        <Button
          color={'white'}
          bg={'pink.400'}
          m={2}
          w="full"
          onClick={onClickSubmit}
          _hover={{
            bg: 'pink.300'
          }}>
          Submit
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
})
