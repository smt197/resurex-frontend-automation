import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export function getGithubRepositoryFormlyFields(
  translate: TranslateService
): FormlyFieldConfig[] {
  return [
    {
      key: 'name',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.FIELDS.NAME'),
        placeholder: translate.instant('GITHUB.FIELDS.NAME_PLACEHOLDER'),
        required: true
      }
    },
    {
      key: 'full_name',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.FIELDS.FULL_NAME'),
        placeholder: translate.instant('GITHUB.FIELDS.FULL_NAME_PLACEHOLDER'),
        required: true,
        description: translate.instant('GITHUB.FIELDS.FULL_NAME_HINT')
      }
    },
    {
      key: 'owner',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.FIELDS.OWNER'),
        placeholder: translate.instant('GITHUB.FIELDS.OWNER_PLACEHOLDER'),
        required: true
      }
    },
    {
      key: 'description',
      type: 'textarea',
      props: {
        label: translate.instant('GITHUB.FIELDS.DESCRIPTION'),
        placeholder: translate.instant('GITHUB.FIELDS.DESCRIPTION_PLACEHOLDER'),
        rows: 3
      },
      hide: true // Cache cette colonne dans la table
    },
    {
      key: 'html_url',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.FIELDS.URL'),
        placeholder: 'https://github.com/owner/repo',
        required: true,
        description: translate.instant('GITHUB.FIELDS.URL_HINT')
      }
    },
    {
      key: 'default_branch',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.FIELDS.DEFAULT_BRANCH'),
        placeholder: 'main',
        required: true
      }
    },
    {
      key: 'private',
      type: 'checkbox',
      props: {
        label: translate.instant('GITHUB.FIELDS.PRIVATE'),
        description: translate.instant('GITHUB.FIELDS.PRIVATE_HINT')
      },
      defaultValue: false,
      hide: true // Cache cette colonne dans la table
    },
    {
      key: 'visibility',
      type: 'select',
      props: {
        label: translate.instant('GITHUB.FIELDS.VISIBILITY'),
        required: true,
        options: [
          { value: 'public', label: translate.instant('GITHUB.VISIBILITY.PUBLIC') },
          { value: 'private', label: translate.instant('GITHUB.VISIBILITY.PRIVATE') }
        ]
      },
      defaultValue: 'public'
    }
  ];
}

export function getGithubBranchFormlyFields(
  translate: TranslateService
): FormlyFieldConfig[] {
  return [
    {
      key: 'name',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.BRANCH.NAME'),
        placeholder: translate.instant('GITHUB.BRANCH.NAME_PLACEHOLDER'),
        required: true
      }
    },
    {
      key: 'protected',
      type: 'checkbox',
      props: {
        label: translate.instant('GITHUB.BRANCH.PROTECTED'),
        description: translate.instant('GITHUB.BRANCH.PROTECTED_HINT')
      },
      defaultValue: false
    },
    {
      key: 'source_branch',
      type: 'input',
      props: {
        label: translate.instant('GITHUB.BRANCH.SOURCE'),
        placeholder: 'main',
        description: translate.instant('GITHUB.BRANCH.SOURCE_HINT')
      }
    }
  ];
}

export function githubSettingFormlyFields(
  translate: TranslateService
): FormlyFieldConfig[] {
  return [
    {
      key: 'github_token',
      type: 'input',
      props: {
        label: translate.instant('settings.github.token_label'),
        placeholder: translate.instant('settings.github.token_placeholder'),
        required: false,
        type: 'password',
        description: translate.instant('settings.github.token_description')
      }
    },
  ];
}

