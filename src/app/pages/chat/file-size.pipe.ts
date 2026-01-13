// Créez un pipe ex: src/app/pipes/file-size.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number | undefined | null): string {
    if (sizeInBytes === null || typeof sizeInBytes === 'undefined') {
      return '';
    }
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let size = sizeInBytes;
    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }
    return `${size.toFixed(1)} ${units[i]}`;
  }
}