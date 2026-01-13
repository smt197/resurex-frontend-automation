export class Log {
  id: number;
  description: string;
  event: string;
  causer_type?: string;
  created_at: string;

  constructor(log: Log) {
    this.id = log.id ?? 0;
    this.description = log.description;
    this.event = log.event;
    this.causer_type = log.causer_type || log.description;
    this.created_at = log.created_at;
  }
}
