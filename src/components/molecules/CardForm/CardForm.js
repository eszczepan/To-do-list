import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { addItem, hideCardForm } from 'actions';

const StyledWrapper = styled.div`
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
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

const CardForm = ({ column, addItem, hideCardForm }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ title: '', content: '' }}
        onSubmit={(values) => {
          addItem(column.id, values);
          hideCardForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <Input
              title="true"
              placeholder="Wpisz tytuł..."
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
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
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (columnId, taskContent) => dispatch(addItem(columnId, taskContent)),
  hideCardForm: () => dispatch(hideCardForm()),
});

export default connect(null, mapDispatchToProps)(CardForm);
