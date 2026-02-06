export class Outil {
  id?: number;
  name: string;
  description?: any;

  constructor(outil: Outil) {
    this.id = outil.id || 0;
    this.name = outil.name;
    this.description = outil.description || undefined;
  }
}
