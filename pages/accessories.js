import { AccessoriesHP } from 'pages/homepage';
import { getInitialProps } from 'static';

export default AccessoriesHP;

AccessoriesHP.getInitialProps = getInitialProps({ where: { type: 'accessories' } });