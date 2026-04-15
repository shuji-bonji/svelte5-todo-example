// TODOアイテムの型定義
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

/**
 * LocalStorage に保存された形式の Todo。
 * JSON.stringify を経由すると Date が ISO 文字列になるため、Todo とは別の型で受ける。
 */
export interface StoredTodo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

// フィルター種別の型
export type FilterType = 'all' | 'active' | 'completed';

// TODOストアの型定義
export interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  filteredTodos: Todo[];
  activeTodoCount: number;
  completedTodoCount: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
  toggleAll: () => void;
}