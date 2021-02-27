import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer,ButtonsContainer } from './signup.styles';

class SignUp extends React.Component {
  render() {
    return (
      <SignInContainer>
        <h1>SignUp</h1>
        <form>
        <label>
          Username 
          <FormInput
          name='email'
          type='email'
          label='email'
          required
        />
        </label>
        <label>
        Password
        <FormInput
            name='password'
            type='password'
            label='password'
            required
          />
        </label>
          <ButtonsContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignUp;