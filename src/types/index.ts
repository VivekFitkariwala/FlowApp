export enum WORKFLOW_STATE_FILTER {
  ALL = "All",
  COMPLETED = "Completed",
  PENDING = "Pending",
}

export enum WORKFLOW_STATUS {
  COMPLETED = "Completed",
  PENDING = "Pending",
}

export enum NODE_STATUS {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  PENDING = "Pending",
}

export interface AUTH_STATE {
  email: string;
  password: string;
}

interface NODE_STATE {
  id: string;
  task: string;
  description: string;
  state: NODE_STATUS;
}

interface WORKFLOW_STATE {
  id: string;
  name: string;
  state: WORKFLOW_STATUS;
  nodes: NODE_STATE[];
}

export interface APP_STATE {
  auth: AUTH_STATE | null;
  workflowState: WORKFLOW_STATE[];
}

export const AUTH_LOCAL_STORAGE = "app_auth";
