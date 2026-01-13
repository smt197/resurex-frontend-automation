import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export class TranslateExtension implements FormlyExtension {
  constructor(private translate: TranslateService) {}
  
  prePopulate(field: FormlyFieldConfig) {
    const props = field.props || {};
    const validation = field.validation || {};
    const messages = validation.messages || {};

    // Check if should translate
    if (!props['translate'] || props['_translated']) {
      return;
    }

    // Mark as translated
    props['_translated'] = true;

    // Setup translations
    const expressions: Record<string, any> = {
      ...(field.expressions || {})
    };

    // Translate label if exists
    if (props.label) {
      expressions['props.label'] = this.translate.stream(props.label);
    }

    // Translate validation messages if exists
    Object.entries(messages).forEach(([key, message]) => {
      if (typeof message === 'string') {
        expressions[`validation.messages.${key}`] = this.translate.stream(message);
      }
    });

    if (Object.keys(expressions).length > 0) {
      field.expressions = expressions;
    }
  }
}

export function registerTranslateExtension(translate: TranslateService) {
  return {
    extensions: [
      {
        name: 'translate',
        extension: new TranslateExtension(translate),
      },
    ],
  };
}