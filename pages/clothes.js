import { ClothesHP } from 'pages/homepage';
import { getInitialProps } from 'static';

export default ClothesHP;

ClothesHP.getInitialProps = getInitialProps({ where: { type: 'clothes' } });