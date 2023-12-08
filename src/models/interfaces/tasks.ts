export interface ITask {
    id: number;
    title: string;
    description: string;
  }
  
  export interface TasksState {
    tasks: ITask[];
    loading: boolean;
    error: string | null;
    page : number;
  }

  export interface NewTaskProps {
    onSave: () => void;
  }

  export interface TaskEditProps {
    taskId: number;
    title: string;
    description: string;
    onSave: () => void;
    onCancel: () => void;
  }