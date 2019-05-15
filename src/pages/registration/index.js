import styles from './index.css';
import { connect } from 'dva';
import { Button } from 'antd'

import RegForm from './components/RegForm'

function Registration(props) {
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
})(Registration);