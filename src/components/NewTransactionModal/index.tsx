import Modal from 'react-modal'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Close from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../hooks/useTransactions'

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('income')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('income')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'>

      <button 
      type='button' 
      onClick={onRequestClose} 
      className="react-modal-close">
        <img src={Close} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)} />

        <input 
        placeholder='Valor'
        type='number'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          onClick={() => { setType('income') }}
          isActive={type === 'income'}
          activeColor="green">
            <img src={Income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
          type="button"
          onClick={() => { setType('outcome') }}
          isActive={type === 'outcome'}
          activeColor="red">
            <img src={Outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )
}