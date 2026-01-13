export interface JobStatus {
  id: number;
  job_id: string;
  type: string;
  queue: string | null;
  attempts: number;
  status: 'queued' | 'executing' | 'finished' | 'failed' | 'retrying';
  progress_now: number;
  progress_max: number;
  is_finished: boolean;
  is_failed: boolean;
  input: {
    file_count?: number;
    main_document_id?: number;
    type?: string;
  } | null;
  output: {
    processed_file?: string[];
    processed_document_ids?: number[];
    status_message?: string;
    total_processed: number;
    error?: string;
  } | null;
  created_at: string;
  updated_at: string;
  started_at: string | null;
  finished_at?: string | null;
}

export interface JobStatusEvent {
  jobStatus: {
    id: number | string;
    progress_now: number;
    progress_max: number;
    status: 'queued' | 'executing' | 'finished' | 'failed' | 'retrying';
    output?: {
      processed_file?: string;
      error?: string;
    };
  };
}
