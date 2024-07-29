export class Pessoa {
  constructor(
    public id?: number,
    public nome?: string,
    public idade = 0,
    public dataNascimento?: string,
    public motorista?: string
  ) {}

  // Converte de dd/mm/aaaa para aaaa-mm-dd
  dateToRest() {
    return this.dataNascimento;
  }

  // Converte de aaaa-mm-dd para dd/mm/aaaa
  dateFromRest() {
    if (this.dataNascimento) {
      const [ano, mes, dia] = this.dataNascimento.split('-');
      this.dataNascimento = `${dia}/${mes}/${ano}`;
    }
  }
}
