import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./../styles/styles.css";

interface Api {
  name: string;
  url: string;
}

interface ApiCategories {
  [key: string]: Api[];
}

const ApisBuc: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [activeApi, setActiveApi] = useState<string | null>(null);
  /* const backendUrl = "http://localhost:3000"; */
  const backendUrl = "https://main.d10lb53q0mw9au.amplifyapp.com";

  const apis: ApiCategories = {
    BUC:[
      { name: "BUC", url: `${backendUrl}/BUC/apidocs.json` }
    ]
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleApiClick = (url: string) => {
    setSelectedApi(url);
    setActiveApi(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-lg text-empresa-verde text-mono py-4 px-6 rounded-md shadow-xl font-serif font-extrabold border-b-2 border-empresa-verde text-center">
        APIs BUC
      </h1>
      <div className="flex flex-1">
        <nav className="w-1/4 p-4 bg-slate-950 text-white">
          {Object.keys(apis).map((category) => (
            <div key={category} className="mb-4">
              <button
                className="text-lg font-semibold text-empresa-verde hover:text-empresa-rojo transition-colors"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
              {openCategory === category && (
                <ul className="mt-2 ml-4">
                  {apis[category].map((api) => (
                    <li key={api.name} className="mb-2">
                      <button
                        className={`hover:text-empresa-verde transition-colors ${activeApi === api.url ? 'text-empresa-rojo' : ''}`}
                        onClick={() => handleApiClick(api.url)}
                      >
                        {api.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="w-4/5 p-4">
          {selectedApi ? (
            
            <SwaggerUI url={selectedApi} />
          ) : (
            <p className="text-empresa-negro">Selecciona una API para ver la documentación...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApisBuc;
