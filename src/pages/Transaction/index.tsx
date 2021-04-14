import React from 'react';
import Header from '../../components/Header';

import { Container, CardContainer, Card } from './styles';

const Transaction: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src="teste" alt="Income" />
            </header>
            <h1 data-testid="balance-income">Teste</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src="teste" alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">Teste</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src="teste" alt="Total" />
            </header>
            <h1 data-testid="balance-total">Teste</h1>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Transaction;
