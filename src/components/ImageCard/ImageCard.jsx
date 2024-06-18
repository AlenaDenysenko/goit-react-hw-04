import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.ImageCard} onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.ImageCardImage} />
    </div>
  );
};

export default ImageCard;

