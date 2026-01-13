import { environment } from 'src/environments/environment';
import { Logs } from './Activity-logs';
import { Chat } from './Chat';
import { Notifications } from './Notifications';
import { Roles } from './Roles';
import { User } from './User';
import { Setting } from './setting';

export interface ResponseGlobalServer {
  data?: User | User[] |  Roles | Roles[] | Logs | Logs[] | Setting | Chat[] | null;
  message?: string;
  mailmessage?: string;
  status?: boolean;
  email_verified?: boolean;
  active?: boolean;
  otp?: boolean;
  code?: string;
  otp_required?: boolean;
  otp_enabled?: boolean;
  otp_id?: string;
  status_otp?: boolean;
  otp_status_auth?: boolean;
  user?: User;
  pagination?: customPagination;
  site_name?: string;
  site_logo?: string | File | null;
  site_description?: string;
  site_active?: boolean;
  unreadnotificationcount?: number,
  recent_unread_list?: Notifications[]

}

export interface customPagination {
  current_page: number;
  per_page: number;
  total: number;
}

export const PaginationStandard = {
  current_page: environment.current_page,
  pageSize: environment.pageSize,
  total: environment.total,
  total_user_blocked: environment.total_user_blocked
};
