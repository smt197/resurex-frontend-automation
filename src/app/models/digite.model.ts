export class Digite {
  id?: number;
  name: string;
  description?: string;

  constructor(digite: Digite) {
    this.id = digite.id || 0;
    this.name = digite.name;
    this.description = digite.description || '';
  }
}
