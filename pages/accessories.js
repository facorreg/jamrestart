import Home from 'pages/homepage';
import { getInitialProps } from 'static';

export default Home;

Home.getInitialProps = getInitialProps({ type: 'accessories' });