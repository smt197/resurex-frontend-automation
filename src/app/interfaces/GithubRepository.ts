export interface GithubRepository {
  id?: number;
  slug?: string;
  name: string;
  full_name: string;
  description?: string;
  owner: string;
  html_url: string;
  default_branch: string;
  private: boolean;
  visibility?: 'public' | 'private';
  is_owner?: boolean;
  branches?: GithubBranch[];
  selected?: boolean;
  created_at?: Date;
  updated_at?: Date;
  message?: string;
}

export interface GithubBranch {
  id?: number;
  name: string;
  protected: boolean;
  commit_sha?: string;
  commit_message?: string;
  repository_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface GithubWebhook {
  id?: number;
  repository_id: number;
  hook_id: number;
  name: string;
  events: string[];
  active: boolean;
  config: {
    url: string;
    content_type: string;
    secret?: string;
  };
  created_at?: Date;
  updated_at?: Date;
}

export interface GithubCommit {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
    date: Date;
  };
  committer: {
    name: string;
    email: string;
    date: Date;
  };
  html_url: string;
}
