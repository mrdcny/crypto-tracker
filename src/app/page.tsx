"use client"
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import CoinList, { Asset } from './components/CoinList';

export default function Home() {
	const [data, setData]: any[] = useState([]);
	const [results, setResults]: any[] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const allData = await getAssets();
			setData(allData);
			setResults(allData);
		};
		fetchData();
	}, []);

	const handleSearch = (query: string) => {
		if (query) {
			const filteredResults = data.filter((item: Asset) =>
				item.name.toLowerCase().includes(query.toLowerCase())
			);
			setResults(filteredResults);
		} else {
			setResults(data);
		}

	};

	return <div>
		<SearchBar handleSearch={handleSearch} />
		<CoinList assets={results} />
	</div>;
}



async function getAssets() {
	const response = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
	);
	const assets: Asset[] = await response.json();
	return assets;
}