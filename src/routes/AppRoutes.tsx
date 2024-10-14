// import { FullMenu } from "@/mycomponents/FullMenu/FullMenu";
// import { Home } from "@/mycomponents/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { FullMenu } from "../pages/FullMenu/FullMenu";
export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<p>hola</p>} /> */}
				<Route path="/" element={<Home/>} />
				<Route path="/*" element={<Navigate to="/" />} />
				<Route path="/full-menu" element={<FullMenu />} />
			</Routes>
		</BrowserRouter>
	);	
}
