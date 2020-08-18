import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon/Icon';
import { connect } from 'react-redux';
import { addItem, hideCardForm } from 'actions';
import removeIcon from 'assets/icons/remove-button.svg';

const StyledWrapper = styled.div`
  background-color: white;
  min-height: 18rem;
  box-shadow: 0 0 10px 1px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  padding: 1.4rem 3rem 1.4rem 1.4rem;
  position: relative;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  border-bottom: 1px solid
    ${(props) => (props.isValid ? 'transparent' : '#ff5a3b')};

  &::placeholder {
    color: ${(props) => (props.isValid ? null : '#ff5a3b')};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  background-size: 1.5rem;
  top: 0.7rem;
  right: 0.7rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

class CardForm extends Component {
  state = {
    isValid: true,
  };
  render() {
    const { columnId, addItem, hideCardForm } = this.props;
    return (
      <StyledWrapper>
        <StyledIcon icon={removeIcon} onClick={() => hideCardForm()} />
        <Formik
          initialValues={{ title: '', content: '' }}
          onSubmit={(values) => {
            if (values.title.trim() === '') {
              this.setState({
                isValid: false,
              });
              return;
            }
            addItem(columnId, values);
            hideCardForm();
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <StyledForm>
              <StyledInput
                title="true"
                placeholder="Wpisz tytuł..."
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                isValid={this.state.isValid}
              />
              <Input
                description
                placeholder="Tutaj wpisz opis..."
                name="content"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <Button submit type="submit">
                Dodaj
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

CardForm.propTypes = {
  columnId: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  hideCardForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (columnId, taskContent) => dispatch(addItem(columnId, taskContent)),
  hideCardForm: () => dispatch(hideCardForm()),
});

export default connect(null, mapDispatchToProps)(CardForm);
