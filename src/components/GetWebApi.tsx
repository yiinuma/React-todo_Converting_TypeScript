import { memo, useEffect, VFC } from 'react';
import { useGetUserData } from '../hooks/useGetUserData';
import { ApiButton } from './button/ApiButton';
import { TodoType } from '../types';

type Props = {
  todoList: TodoType[];
  putTodoList: (items: TodoType[]) => void;
};
export const GetWebApi: VFC<Props> = memo((props) => {
  const { todoList, putTodoList } = props;
  const { userData, getUserData } = useGetUserData();

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleGetUserData = () => {
    const newUserData = [...todoList, userData] as TodoType[];
    putTodoList(newUserData);
  };

  return (
    <ApiButton disabled={todoList === null} onClick={handleGetUserData}>
      jsonplaceholderからuserデータを取得
    </ApiButton>
  );
});
