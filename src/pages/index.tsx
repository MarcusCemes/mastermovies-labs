import React from "react";

import { SEO } from "../components/seo/Seo";
import { IndexContainer } from "../containers/index/Index";

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home | Labs" />
    <IndexContainer />
  </>
);
export default IndexPage;
