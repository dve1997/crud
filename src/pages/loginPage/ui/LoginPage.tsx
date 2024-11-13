import Authorization from '../../../widgets/authorization';

import loginPage from './LoginPage.module.scss';
import logo from '../../../shared/icons/dve.jpg';

function LoginPage() {
  return (
    <main className={loginPage.login}>
      <img src={logo} alt="logo" />
      <Authorization />
    </main>
  );
}

export default LoginPage;
