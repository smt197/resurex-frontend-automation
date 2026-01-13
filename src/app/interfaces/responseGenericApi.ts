import { Role } from "../models/role.model";
import { Logs } from "./Activity-logs";
import { Notifications } from "./Notifications";
import { Permissions } from "./Permissions";
import { customPagination } from "./Response-globalServer";
import { User } from "./User";
import { Document } from "./Document";
import { JobStatus } from "./JobStatus";
import { Menu } from "./Menu";

export interface ResponseGenericApi<T = User| Role| Logs| Permissions | Document | JobStatus | Menu> {
  data?: T | T[] | null;
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
  unreadnotificationcount?: number;
  recent_unread_list?: Notifications[];
  url?:string,
  meta: any;
}
