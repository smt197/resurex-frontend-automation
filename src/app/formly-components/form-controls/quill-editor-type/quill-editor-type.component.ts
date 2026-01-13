import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'formly-quill-editor-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuillModule, TranslateModule],
  template: `
    <div class="w-full">
      <label
        *ngIf="props['label']"
        class="block text-sm font-medium text-gray-700 mb-2">
        <ng-container *ngIf="props['translate']">
          {{ props['label'] | translate }}
        </ng-container>
        <ng-container *ngIf="!props['translate']">
          {{ props['label'] }}
        </ng-container>
      </label>
      <quill-editor
        [placeholder]="getPlaceholder()"
        [modules]="props['modules'] || defaultModules"
        (onEditorCreated)="onEditorCreated($event)"
        (onContentChanged)="onContentChanged($event)"
        class="bg-white w-full">
      </quill-editor>
      <p *ngIf="props['hint']" class="text-xs text-gray-500 mt-2">
        <ng-container *ngIf="props['translate']">
          {{ props['hint'] | translate }}
        </ng-container>
        <ng-container *ngIf="!props['translate']">
          {{ props['hint'] }}
        </ng-container>
      </p>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep {
        quill-editor {
          display: block;
          width: 100%;
        }

        .ql-toolbar {
          border: 1px solid #e5e7eb;
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          background-color: #f9fafb;
          padding: 0.5rem;

          @media (max-width: 640px) {
            padding: 0.375rem;
            .ql-formats {
              margin-right: 0.25rem !important;
            }
          }
        }

        .ql-container {
          border: 1px solid #e5e7eb;
          border-top: none;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
          min-height: 200px;
          font-size: 14px;
          width: 100%;

          @media (max-width: 640px) {
            min-height: 150px;
            font-size: 13px;
          }
        }

        .ql-editor {
          min-height: 200px;
          padding: 1rem;

          @media (max-width: 640px) {
            min-height: 150px;
            padding: 0.75rem;
          }

          &.ql-blank::before {
            color: #9ca3af;
            font-style: normal;
            left: 1rem;
            right: 1rem;

            @media (max-width: 640px) {
              left: 0.75rem;
              right: 0.75rem;
            }
          }
        }

        quill-editor[disabled] {
          .ql-toolbar {
            background-color: #f3f4f6;
            opacity: 0.6;
            pointer-events: none;
          }

          .ql-container {
            background-color: #f9fafb;
            opacity: 0.6;
          }

          .ql-editor {
            cursor: not-allowed;
          }
        }

        .ql-toolbar button {
          width: 28px;
          height: 28px;

          @media (max-width: 640px) {
            width: 24px;
            height: 24px;
          }
        }

        .ql-toolbar .ql-stroke {
          stroke: #374151;
        }

        .ql-toolbar .ql-fill {
          fill: #374151;
        }

        .ql-toolbar button:hover,
        .ql-toolbar button:focus {
          .ql-stroke {
            stroke: #1f2937;
          }
          .ql-fill {
            fill: #1f2937;
          }
        }

        .ql-toolbar button.ql-active {
          .ql-stroke {
            stroke: #3b82f6;
          }
          .ql-fill {
            fill: #3b82f6;
          }
        }
      }
    `
  ]
})
export class QuillEditorTypeComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit, AfterViewInit, OnDestroy
{
  defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
      ['link']
    ]
  };

  private quillEditor: any;
  private isInitializing = false;
  private destroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPlaceholder(): string {
    return this.props['placeholder'] || '';
  }

  onEditorCreated(quill: any): void {
    this.quillEditor = quill;
    this.isInitializing = true;

    // Set initial content from formControl
    if (this.formControl?.value) {
      this.updateEditorContent(this.formControl.value);
    }

    // Listen to text changes to update the form control
    quill.on('text-change', (_delta: any, _oldDelta: any, source: string) => {
      if (source === 'user' && !this.isInitializing) {
        const html = quill.root.innerHTML;
        if (html !== this.formControl.value) {
          this.formControl.setValue(html);
          this.formControl.markAsDirty();
        }
      }
    });

    // Listen for programmatic changes to the form control and update the editor
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe((value: string) => {
        if (this.quillEditor) {
          const editorContent = this.quillEditor.root.innerHTML;
          // Only update the editor if the content is different to prevent infinite loops
          if (value !== editorContent) {
            this.updateEditorContent(value || '');
          }
        }
      });

    // Mark initialization as complete after a delay
    setTimeout(() => {
      this.isInitializing = false;
      if (this.formControl) {
        this.formControl.markAsPristine();
      }
    }, 300);
  }

  private updateEditorContent(content: string): void {
    if (this.quillEditor) {
      try {
        this.quillEditor.clipboard.dangerouslyPasteHTML(content, 'silent');
      } catch (error) {
        console.error('Error setting editor content:', error);
      }
    }
  }

  onContentChanged(_event: any): void {
    // This is called by ngx-quill, but we handle changes via quill.on('text-change') instead
  }
}
