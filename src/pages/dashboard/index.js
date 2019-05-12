import styles from './index.css';
import RegistrationForm from '../components/RegistrationForm.js'
import { formatMessage } from 'umi-plugin-locale';
import { connect } from 'dva';

function App(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <RegistrationForm/>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname
  };
})(App);