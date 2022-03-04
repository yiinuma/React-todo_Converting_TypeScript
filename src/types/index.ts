export type TodoType = {
  id: string | number;
  text: string;
  limit: string;
  complete: boolean | string;
};

export type UserType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
