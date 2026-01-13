export class Permission {
  id: number;
  name: string;
  display_name?: string;
  guard_name: string;

  constructor(permission: Permission) {
    this.id = permission.id ?? 0;
    this.name = permission.name;
    this.display_name = permission.display_name || permission.name;
    this.guard_name = permission.guard_name;
  }
}

export interface PermissionCreateUpdateModel {
  id?: number;
  name: string;
  display_name?: string;
  guard_name?: string;
}
