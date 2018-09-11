// @flow
import React from 'react';
import styled from 'styled-components';

import Message, { types } from '../components/common/Message';

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

type Props = {
  error: Error,
  retry: () => void,
};

class FailureView extends React.PureComponent<Props> {
  render() {
    const { error, retry } = this.props;
    const { message } = error;
    const buttonRetry = retry ? (
      <button onClick={retry}>
        <span>Tentar novamente</span>
      </button>
    ) : null;
    return (
      <ContainerStyled>
        <Message type={types.DANGER}>
          Erro: {`${message || ''}`}
          {buttonRetry}
        </Message>
      </ContainerStyled>
    );
  }
}

export default FailureView;
