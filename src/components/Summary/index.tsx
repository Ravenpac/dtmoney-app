import Income from "../../assets/income.svg"
import Outcome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
import { useTransactions } from '../hooks/useTransactions';
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions()
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.incomes += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.outcomes += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc
  }, {
    incomes: 0,
    outcomes: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Income} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.incomes)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Outcome} alt="Saídas" />
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.outcomes)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}