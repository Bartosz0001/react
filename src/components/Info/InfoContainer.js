import {connect} from 'react-redux';
import Info from './Info';
import {InfoContent} from '../../data/dataStore';

const mapStateToProps = () => ({
  title: InfoContent.title,
  description: InfoContent.description,
  image: InfoContent.image,
  imageTitle: InfoContent.imageTitle,

});

export default connect(mapStateToProps)(Info);