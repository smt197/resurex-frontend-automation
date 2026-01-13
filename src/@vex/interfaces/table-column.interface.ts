export interface TableColumn<T> {
  label: string;
  property: string;
  type: 'text' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button' | 'icon' | 'color' | 'disable' | 'date' | 'file';
  icon?: string;
  visible?: boolean;
  cssClasses?: string[];
  formatter?: (value: string | number | boolean | string[] | object | null, row?: T) => string | number | boolean;
  sortable?: boolean;
}
