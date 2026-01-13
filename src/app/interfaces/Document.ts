export interface Document {
  id?: number;
  slug: string;
  name: string;
  description: string;
  files?: File[];
  files_info: DocumentFileInfo[];
  created_at?: string;
  updated_at?: string;
  tempFileUrl?: string;
  message?:string,
  job_id:string
}

export interface DocumentFileInfo {
  id?:number;
  name: string;
  file_name:string
  size: number;
  mime_type: string;
  url: string;
}

export interface DocumentCreateUpdateModel {
  files?: File[];
  name: string;
  slug: string;
  description: string;
  files_info: DocumentFileInfo[];
  fileDetails?: { name: string; description: string }[];
  viewMode?: 'create' | 'view';
}

export interface DocumentCreationModel {
  files: File[];
}
export interface DocumentUpdateModel {
  name: string;
  description: string;
}
export type DocumentFormModel = DocumentCreationModel | DocumentUpdateModel;




export interface FileCreateUpdateModel {
  file?: File;
  file_name: string;
  name:string,
  slug: string;
}
