export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true
  protected valorSolicitado: number = 100

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if(this.validateStatus(this.valorSolicitado)){
      this.balance = this.balance + this.valorSolicitado
      console.log('Voce depositou')
    }
  }

  withdraw = (): void => {
    if (this.validateStatus(this.valorSolicitado) && this.valorSolicitado <= this.balance){
      this.balance = this.balance - this.valorSolicitado
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

   protected validateStatus = (valorSolicitado: number): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
