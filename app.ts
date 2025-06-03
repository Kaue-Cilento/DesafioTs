import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.getBalance()
peopleAccount.deposit()
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getBalance()
companyAccount.deposit()
companyAccount.getBalance()
companyAccount.getLoan()
companyAccount.getBalance()
