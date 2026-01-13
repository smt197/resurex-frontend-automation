import { User } from "./User";

export interface Notifications {
  id: number | string;
  type: string;
  data: DataMessage;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
  time_ago: string;
}

interface DataMessage {
  message: string;
  model_type: any;
  notification_type: string;
  chat_partner_name?: string
}

export interface NotificationResponse {
  message: string;
  data: Notifications[];
  pagination: Pagination;
  meta:Meta;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
  path: string;
  per_page: number;
  to: number;
  total: number;
  unreadnotificationcount:number;

}

export interface NotificationParams {
  page: number;
  unreadOnly?: boolean; // Indique si on veut uniquement les notifications non lues
}

export enum IslandState {
  Pill, // État de base
  Notification,
}