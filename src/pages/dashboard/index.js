import styles from './index.css';
import { connect } from 'dva';
import { Button } from 'antd'
import router from 'umi/router';

function App(props) {

  function toRegistration(e){
    e.preventDefault();
    router.push('/users/sign_up');
  }

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Button
        type="primary"
        onClick={toRegistration}
      > 去注册 </Button>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname
  };
})(App);