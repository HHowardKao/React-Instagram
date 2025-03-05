type ImageProps = {
  image: string;
};
const Image: React.FC<ImageProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      className="w-screen max-h-100 object-scale-down border-b border-t border-gray-300"
    />
  );
};

export default Image;
