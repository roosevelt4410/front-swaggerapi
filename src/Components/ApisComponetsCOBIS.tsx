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

const ApisComponetsCOBIS: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [activeApi, setActiveApi] = useState<string | null>(null);
  /* const backendUrl = "http://localhost:3000"; */
  const backendUrl = "https://main.d10lb53q0mw9au.amplifyapp.com";

  const apis: ApiCategories = {
    Loans:[
      { name: "Loans API", url: `${backendUrl}/LOANSCOBIS/COBISLoansAPI-resolved-v2-0-0-min.json` },
      { name: "Collateral API", url: `${backendUrl}/LOANSCOBIS/COBISCollateralAPI-resolved-v1-0-11-min.json` },
      { name: "Collateral Policies API", url: `${backendUrl}/LOANSCOBIS/COBISCollateralPoliciesAPI-resolved-v1-0-0-min.json` },
      { name: "Collaterals Association API", url: `${backendUrl}/LOANSCOBIS/COBISCollateralsAssociationAPI-resolved-v1-0-7-min.json` },
      { name: "Collaterals Attributes API", url: `${backendUrl}/LOANSCOBIS/COBISCollateralsAttributesAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Additional Data API", url: `${backendUrl}/LOANSCOBIS/COBISCreditLineAdditionalDataAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line API", url: `${backendUrl}/LOANSCOBIS/COBISCreditLineAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Collaterals API", url: `${backendUrl}/LOANSCOBIS/COBISCreditLineCollateralsAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Commissions API", url: `${backendUrl}/LOANSCOBIS/COBISCreditLineCommissionsAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Distribution API", url: `${backendUrl}/LOANSCOBIS/COBISCreditLineDistributionAPI-resolved-v1-0-1-min.json` },
      { name: "Debtors Loans API", url: `${backendUrl}/LOANSCOBIS/COBISDebtorsLoansAPI-resolved-v1-0-2-min.json` },
      { name: "Disbursements Loans API", url: `${backendUrl}/LOANSCOBIS/COBISDisbursementsLoansAPI-resolved-v1-1-7-min.json` },
      { name: "Insurance API", url: `${backendUrl}/LOANSCOBIS/COBISInsuranceAPI-resolved-v1-0-1-min.json` },
      { name: "Loans Amortizations API", url: `${backendUrl}/LOANSCOBIS/COBISLoansAmortizationsAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Balances API", url: `${backendUrl}/LOANSCOBIS/COBISLoansBalancesAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Change Situation API", url: `${backendUrl}/LOANSCOBIS/COBISLoansChangeSituationAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Operations API", url: `${backendUrl}/LOANSCOBIS/COBISLoansOperationsAPI-resolved-v1-0-6-min.json` },
      { name: "Loans Simulations API", url: `${backendUrl}/LOANSCOBIS/COBISLoansSimulationsAPI-resolved-v1-0-0-min.json` },
      { name: "Payments Loans API", url: `${backendUrl}/LOANSCOBIS/COBISPaymentsLoansAPI-resolved-v1-1-8-min.json` },
      { name: "Subsidy Loss API", url: `${backendUrl}/LOANSCOBIS/COBISSubsidyLossAPI-resolved-v1-0-1-min.json` },
      { name: "Transactional Loans API", url: `${backendUrl}/LOANSCOBIS/COBISTransactionalLoansAPI-resolved-v2-0-0-min.json` }
    ],
    Customers:[
      { name: "Additional Information Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISAdditionalInformationCustomersAPI-resolved-v1-1-6.json` },
      { name: "Businesses Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISBusinessesCustomersAPI-resolved-v1-3-5.json` },
      { name: "Contacts Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISContactsCustomersAPI-resolved-v4-0-5.json` },
      { name: "Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISCustomersAPI-resolved-v3-1-7.json` },
      { name: "Customers Balance API", url: `${backendUrl}/CUSTOMERCOBIS/COBISCustomersBalanceAPI-resolved-v1-4-0.json` },
      { name: "Economic Groups Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISEconomicGroupsCustomersAPI-resolved-v1-1-1.json` },
      { name: "Foreign Accounts API", url: `${backendUrl}/CUSTOMERCOBIS/COBISForeignAccountsAPI-resolved-v1-1-0.json` },
      { name: "Legal Persons Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISLegalPersonsCustomersAPI-resolved-v1-4-6.json` },
      { name: "Products Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISProductsCustomersAPI-resolved-v1-0-3.json` },
      { name: "References Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISReferencesCustomersAPI-resolved-v1-1-1.json` },
      { name: "Relationships Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISRelationshipsCustomersAPI-resolved-v1-1-4.json` },
      { name: "Solidarity Groups Customers API", url: `${backendUrl}/CUSTOMERCOBIS/COBISSolidarityGroupsCustomersAPI-resolved-v1-0-1.json` }
    ],    
    Orders:[
      { name: "Orders API", url: `${backendUrl}/ORDERSCOBIS/COBIS Orders API-v1-oas30.json` },
      { name: "Businesses Customers API", url: `${backendUrl}/ORDERSCOBIS/COBIS Orders Template API-v1-oas30.json` }
    ],
    DemandDepositsAccounts:[
      { name: "Automatic Savings Plan Demand Deposits", url: `${backendUrl}/DEMANDDEPOSITS/COBISAutomaticSavingsPlanDemandDepositsAPI-resolved-v1-0-1.json` },
      { name: "Balances Demand Deposits API", url: `${backendUrl}/DEMANDDEPOSITS/COBISBalancesDemandDepositsAPI-resolved-v2-4-7.json` },
      { name: "Demand Deposits API", url: `${backendUrl}/DEMANDDEPOSITS/COBISDemandDepositsAPI-resolved-v2-5-10.json` },
      { name: "Checking Account API", url: `${backendUrl}/DEMANDDEPOSITS/COBISCheckingAccountAPI-resolved-v1-3-1.json` },
      { name: "Financial Transactional Demand Deposits API", url: `${backendUrl}/DEMANDDEPOSITS/COBISFinancialTransactionalDemandDepositsAPI-resolved-v2-4-3.json` },
      { name: "Freezing Demand Deposits API", url: `${backendUrl}/DEMANDDEPOSITS/COBISFreezingDemandDepositsAPI-resolved-v2-4-5.json` },
      { name: "Overdraft Checking Account API", url: `${backendUrl}/DEMANDDEPOSITS/COBISOverdraftCheckingAccountAPI-resolved-v1-5-6.json` },
      { name: "Transactional Demand Deposits API", url: `${backendUrl}/DEMANDDEPOSITS/COBISTransactionalDemandDepositsAPI-resolved-v2-6-8.json` }
    ],
    TimeDeposits:[
      { name: "TimeDepositsAPI", url: `${backendUrl}/TIMEDEPOSITS/COBISTimeDepositsAPI.json` },
      { name: "TimeDepositsBlocksAPI", url: `${backendUrl}/TIMEDEPOSITS/COBISTimeDepositsBlocksAPI.json` },
      { name: "TimeDepositsManagementAPI", url: `${backendUrl}/TIMEDEPOSITS/COBISTimeDepositsManagementAPI.json` }
    ],
    Admin:[
      { name: "AdminAPI", url: `${backendUrl}/ADMIN/COBISAdminAPI.json` }
    ],
    Authentication:[
      { name: "COBISSystemAuthorizationAPI", url: `${backendUrl}/AUTHENTICATION/COBISSystemAuthorizationAPI-resolved-v1-0-0.json` },
      { name: "COBISOfficialAuthentication", url: `${backendUrl}/AUTHENTICATION/COBISOfficialAuthenticationV2API-resolved-v2-0-1.json` }
    ],
    FinancialProductManager:[
      { name: "FinancialProductManager", url: `${backendUrl}/FINANCIALPRODUCTMANAGER/COBISFinancialProductManagerV2API-resolved-v2-0-0.json` }
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
        APIs Externas COBIS
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

export default ApisComponetsCOBIS;
