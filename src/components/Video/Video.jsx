import PropTypes from 'prop-types';
import styles from './Video.module.css';

const Video = ({src, playbackRate=1.0}) => {
  return (
    <video 
    loop
    autoPlay
    muted
    className={styles.video}
    playbackRate={playbackRate}
    >
        <source src={src} />
    </video>
  )
}

Video.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
}

export default Video;
