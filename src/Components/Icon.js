const Icon = ({ image, webP, jp2, jxr }) => (
  <picture>
    {image && <img src={image} type="image/svg" />}
    <source srcset={webP} type="image/webp" />
    <source srcset={jp2} type="image/jp2" />
    <img src={jxr} type="image/vnd.ms-photo" />
  </picture>
);

export default Icon;
