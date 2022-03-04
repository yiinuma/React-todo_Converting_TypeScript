import { memo, VFC } from 'react';
import toast from 'react-hot-toast';
import { TodoType } from '../types';
import { ApiButton } from './button/ApiButton';

type Props = {
  todoList: TodoType[];
  clearTodoList: () => void;
};

export const ClearList: VFC<Props> = memo((props) => {
  const { todoList, clearTodoList } = props;

  const onClickClearTask = () => {
    toast(() => (
      <span>
        本当に削除しますか？
        <input
          type="button"
          value="削除"
          className="ml-2 cursor-pointer rounded bg-red-300 bg-white px-4 py-2 font-bold"
          onClick={clearTodoList}
        />
      </span>
    ));
  };

  return (
    <ApiButton disabled={todoList !== undefined} onClick={onClickClearTask}>
      全てのTodoListを削除
    </ApiButton>
  );
});
