import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>Close</button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
      <p>{image.description || 'No description'}</p>
      <p>{image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;

