import ContentLoader from "react-content-loader";

export default function Skeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={500}
      viewBox="0 0 400 500"
      backgroundColor="#23282F"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="137" rx="0" ry="0" width="1" height="0" />
      <rect x="16" y="30" rx="5" ry="5" width="360" height="219" />
      <rect x="17" y="331" rx="5" ry="5" width="360" height="18" />
      <rect x="16" y="334" rx="0" ry="0" width="4" height="1" />
      <rect x="48" y="364" rx="0" ry="0" width="8" height="2" />
      <rect x="16" y="355" rx="5" ry="5" width="360" height="18" />
      <rect x="15" y="379" rx="5" ry="5" width="360" height="18" />
      <rect x="17" y="262" rx="5" ry="5" width="360" height="59" />
      <rect x="75" y="318" rx="0" ry="0" width="0" height="1" />
      <rect x="26" y="428" rx="5" ry="5" width="101" height="19" />
    </ContentLoader>
  );
}
