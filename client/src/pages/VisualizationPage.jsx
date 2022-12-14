import React, { useEffect, useState } from'react';

function VisualizationPage() {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`/Visualizations/vis.html`)).text());
    
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default VisualizationPage;