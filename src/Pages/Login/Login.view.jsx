import { Form, Field } from 'react-final-form';
import { legalText } from '../../config';
import { PrimaryButton } from '../../widgets/Buttons/Buttons';
import RenderTextInput from '../../Renderers/RenderTextInput';

import styles from './login.module.scss';

function LoginView({ onSubmit, errorMsg }) {
  return (
    <div className={styles.loginWrapper}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, invalid }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Field name="username" label="Email" type="input" component={RenderTextInput} />
              <Field name="password" label="Password" type="password" component={RenderTextInput} />
              <PrimaryButton
                label="Login"
                type="submit"
                className={styles.btn}
                disabled={invalid}
              />
              <div className={styles.errorMsg}>{!!errorMsg && errorMsg}</div>
              <div className={styles.forgotPassword}>
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </form>
          );
        }}
      </Form>

      <div className={styles.copyrightText}>{legalText}</div>
    </div>
  );
}
export default LoginView;
