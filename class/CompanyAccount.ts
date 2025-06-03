import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    if (this.validateStatus(this.valorSolicitado)){
      this.balance = this.balance + this.valorSolicitado
      console.log('Voce pegou um empréstimo')
    }
  }
}
