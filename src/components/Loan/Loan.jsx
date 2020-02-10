import React, { Component } from 'react';
import LoanHeader from '../LoanHeader/LoanHeader';
import Month from '../Month/Month';
import InputBlock from '../InputBlock/InputBlock';
import CreditScore from '../CreditScore/CreditScore';

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: 36,
      creditScore: '750 - 800',
    };
  }

  handleMonthsChange = e => {
    this.setState({ months: +e.target.textContent });
  };

  handleCreditScoreChange = e => {
    this.setState({ creditScore: e.target.textContent });
  };

  render() {
    const { months, creditScore } = this.state;
    const { price } = this.props;
    return (
      <section className="loan">
        <LoanHeader price={price} />
        <Month months={months} onClick={this.handleMonthsChange} />
        <InputBlock header="Trade-In Value" inputSymbol="left" />
        <InputBlock header="Down Payment" inputSymbol="left" />
        <CreditScore onClick={this.handleCreditScoreChange} creditScore={creditScore} />
        <InputBlock header="Estimated APR" inputSymbol="right" />
      </section>
    );
  }
}

export default Loan;
