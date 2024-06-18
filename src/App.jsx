import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import styles from './App.module.css';
import { useEffect, useState } from 'react';


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: {
            query,
            page,
            per_page: 18,
            client_id: 'v8Yz4MWJbqwoMFcY7cvCAKgXN3eAWzUE_29ha-bVlA0',
          },
        });
        setImages(prevImages => [...prevImages, ...response.data.results]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage(prevPage => prevPage + 1)} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;


