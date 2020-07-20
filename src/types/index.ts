// TODO move this into respective folders

// Workflow types
export enum WORKFLOW_FILTER {
  ALL = "All",
  COMPLETED = "Completed",
  PENDING = "Pending",
}

export enum WORKFLOW_STATUS {
  COMPLETED = "Completed",
  PENDING = "Pending",
}

export interface WORKFLOW_MODEL {
  id: string;
  name: string;
  state: WORKFLOW_STATUS;
}

// Node types
export enum NODE_STATUS {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  PENDING = "Pending",
}

export interface NODE_MODEL {
  id: string;
  workflowId: string;
  task: string;
  description: string;
  state: NODE_STATUS;
}

// Auth Types
export interface AUTH_MODEL {
  email: string;
  password: string;
}

export interface AUTH_STATE {
  auth: AUTH_MODEL | null;
}

export interface WORKFLOW_STATE {
  workflowStates: WORKFLOW_MODEL[];
}

export interface NODE_STATE {
  nodeStates: NODE_MODEL[];
}

export const AUTH_LOCAL_STORAGE = "app_auth";
