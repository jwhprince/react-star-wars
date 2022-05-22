import Video from '@components/Video';
import video from './video/han-solo.mp4';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
         The dark side of the force has won.<br />
         We cannot display data.<br />
         Come back when we fix everything
      </p>
      <Video src={video}  />
    </>
  )
}

export default ErrorMessage;
