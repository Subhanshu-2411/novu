import type { JSONSchemaDto } from './json-schema-dto';
import { Slug, StepTypeEnum, WorkflowOriginEnum } from '../../types';
import { StepContentIssueEnum, StepIssueEnum } from './step-content-issue.enum';

export type StepDataDto = {
  controls: ControlsMetadata;
  variables: JSONSchemaDto;
  stepId: string;
  _id: string;
  name: string;
  slug: Slug;
  type: StepTypeEnum;
  origin: WorkflowOriginEnum;
  workflowId: string;
  workflowDatabaseId: string;
  issues?: StepIssuesDto;
};

export type StepUpdateDto = StepCreateDto & {
  _id: string;
};

export type StepCreateDto = StepDto & {
  controlValues?: Record<string, unknown>;
};

export type PatchStepDataDto = {
  name?: string;
  controlValues?: Record<string, unknown>;
};

export type StepDto = {
  name: string;
  type: StepTypeEnum;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Issue<T> {
  issueType: T;
  variableName?: string;
  message: string;
}

export class StepIssuesDto {
  body?: Record<StepCreateAndUpdateKeys, StepIssue>;
  controls?: Record<string, ContentIssue[]>;
}

export type StepCreateAndUpdateKeys = keyof StepCreateDto | keyof StepUpdateDto;

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ContentIssue extends Issue<StepContentIssueEnum> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface StepIssue extends Issue<StepIssueEnum> {}

export enum UiSchemaGroupEnum {
  IN_APP = 'IN_APP',
  EMAIL = 'EMAIL',
  DIGEST = 'DIGEST',
  DELAY = 'DELAY',
}

export enum UiComponentEnum {
  MAILY = 'MAILY',
  TEXT_FULL_LINE = 'TEXT_FULL_LINE',
  TEXT_INLINE_LABEL = 'TEXT_INLINE_LABEL',
  IN_APP_BODY = 'IN_APP_BODY',
  IN_APP_AVATAR = 'IN_APP_AVATAR',
  IN_APP_SUBJECT = 'IN_APP_PRIMARY_SUBJECT',
  IN_APP_BUTTON_DROPDOWN = 'IN_APP_BUTTON_DROPDOWN',
  URL_TEXT_BOX = 'URL_TEXT_BOX',
  DIGEST_AMOUNT = 'DIGEST_AMOUNT',
  DIGEST_UNIT = 'DIGEST_UNIT',
  DIGEST_KEY = 'DIGEST_KEY',
  DIGEST_CRON = 'DIGEST_CRON',
  DELAY_TYPE = 'DELAY_TYPE',
  DELAY_AMOUNT = 'DELAY_AMOUNT',
  DELAY_UNIT = 'DELAY_UNIT',
}

export class UiSchemaProperty {
  placeholder?: unknown;
  component: UiComponentEnum;
}

export class UiSchema {
  group?: UiSchemaGroupEnum;
  properties?: Record<string, UiSchemaProperty>;
}

export class ControlsMetadata {
  dataSchema?: JSONSchemaDto;
  uiSchema?: UiSchema;
  values: Record<string, unknown>;
}