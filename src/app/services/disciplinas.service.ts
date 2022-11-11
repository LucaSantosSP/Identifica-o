import { Injectable } from '@angular/core';

class Disciplinas {
  nome: string;
}

@Injectable()
export class DisciplinasService {
  private disciplinas: Disciplinas[] = [];

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
