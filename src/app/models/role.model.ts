export class Role {
  id: number;
  name: string;
  display_name?: string;
  guard_name: string;

  constructor(role: Role) {
    this.id = role.id ?? 0;
    this.name = role.name;
    this.display_name = role.display_name || role.name;
    this.guard_name = role.guard_name;
  }
}

export interface RoleCreateUpdateModel {
  id?: number;
  name: string;
  display_name?: string;
  guard_name?: string;
}
