import {connect} from 'react-redux';
import FAQ from './FAQ';
import {FAQContent} from '../../data/dataStore';

const mapStateToProps = () => ({
  title: FAQContent.title,
  description: FAQContent.description,
  image: FAQContent.image,
  imageTitle: FAQContent.imageTitle,
});

export default connect(mapStateToProps)(FAQ);