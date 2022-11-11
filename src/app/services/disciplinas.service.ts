import { Injectable } from '@angular/core';

class Task {
  nome: string;
}

@Injectable()
export class DisciplinasService {
  private disciplinas: Task[] = [];

  constructor() {}

  add(nome: string) {
    this.disciplinas.push({ nome });
  }
  remove(index: number) {
    this.disciplinas.splice(index, 1);
  }
  getList() {
    return this.disciplinas;
  }
}
