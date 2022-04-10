import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter, Button } from "@chakra-ui/react";
import { VFC, memo, useState, ChangeEvent, useEffect } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ja from "date-fns/locale/ja"
import Select from 'react-select'

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  todoId?: number;
}

const statusOptions = [
  {value: 1, label: "未着手"},
  {value: 2, label: "着手中"},
  {value: 3, label: "確認中"},
  {value: 4, label: "完了"},
]

export const TodoRegistModal: VFC<Props> = memo((props) => {
  const today = new Date();
  registerLocale('ja', ja);

  const {isOpen, onClose, todoId} = props;
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [statusId, setStatusId] = useState<string>();
  const [startDate, setStartDate] = useState<Date>(today);
  const [expireDate, setExpireDate] = useState<Date>(today);
  const [tags, setTags] = useState([])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const onChangeStatusId = (e: any) => setStatusId(e.value);

  useEffect(() => {
    console.log(`TodoID（${todoId}）を取得できているので検索`);
  });

  const onClickSubmit = () => {
    console.log(`
      todoId: ${todoId}
      title: ${title}
      description: ${description}
      statusId: ${statusId}
      expireDate: ${expireDate}
    `);
  }

  return (
  <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent pb={2}>
      <ModalHeader>Todo登録</ModalHeader>
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
            <FormLabel>タグ</FormLabel>
            <ReactTagInput
            tags={tags}
            onChange={(newTags) => setTags(newTags)}/>
          </FormControl>
          <FormControl>
            <FormLabel>ステータス</FormLabel>
            <Select options={statusOptions} onChange={onChangeStatusId}/>
          </FormControl>
          <FormControl>
            <FormLabel>開始日</FormLabel>
            <ReactDatePicker
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            minDate={today}
            onChange={selectDate => {setStartDate(selectDate || today)}} />
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
