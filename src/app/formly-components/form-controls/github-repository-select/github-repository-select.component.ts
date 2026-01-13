import { Component, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GithubRepository } from 'src/app/interfaces/GithubRepository';

export interface GithubRepositorySelectFieldConfig extends FieldTypeConfig {
  props: FieldTypeConfig['props'] & {
    repositories?: GithubRepository[];
    loading?: boolean;
  };
}

@Component({
  selector: 'app-github-repository-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './github-repository-select.component.html',
  styleUrls: ['./github-repository-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepositorySelectComponent
  extends FieldType<GithubRepositorySelectFieldConfig>
  implements OnInit, OnChanges {

  searchTerm = '';
  filteredRepositories: GithubRepository[] = [];

  ngOnInit(): void {
    this.updateFilteredRepositories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props'] || changes['field']) {
      this.updateFilteredRepositories();
    }
  }

  get repositories(): GithubRepository[] {
    return this.props.repositories || [];
  }

  get loading(): boolean {
    return this.props.loading || false;
  }

  get isDisabled(): boolean {
    return this.loading || this.props.disabled || false;
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.updateFilteredRepositories();
  }

  updateFilteredRepositories(): void {
    if (!this.searchTerm) {
      this.filteredRepositories = this.repositories;
    } else {
      this.filteredRepositories = this.repositories.filter(repo =>
        repo.full_name.toLowerCase().includes(this.searchTerm) ||
        repo.name.toLowerCase().includes(this.searchTerm) ||
        repo.owner.toLowerCase().includes(this.searchTerm)
      );
    }
  }

  getRepositoryLabel(repo: GithubRepository): string {
    const icon = repo.private ? '🔒' : '🌐';
    return `${icon} ${repo.full_name}`;
  }
}
