export interface PaginationConfig {
  current_page: number;
  per_page: number;
  total: number;
}
// Interface pour les événements d'action
export interface ActionEvent<T> {
  action: string;
  row?: T; // Rendre la ligne optionnelle
  rows?: T[];
}