import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Document } from 'src/app/interfaces/Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private activeJobsCountSubject = new BehaviorSubject<number>(0);
  public activeJobsCount$ = this.activeJobsCountSubject.asObservable();

  private jobFinishedSubject = new Subject<void>();
  public jobFinished$ = this.jobFinishedSubject.asObservable();

  private jobCreatedSubject = new Subject<void>();
  public jobCreated$ = this.jobCreatedSubject.asObservable();

  private documentCreatedSubject = new Subject<Document>();
  public documentCreated$ = this.documentCreatedSubject.asObservable();

  constructor() {}

  updateActiveJobsCount(count: number): void {
    this.activeJobsCountSubject.next(count);
  }
  notifyJobFinished(): void {
    this.jobFinishedSubject.next();
  }
  notifyJobCreated(): void {
    this.jobCreatedSubject.next();
  }
  notifyDocumentCreated(document: Document): void {
    this.documentCreatedSubject.next(document);
  }
}
