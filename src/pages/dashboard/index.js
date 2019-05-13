import styles from './index.css';
import RegForm from './components/RegForm'
import { formatMessage } from 'umi-plugin-locale';
import { connect } from 'dva';

function App(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <RegForm/>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname
    
  };
})(App);