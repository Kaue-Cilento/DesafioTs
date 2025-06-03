import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  override deposit = (): void => {
    if(this.validateStatus(this.valorSolicitado)){
      this.balance = this.balance + this.valorSolicitado + 10
      console.log('Voce depositou')
    }
  }
}