import { FormlyFieldConfig } from '@ngx-formly/core';

export interface ModuleActions {
  create?: { enabled: boolean };
  edit?: { enabled: boolean };
  delete?: { enabled: boolean };
  deleteAll?: { enabled: boolean };
  show?: { enabled: boolean };
  search?: { enabled: boolean };
  export?: { enabled: boolean };
}

export interface ModuleManagers {
  moduleName: string;
  displayName: string;
  displayNameSingular: string;
  resourceType: string;
  identifierField?: string;
  identifierType?: 'string' | 'number';
  requiresAuth?: boolean;
  routePath?: string;
  enabled?: boolean;
  devMode?: boolean;
  roles?: string[];
  actions?: ModuleActions;
  fieldsCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ModuleField {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'Date' | 'textarea' | 'quill-editor' | 'email' | 'password' | 'File';
  required: boolean;
}

export const moduleManagersFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'moduleName',
    type: 'input',
    props: {
      label: 'Module Name (plural)',
      placeholder: 'e.g., products',
      required: true
    },
    validation: {
      messages: {
        required: 'Module name is required'
      }
    }
  },
  {
    key: 'displayName',
    type: 'input',
    props: {
      label: 'Display Name (Plural)',
      placeholder: 'e.g., Products',
      required: true
    },
    validation: {
      messages: {
        required: 'Display name is required'
      }
    }
  },
  {
    key: 'displayNameSingular',
    type: 'input',
    props: {
      label: 'Display Name (Singular)',
      placeholder: 'e.g., Product',
      required: true
    },
    validation: {
      messages: {
        required: 'Display name (singular) is required'
      }
    }
  },
  {
    key: 'resourceType',
    type: 'input',
    props: {
      label: 'Resource Type',
      placeholder: 'e.g., products',
      required: true
    },
    validation: {
      messages: {
        required: 'Resource type is required'
      }
    }
  },
  {
    key: 'identifierField',
    type: 'select',
    props: {
      label: 'Identifier Field',
      placeholder: 'Select identifier',
      required: true,
      options: [
        { value: 'id', label: 'ID (number)' },
        { value: 'slug', label: 'Slug (string)' }
      ]
    },
    defaultValue: 'id'
  },
  {
    key: 'roles',
    type: 'select',
    props: {
      label: 'Access Roles',
      placeholder: 'Select roles',
      required: true,
      multiple: true,
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'user', label: 'User' }
      ]
    }
  },
  {
    key: 'requiresAuth',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Requires Authentication'
    },
    defaultValue: true
  },
  {
    key: 'devMode',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Development Mode (Mock Data)'
    },
    defaultValue: false
  },
  {
    key: 'actions.create.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Create Action'
    },
    defaultValue: true
  },
  {
    key: 'actions.edit.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Edit Action'
    },
    defaultValue: true
  },
  {
    key: 'actions.delete.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Delete Action'
    },
    defaultValue: true
  },
  {
    key: 'actions.deleteAll.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Delete All Action'
    },
    defaultValue: false
  },
  {
    key: 'actions.show.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Show/View Action'
    },
    defaultValue: true
  },
  {
    key: 'actions.search.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Search Action'
    },
    defaultValue: true
  },
  {
    key: 'actions.export.enabled',
    type: 'checkbox',
    wrappers: [],
    props: {
      label: 'Enable Export Action'
    },
    defaultValue: false
  }
];

/**
 * Get Git configuration Formly fields
 * @param repositories List of GitHub repositories
 * @param branches List of branches for the selected repository
 * @param loadingRepositories Whether repositories are loading
 * @param loadingBranches Whether branches are loading
 */
export function getGitConfigFormlyFields(
  repositories: any[] = [],
  branches: any[] = [],
  loadingRepositories: boolean = false,
  loadingBranches: boolean = false
): FormlyFieldConfig[] {
  return [
    {
      key: 'createBranch',
      type: 'checkbox',
      wrappers: [],
      props: {
        label: 'Push module to GitHub',
        description: 'Create a new branch and push generated files to GitHub automatically'
      },
      defaultValue: true,
      className: 'mb-4'
    },
    {
      key: 'repositorySlug',
      type: 'github-repository-select',
      props: {
        label: 'GitHub Repository',
        placeholder: loadingRepositories ? 'Loading repositories...' : 'Select a repository',
        required: true,
        repositories: repositories,
        loading: loadingRepositories,
        disabled: loadingRepositories,
        description: 'Select the GitHub repository where module files will be pushed'
      },
      expressions: {
        hide: '!model.createBranch'
      },
      validation: {
        messages: {
          required: 'Repository is required when pushing to GitHub'
        }
      }
    },
    {
      key: 'sourceBranch',
      type: 'github-branch-select',
      props: {
        label: 'Source Branch',
        placeholder: loadingBranches ? 'Loading branches...' : 'Select base branch',
        description: 'Base branch to create the new module branch from',
        branches: branches,
        loading: loadingBranches,
        disabled: loadingBranches
      },
      expressions: {
        hide: '!model.createBranch || !model.repositorySlug'
      }
    },
    {
      key: 'branchName',
      type: 'input',
      props: {
        label: 'New Branch Name',
        placeholder: 'e.g., module/products or feature/add-products',
        required: true,
        description: 'Name for the new branch that will be created'
      },
      expressions: {
        hide: '!model.createBranch'
      },
      validation: {
        messages: {
          required: 'Branch name is required'
        }
      }
    },
    {
      key: 'commitMessage',
      type: 'textarea',
      props: {
        label: 'Commit Message',
        placeholder: 'feat: Initialize products module\n\nGenerated files:\n- Model, Controller, Resources\n- Migration, Seeder\n- Translations',
        required: true,
        rows: 4,
        description: 'Commit message for the changes. Use conventional commits format.'
      },
      expressions: {
        hide: '!model.createBranch'
      },
      validation: {
        messages: {
          required: 'Commit message is required'
        }
      }
    }
  ];
}
