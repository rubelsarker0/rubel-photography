import { useEffect, useState } from 'react';

const useServices = () => {
	const [services, serServices] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getServices = async () => {
		try {
			const servicesUrl = `/services.json`;
			const response = await fetch(servicesUrl);
			const data = await response.json();
			serServices(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getServices();
	}, []);

	return [services, serServices, isLoading];
};

export default useServices;
