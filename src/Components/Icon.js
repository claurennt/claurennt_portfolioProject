const Icon = ({ svg, jp2, jxr }) => (
  <picture>
    <source srcSet={svg} type="image/svg+xml" />
    <source srcSet={jp2} type="image/jp2" />
    <img src={jxr} type="image/vnd.ms-photo" />
  </picture>
);

export default Icon;
