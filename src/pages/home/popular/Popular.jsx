import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {

    const [endpoint, setEndpoint] = React.useState("movie")
    const {data, loading} = useFetch(`/${endpoint}/popular`)
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }   

    return <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Popular</span>
            <SwitchTabs data = {["Movies", "Tv"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading} endpoint={endpoint}/>
        
    </div>;
};

export default Popular;
