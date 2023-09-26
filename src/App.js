import CustomForm from "./components/Auth/companySignUp/Form";
import Login from "./components/Auth/Login";
import List from "./pages/List";
import ClientFormSignup from "./components/Auth/clientFormSignup";
import CustomNavbar from "./components/navbars/CustomNavbar";
import LoginPage from "./Google";
import Home from "./components/home";
import "./App.css";
import ProfileClient from "./components/profileClient";
import ClientSpace from "./pages/ClientSpace";
import CompanySpace from "./pages/CompanySpace";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import DashboardCompany from "./pages/DashboardCompany";
import CompanyProfile from "./pages/CompanyProfile";
import PrivateRouteAdmin from "./privateRoutes/PrivateRouteAdmin";
import PrivateRouteCompany from "./privateRoutes/PrivateRouteCompany";
import PrivateRouteClient from "./privateRoutes/PrivateRouteClient";
import CompanyDetails from "./pages/companyDetailsContainer";
import DetailsCompanyProfile from "./pages/profileCompany/DetailsCompanyProfile";
import SettingCompany from "./pages/profileCompany/SettingCompany";
import ProductCompanyInProfile from "./pages/profileCompany/ProductCompanyInProfile";
import DetailsClientProfile from "./pages/profileClient/DetailsClientProfile";
import SettingClient from "./pages/profileClient/SettingClient";
import ClientSpaceListCompany from "./components/clientSpace";
import About from "./pages/landingPages/About.js";
import Contact from "./pages/landingPages/Contact.js";
import CodeVerification from "./pages/ChangePassword/CodeVerification";
import CreateNewPassword from "./pages/ChangePassword/CreateNewPassword";
import CreateCodeAccount from "./pages/createCodeAccount";
import Admin from "./pages/admin/Admin";
import Company from "./pages/admin/company/Company";
import Users from "./pages/admin/company/Users";
import BannedCompanies from "./pages/admin/company/BannedCompanies";
import ActivatedCompanies from "./pages/admin/company/ActivatedCompanies";
import Client from "./pages/admin/client";
import UsersClient from "./pages/admin/client/Users";
import ActivatedClient from "./pages/admin/client/ActivatedClient";
import BannedClient from "./pages/admin/client/BannedClient";
import MessageList from "./pages/admin/messages/MessageList";
import Dashboard from "./pages/admin/dashboard";

function App() {
	const routes=[
		{
			path: "/",
			element: (
				<>
					<CustomNavbar />
					<Login />
				</>
			),
		},
		{path: "/list",element: <List />},
		{
			path: "/create-account",
			element: (
				<>
					<CustomNavbar />
					<CustomForm />
				</>
			),
		},

		{
			path: "/code-verification",
			element: (
				<>
					<CustomNavbar />
					<CodeVerification />
				</>
			),
		},
		{
			path: "/code-register-client",
			element: (
				<PrivateRouteClient>
					<CreateCodeAccount />
				</PrivateRouteClient>
			),
		},

		{
			path: "/create-new-password",
			element: (
				<>
					<CustomNavbar />
					<CreateNewPassword />
				</>
			),
		},

		{
			path: "/about",
			element: (
				<>
					<CustomNavbar />
					<About />
				</>
			),
		},
		{
			path: "/contact",
			element: (
				<>
					<CustomNavbar />
					<Contact />
				</>
			),
		},
		{
			path: "/admin-space",
			element: (
				<PrivateRouteAdmin>
					<Admin />
				</PrivateRouteAdmin>
			),
			children: [
				{path: "dashboard",element: <Dashboard />},
				{
					path: "customer",
					element: <Client />,
					children: [
						{path: "all_clients",element: <UsersClient />},
						{path: "banned_clients",element: <BannedClient />},
						{path: "verified_clients",element: <ActivatedClient />},
					],
				},
				{
					path: "company",
					element: <Company />,
					children: [
						{path: "all_companies",element: <Users />},
						{path: "banned_companies",element: <BannedCompanies />},
						{path: "verified_companies",element: <ActivatedCompanies />},
					],
				},
				{
					path: "message",
					element: <MessageList />,
				},
			],
		},

		{
			path: "/create-account-client",
			element: (
				<>
					<CustomNavbar />
					<ClientFormSignup />
				</>
			),
		},
		{path: "/login-google",element: <LoginPage />},
		{
			path: "/home",
			element: <Home />,
		},

		{
			path: "/client-space",
			element: (
				<PrivateRouteClient>
					<ClientSpace />
				</PrivateRouteClient>
			),
			children: [
				{path: "home",element: <ClientSpaceListCompany />},
				{
					path: "profile_client",
					element: <ProfileClient />,
					children: [
						{path: "setting",element: <SettingClient />},
						{path: "details",element: <DetailsClientProfile />},
					],
				},
			],
		},
		{
			path: "/company-space",

			element: (
				<PrivateRouteCompany>
					<CompanySpace />
				</PrivateRouteCompany>
			),
			children: [
				{path: "dashboard",element: <DashboardCompany />},
				{
					path: "profile-company",
					element: <CompanyProfile />,
					children: [
						{path: "setting",element: <SettingCompany />},
						{path: "profile",element: <DetailsCompanyProfile />},
						{path: "story",element: <ProductCompanyInProfile />},
					],
				},
			],
		},
		{
			path: "/company_details/:nameCompany/:id/profile",
			element: <CompanyDetails />,
		},
	];
	const router=createBrowserRouter(routes);
	//to be merged
	return (
		<>
			<div className="App">
				<RouterProvider router={router} />
			</div>
		</>
	);
}

export default App;

/*const YourComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);

  useEffect(() => {
	const fetchStates = async () => {
	  try {
		const response = await fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`);
		const data = await response.json();

		if (data && data.length > 0) {
		  const subdivisions = data[0].subdivisions;
		  const statesData = Object.values(subdivisions).map((subdivision) => ({
			name: subdivision.name,
			code: subdivision.iso_3166_2,
		  }));
		  setStates(statesData);
		} else {
		  setStates([]);
		}
	  } catch (error) {
		console.error('Error fetching states:', error);
	  }
	};

	if (selectedCountry) {
	  fetchStates();
	}
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
	setSelectedCountry(event.target.value);
  };

  return (
	<div>
	  <select value={selectedCountry} onChange={handleCountryChange}>
		<option value="">Select a country</option>
		<option value="country1">Country 1</option>
		<option value="country2">Country 2</option>
		Add more country options as needed 
	  </select>

	  {states.length > 0 && (
		<div>
		  <h3>States:</h3>
		  <ul>
			{states.map((state) => (
			  <li key={state.code}>{state.name}</li>
			))}
		  </ul>
		</div>
	  )}
	</div>
  );
};

export default YourComponent;
*/
