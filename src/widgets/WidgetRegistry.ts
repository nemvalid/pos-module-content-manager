import React from 'react';
import { TextFieldWidget } from './TextField';
import { RichTextWidget } from './RichText';
import { SelectWidget } from './Select';
import { CheckboxWidget } from './Checkbox';

export type WidgetFormFieldProps = {
  id: string
  label: string
  value: unknown
  error?: string
  helptext?: string
  // select props
  selectOptions?: string[]
  multiple?: boolean
};

export type WidgetPresentationalFieldProps = {
  value: unknown
};

export type Widget = {
  name: string
  formField: React.ComponentType<WidgetFormFieldProps>
  presentationalField: React.ComponentType<WidgetPresentationalFieldProps>
};

type Registry = {
  [key: Widget['name']]: Widget
};

export interface RegistryService {
  get(widgetName: Widget['name']): Widget
  getField(widgetName: Widget['name']): Widget['formField']
  getPresentationalField(widgetName: Widget['name']): Widget['presentationalField']
  register(widget: Widget): void
}

const registry: Registry = {};

export const widgetRegistry: RegistryService = {
  register(widget: Widget) {
    if (widget.name in registry) {
      throw new Error('Widget already exists with name ' + widget.name);
    }
    registry[widget.name] = widget;
  },
  get(widgetName) {
    if (!(widgetName in registry)) {
      throw new Error('Invalid widget type ' + widgetName);
    }
    return registry[widgetName];
  },
  getField(widgetName) {
    if (!(widgetName in registry)) {
      throw new Error('Invalid widget type ' + widgetName);
    }
    return registry[widgetName].formField;
  },
  getPresentationalField(widgetName) {
    if (!(widgetName in registry)) {
      throw new Error('Invalid widget type ' + widgetName);
    }
    return registry[widgetName].presentationalField;
  }
};

widgetRegistry.register(TextFieldWidget);
widgetRegistry.register(RichTextWidget);
widgetRegistry.register(SelectWidget);
widgetRegistry.register(CheckboxWidget);
