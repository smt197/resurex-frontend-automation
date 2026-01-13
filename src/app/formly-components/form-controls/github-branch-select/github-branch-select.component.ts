import { Component, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { GithubBranch } from 'src/app/interfaces/GithubRepository';

export interface GithubBranchSelectFieldConfig extends FieldTypeConfig {
  props: FieldTypeConfig['props'] & {
    branches?: GithubBranch[];
    loading?: boolean;
  };
}

@Component({
  selector: 'app-github-branch-select',
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
  templateUrl: './github-branch-select.component.html',
  styleUrls: ['./github-branch-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubBranchSelectComponent
  extends FieldType<GithubBranchSelectFieldConfig>
  implements OnInit, OnChanges {

  searchTerm = '';
  filteredBranches: GithubBranch[] = [];

  ngOnInit(): void {
    this.updateFilteredBranches();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props'] || changes['field']) {
      this.updateFilteredBranches();
    }
  }

  get branches(): GithubBranch[] {
    return this.props.branches || [];
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
    this.updateFilteredBranches();
  }

  updateFilteredBranches(): void {
    if (!this.searchTerm) {
      this.filteredBranches = this.branches;
    } else {
      this.filteredBranches = this.branches.filter(branch =>
        branch.name.toLowerCase().includes(this.searchTerm)
      );
    }
  }

  getBranchLabel(branch: GithubBranch): string {
    const icon = branch.protected ? '🔒' : '🔀';
    return `${icon} ${branch.name}`;
  }
}
