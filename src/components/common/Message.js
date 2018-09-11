// @flow
import * as React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

const MessageStyled = styled.div`
  ${props => (!props.visible ? 'display:none;' : 'display: flex')};
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.19);
  background-color: ${props => props.background};
  color: ${props => props.color};
  animation: appear 0.4s ease 0s 1 normal;
  align-self: center;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    60% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  top: 0;
  width: 100%;
  max-width: 400px;
`;

const MessageContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const MessageColumnLeftStyled = styled.div`
  flex-grow: 99;
`;

const MessageColumnRightStyled = styled.div`
  flex-grow: 1;
`;

const MessageCloseStyled = styled.span`
  font-size: 18px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #595959;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const types = {
  SUCCESS: 'SUCCESS',
  INFO: 'INFO',
  WARNING: 'WARNING',
  DANGER: 'DANGER',
};

type ColorTypes = {
  background: string,
  color: string,
};

const typesColors: {
  [colorType: string]: ColorTypes,
  SUCCESS: ColorTypes,
  INFO: ColorTypes,
  WARNING: ColorTypes,
  DANGER: ColorTypes,
} = {
  SUCCESS: {
    background: '#618E15',
    color: '#FEFEFE',
  },
  INFO: {
    background: '#435CBC',
    color: '#FEFEFE',
  },
  WARNING: {
    background: '#E8B641',
    color: '#FEFEFE',
  },
  DANGER: {
    background: '#C1292E',
    color: '#FEFEFE',
  },
};

type Props = {
  children: React.Node,
  type: string,
  onClose?: () => void,
  visible?: boolean,
};

class Message extends React.PureComponent<Props> {
  static defaultProps = {
    visible: true,
    type: types.SUCCESS,
  };

  render() {
    const { visible, type } = this.props;
    return (
      <MessageWrapper>
        <MessageStyled
          visible={visible}
          background={typesColors[type].background}
          color={typesColors[type].color}
        >
          <MessageContainerStyled>
            <MessageColumnLeftStyled>{this.props.children}</MessageColumnLeftStyled>
            <MessageColumnRightStyled>
              <MessageCloseStyled onClick={this.props.onClose}>&times;</MessageCloseStyled>
            </MessageColumnRightStyled>
          </MessageContainerStyled>
        </MessageStyled>
      </MessageWrapper>
    );
  }
}

export default Message;
