import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{news.length} News</p>
            <div className="space-y-6">
                {
                    news.map((singleNews)=> (<NewsCard key={singleNews.id} news={singleNews}/>))
                }
            </div>
        </div>
    )
};

export default CategoryNews;