import React from "react"
import ContentLoader from "react-content-loader"

const LoaderConversation = (props) => (
  <ContentLoader className="w-full h-full"
    speed={2}
    width={640}
    height={300}
    viewBox="0 0 640 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="46" rx="3" ry="3" width="200" height="6" /> 
    <circle cx="20" cy="20" r="20" /> 
    <rect x="50" y="30" rx="0" ry="0" width="300" height="6" /> 
    <rect x="280" y="75" rx="0" ry="0" width="300" height="6" /> 
    <rect x="280" y="91" rx="3" ry="3" width="200" height="6" /> 
    <circle cx="20" cy="137" r="20" /> 
    <rect x="48" y="126" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="147" rx="0" ry="0" width="300" height="6" /> 
    <rect x="48" y="162" rx="3" ry="3" width="200" height="6" /> 
    <rect x="280" y="194" rx="0" ry="0" width="300" height="6" /> 
    <rect x="280" y="212" rx="3" ry="3" width="200" height="6" />
  </ContentLoader>
)

export default LoaderConversation