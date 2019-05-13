import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
  return {
    text: 'Welcome',
  };
}

export default withRouter(
  connect(mapStateToProps)(props => {
    return (
      <IntlProvider locale="en">
        <div>
          <h1>MAIN LAYOUT {props.text}</h1>
          {props.children}
        </div>
      </IntlProvider>
    );
  }),
)
