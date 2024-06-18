import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.ImageCardImage}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;


