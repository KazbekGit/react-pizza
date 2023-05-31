import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="129" r="130" /> 
    <rect x="16" y="282" rx="6" ry="6" width="250" height="31" /> 
    <rect x="20" y="325" rx="8" ry="8" width="246" height="72" /> 
    <rect x="142" y="403" rx="8" ry="8" width="124" height="48" /> 
    <rect x="24" y="409" rx="4" ry="4" width="99" height="36" />
  </ContentLoader>
)

export default Skeleton